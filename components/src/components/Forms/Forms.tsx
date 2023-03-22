import './Forms.css';
import React, { Component } from 'react';
import { allFormCards, emptyState } from '../../utils/types';

class Forms extends Component {
  state = emptyState;

  formRef = React.createRef<HTMLFormElement>();
  nameRef = React.createRef<HTMLInputElement>();
  dateRef = React.createRef<HTMLInputElement>();
  purposeRef = React.createRef<HTMLSelectElement>();
  optionRef = React.createRef<HTMLOptionElement>();
  typeRef = React.createRef<HTMLInputElement>();
  chexboxRef = React.createRef<HTMLInputElement>();
  transferRef = React.createRef<HTMLInputElement>();
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

  // onChangeCheckbox = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   const box = this.typeRef.current;
  //   let selectedArrBox = this.state.checkboxes;
  //   console.log('checkboxes::::::', this.typeRef.current);
  //   selectedArrBox = this.state.checkboxes.map((el: ICheckBox) => {
  //     if (box && el.name === box.name) {
  //       el.checked = !el.checked;
  //     }
  //     return el;
  //   });

  //   this.setState({ checkboxes: selectedArrBox });
  // };

  checkCheckboxes = (): void => {
    let checkedCount = 0;
    this.state.checkboxes.forEach((box) => {
      checkedCount = box.checked ? checkedCount + 1 : checkedCount + 0;
    });
    const err = checkedCount === 0 ? 'Select something' : '';
    this.setState({ checkboxError: err });
  };

  handleFormSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log('state:::', this.state);
    this.checkName();
    this.checkSelect();
    this.checkCheckboxes();
    if (!this.state.nameError && !this.state.selectError && !this.state.checkboxError) {
      // allFormCards.push({
      //   name: this.nameRef.current.value,
      //   date: this.dateRef.current.value,
      //   purpose: this.purposeRef.current.value,
      //   realEstate: this.typeRef.current.value,
      //   transfer: this.transferRef.current.value,
      //   file: this.fileRef.current.value,
      // });
      console.log('all inputs checked!!!');
      console.log('allFormCards:::', allFormCards);
      // this.clearForm();
    }
  };

  clearForm = () => {
    this.formRef.current && this.formRef.current.reset();
  };

  render() {
    return (
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
          {this.state.checkboxes.map((box) => (
            <label className='' key={box.name}>
              <input name={box.name} defaultChecked={false} type='checkbox' ref={this.chexboxRef}></input>
              {box.name}
            </label>
          ))}
        </div>
        <div className='input-wrapper'>
          <p className='label'>Do you need a transfer from airport?</p>
          <label>
            <input name='transfer' type='radio' required ref={this.transferRef} defaultValue='yes'></input>
            Yes
          </label>
          <label>
            <input name='transfer' type='radio' required ref={this.transferRef} defaultValue='no'></input>
            No
          </label>
        </div>
        <div className='input-wrapper'>
          <p className='label'>Upload a photo:</p>
          <input type='file' ref={this.fileRef} required accept='image/*,.png,.jpg'></input>
          {/* {this.state.file && <img src={this.state.file} alt='uploaded pic'></img>} */}
          {/* {this.fileRef.current && this.fileRef.current.files && (
            <img
              src={URL.createObjectURL(this.fileRef.current.files[0])}
              alt='uploaded pic'
              className='uploaded-pic'
            ></img>
          )} */}
        </div>
        <button className='button'>Submit</button>
      </form>
    );
  }
}

export default Forms;
