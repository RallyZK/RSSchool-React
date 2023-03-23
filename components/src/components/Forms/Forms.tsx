/* eslint-disable array-callback-return */
import './Forms.css';
import React, { Component } from 'react';
import { emptyState, IFormCard } from '../../utils/types';
import CardInForms from '../CardInForms';

class Forms extends Component {
  state = emptyState;

  formRef = React.createRef<HTMLFormElement>();
  nameRef = React.createRef<HTMLInputElement>();
  dateRef = React.createRef<HTMLInputElement>();
  purposeRef = React.createRef<HTMLSelectElement>();
  chexboxRefVilla = React.createRef<HTMLInputElement>();
  chexboxRefApartment = React.createRef<HTMLInputElement>();
  transferRefyes = React.createRef<HTMLInputElement>();
  transferRefno = React.createRef<HTMLInputElement>();
  fileRef = React.createRef<HTMLInputElement>();

  checkName = (): void => {
    const REG_EXP = /^[a-zA-Z]+$/;
    let err = '';
    if (this.nameRef.current && this.nameRef.current.value.trim().length < 2) {
      err = 'Name should contain min 2 characters';
    } else if (
      this.nameRef.current &&
      this.nameRef.current.value.trim()[0].toUpperCase() !== this.nameRef.current.value[0]
    ) {
      err = 'Name should starts with a capital letter';
    } else if (this.nameRef.current && !this.nameRef.current.value.trim().match(REG_EXP)) {
      err = 'Please write your name only in latin characters';
    }
    this.setState({ nameError: err });
  };

  checkSelect = (): void => {
    if (this.purposeRef.current) {
      this.setState({ selectError: this.purposeRef.current.value === 'Select a purpose' ? 'Select a purpose' : '' });
    }
  };

  checkCheckboxes = (): void => {
    let checkedCount = 0;
    if (this.chexboxRefVilla.current) {
      checkedCount = this.chexboxRefVilla.current.checked ? checkedCount + 1 : checkedCount + 0;
    }
    if (this.chexboxRefApartment.current) {
      checkedCount = this.chexboxRefApartment.current.checked ? checkedCount + 1 : checkedCount + 0;
    }
    this.setState({ checkboxError: checkedCount === 0 ? 'Select something' : '' });
  };

  checkRadioBtns = () => {
    console.log(this.transferRefyes && this.transferRefyes.current?.checked);
    console.log(this.transferRefno && this.transferRefno.current?.checked);
    if (
      (this.transferRefyes &&
        this.transferRefyes.current?.checked &&
        this.transferRefno &&
        !this.transferRefno.current?.checked) ||
      (this.transferRefyes &&
        !this.transferRefyes.current?.checked &&
        this.transferRefno &&
        this.transferRefno.current?.checked)
    ) {
      this.setState({ radioError: '' });
    } else {
      this.setState({ radioError: 'Select something' });
    }
  };

  checkFile = () => {
    if (this.fileRef && this.fileRef.current && this.fileRef.current.files?.length) {
      this.setState({ fileError: '' });
    } else {
      this.setState({ fileError: 'Please, upload a photo' });
    }
  };

  clearForm = () => {
    this.formRef.current && this.formRef.current.reset();
  };

  createCardInfo = () => {
    const card2: IFormCard = {
      name: this.nameRef && this.nameRef.current ? this.nameRef.current.value : '',
      date: this.dateRef && this.dateRef.current ? this.dateRef.current.value : '',
      purpose: this.purposeRef && this.purposeRef.current ? this.purposeRef.current.value : '',
      realEstate: [
        this.chexboxRefVilla && this.chexboxRefVilla.current?.checked && this.chexboxRefVilla.current?.name
          ? this.chexboxRefVilla.current.name
          : '',
        this.chexboxRefApartment && this.chexboxRefApartment.current?.checked && this.chexboxRefApartment.current?.name
          ? this.chexboxRefApartment.current.name
          : '',
      ],
      transfer: this.transferRefyes && this.transferRefyes.current?.checked ? 'yes' : 'no',
      file:
        this.fileRef && this.fileRef.current && this.fileRef.current.files
          ? URL.createObjectURL(this.fileRef.current.files[0])
          : '',
    };
    const updatedCards = this.state.cards.map((el) => el);
    updatedCards.push(card2);
    this.setState({ cards: updatedCards });
  };

  openModal = () => {
    this.setState({ isFormFilled: true });
    const timer = setTimeout(() => {
      this.setState({ isFormFilled: false });
      clearTimeout(timer);
    }, 5000);
  };

  handleFormSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    await this.checkName();
    await this.checkSelect();
    await this.checkCheckboxes();
    await this.checkRadioBtns();
    await this.checkFile();
    if (
      !this.state.nameError &&
      !this.state.selectError &&
      !this.state.checkboxError &&
      !this.state.radioError &&
      !this.state.fileError
    ) {
      this.createCardInfo();
      this.openModal();
      this.clearForm();
    }
    event.preventDefault();
  };

  render() {
    return (
      <>
        <form className='forms-wrapper' ref={this.formRef} onSubmit={(event) => this.handleFormSubmit(event)}>
          <div className='input-wrapper'>
            <label htmlFor='name' className='label'>
              Name: <span className='error'>{this.state.nameError}</span>
            </label>
            <input
              id='name'
              type='text'
              ref={this.nameRef}
              className='input-name'
              placeholder='Enter your name here'
            ></input>
          </div>
          <div className='input-wrapper'>
            <label htmlFor='date' className='label'>
              Visit date:
            </label>
            <input
              id='date'
              type='date'
              ref={this.dateRef}
              defaultValue={new Date().toISOString().slice(0, 10)}
              min={new Date().toISOString().slice(0, 10)}
              className='input-date'
            ></input>
          </div>
          <div className='input-wrapper'>
            <label htmlFor='select' className='label'>
              Purpose of the visit: <span className='error'>{this.state.selectError}</span>
            </label>
            <select id='select' defaultValue='Select a purpose' className='input-select' ref={this.purposeRef}>
              <option>Select a purpose</option>
              <option>To buy a real state</option>
              <option>To rent a real state</option>
            </select>
          </div>
          <div className='input-wrapper'>
            <p className='label'>
              What type of real estate are you interested in? <span className='error'>{this.state.checkboxError}</span>
            </p>
            <label>
              <input name='Villa' defaultChecked={false} type='checkbox' ref={this.chexboxRefVilla}></input>
              Villa
            </label>
            <label>
              <input name='Apartment' defaultChecked={false} type='checkbox' ref={this.chexboxRefApartment}></input>
              Apartment
            </label>
          </div>
          <div className='input-wrapper'>
            <p className='label'>
              Do you need a transfer from the airport?
              <span className='error'>{this.state.radioError}</span>
            </p>
            <label>
              <input name='transfer' type='radio' ref={this.transferRefyes} defaultValue='yes'></input>
              Yes
            </label>
            <label>
              <input name='transfer' type='radio' ref={this.transferRefno} defaultValue='no'></input>
              No
            </label>
          </div>
          <div className='input-wrapper'>
            <p className='label'>
              Upload a photo: <span className='error'>{this.state.fileError}</span>
            </p>
            <input type='file' ref={this.fileRef} accept='image/*,.png,.jpg'></input>
          </div>
          <button className='button'>Submit</button>
        </form>
        <div className='cards-collection'>
          {this.state.cards.map((card, index) => {
            if (index > 0) {
              return <CardInForms card={card} key={card.name} />;
            }
          })}
        </div>
        <div className={`modal-wrapper ${this.state.isFormFilled ? '' : 'display-none'}`}>
          <div className='modal-img'></div>
          <h2 className='modal-title'>You information is successfully saved!</h2>
        </div>
      </>
    );
  }
}

export default Forms;
