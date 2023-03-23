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
    let err = '';
    if (this.nameRef.current && this.nameRef.current.value.length < 2) {
      err = 'Name should contain min 2 characters';
    } else if (this.nameRef.current && this.nameRef.current.value[0].toUpperCase() !== this.nameRef.current.value[0]) {
      err = 'Name should starts with a capital letter';
    }
    this.setState({ nameError: err });
  };

  checkSelect = (): void => {
    if (this.purposeRef.current) {
      const err = this.purposeRef.current.value === 'Select a purpose' ? 'Select a purpose' : '';
      this.setState({ selectError: err });
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
    const err = checkedCount === 0 ? 'Select something' : '';
    this.setState({ checkboxError: err });
  };

  handleFormSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    await this.checkName();
    await this.checkSelect();
    await this.checkCheckboxes();
    if (this.state.nameError === '' && this.state.selectError === '' && this.state.checkboxError === '') {
      this.createCardInfo();
      this.clearForm();
    }
    event.preventDefault();
  };

  clearForm = () => {
    this.formRef.current && this.formRef.current.reset();
  };

  createCardInfo = () => {
    const card: IFormCard = {
      name: '',
      date: '',
      purpose: '',
      realEstate: [],
      transfer: '',
      file: '',
    };
    if (this.nameRef && this.nameRef.current) card.name = this.nameRef.current.value;
    if (this.dateRef && this.dateRef.current) card.date = this.dateRef.current.value;
    if (this.purposeRef && this.purposeRef.current) card.purpose = this.purposeRef.current.value;
    if (
      this.chexboxRefVilla &&
      this.chexboxRefVilla.current?.checked &&
      this.chexboxRefVilla.current?.name &&
      card.realEstate
    )
      card.realEstate.push(this.chexboxRefVilla.current?.name);
    if (
      this.chexboxRefApartment &&
      this.chexboxRefApartment.current?.checked &&
      this.chexboxRefApartment.current?.name &&
      card.realEstate
    )
      card.realEstate.push(this.chexboxRefApartment.current?.name);
    if (this.transferRefyes && this.transferRefyes.current?.checked) card.transfer = 'yes';
    if (this.transferRefno && this.transferRefno.current?.checked) card.transfer = 'no';
    if (this.fileRef && this.fileRef.current && this.fileRef.current.files)
      card.file = URL.createObjectURL(this.fileRef.current.files[0]);
    const updatedCards = this.state.cards.map((el) => el);
    updatedCards.push(card);
    this.setState({ cards: updatedCards });
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
              required
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
            <select id='select' required defaultValue='Select a purpose' className='input-select' ref={this.purposeRef}>
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
            <p className='label'>Do you need a transfer from airport?</p>
            <label>
              <input name='transfer' type='radio' required ref={this.transferRefyes} defaultValue='yes'></input>
              Yes
            </label>
            <label>
              <input name='transfer' type='radio' required ref={this.transferRefno} defaultValue='no'></input>
              No
            </label>
          </div>
          <div className='input-wrapper'>
            <p className='label'>Upload a photo:</p>
            <input type='file' ref={this.fileRef} required accept='image/*,.png,.jpg'></input>
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
      </>
    );
  }
}

export default Forms;
