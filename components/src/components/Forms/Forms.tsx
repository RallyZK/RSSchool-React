import './Forms.css';
import React, { Component } from 'react';
import { allFormCards, emptyState, ICheckBox } from '../../utils/types';

class Forms extends Component {
  state = emptyState;
  checkedCount = 0;
  myRef = React.createRef<HTMLInputElement>();
  fileRef = React.createRef<HTMLInputElement>();

  onChangeName = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ name: event.target.value });
  };

  checkName = (): void => {
    let err = '';
    if (this.state.name.length < 2) {
      err = 'Name should contain min 2 characters';
    } else if (this.state.name[0].toUpperCase() !== this.state.name[0]) {
      err = 'Name should starts with a capital letter';
    }
    this.setState({ nameError: err });
  };

  onChangeDate = (event: React.ChangeEvent<HTMLInputElement>): void => {
    this.setState({ date: event.target.value });
  };

  onChangeSelect = (event: React.ChangeEvent<HTMLSelectElement>) => {
    this.setState({ select: event.target.value });
  };

  checkSelect = (): void => {
    const err = this.state.select === 'Select a purpose' ? 'Select a purpose' : '';
    this.setState({ selectError: err });
  };

  onChangeCheckbox = (event: React.ChangeEvent<HTMLInputElement>) => {
    const box = event.target;
    const selectedArrBox = this.state.checkboxes.map((el: ICheckBox) => {
      if (el.name === box.name) {
        el.checked = !el.checked;
      }
      return el;
    });

    this.setState({ checkboxes: selectedArrBox });
  };

  checkCheckboxes = (): void => {
    this.state.checkboxes.forEach((box) => {
      this.checkedCount = box.checked ? this.checkedCount + 1 : this.checkedCount + 0;
    });
    const err = this.checkedCount === 0 ? 'Select something' : '';
    this.setState({ checkboxError: err });
  };

  onChangeRadio = (event: React.ChangeEvent<HTMLInputElement>): void => {
    this.setState({ radio: event.target.value });
  };

  checkRadioButtons = (): void => {
    const err = this.state.radio === '' ? 'Select something' : '';
    this.setState({ radioError: err });
  };

  onChangeFile = async (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      this.setState({ file: URL.createObjectURL(event.target.files[0]) });
    }
  };

  handleFormSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log('stateToLS:::', this.state);
    this.checkName();
    this.checkSelect();
    this.checkCheckboxes();
    if (!this.state.nameError && !this.state.selectError && this.checkedCount > 0) {
      allFormCards.push({
        name: this.state.name,
        date: this.state.date,
        purpose: this.state.select,
        realEstate: this.state.checkboxes,
        transfer: this.state.radio,
        file: this.state.file,
      });
      console.log('all inputs checked!!!');
      console.log('allFormCards:::', allFormCards);
      this.setState(emptyState);
      console.log('this.state after clear:::', this.state);
    }
  };

  render() {
    return (
      <form
        className='forms-wrapper'
        encType='multipart/form-data'
        method='post'
        onSubmit={(event) => this.handleFormSubmit(event)}
      >
        <div className='input-wrapper'>
          <label htmlFor='name' className='label'>
            Name: <span className='error'>{this.state.nameError}</span>
          </label>
          <input
            id='name'
            type='text'
            required
            value={this.state.name}
            onChange={(event) => this.onChangeName(event)}
            className='input-name'
            placeholder='Enter your name here'
          ></input>
        </div>
        <div className='input-wrapper'>
          <label htmlFor='date' className='label'>
            Visit date: <span className='error'>{this.state.dateError}</span>
          </label>
          <input
            id='date'
            type='date'
            required
            value={this.state.date.toString()}
            min={this.state.date.toString()}
            onChange={(event) => this.onChangeDate(event)}
            className='input-date'
          ></input>
        </div>
        <div className='input-wrapper'>
          <label htmlFor='select' className='label'>
            Purpose of the visit: <span className='error'>{this.state.selectError}</span>
          </label>
          <select
            id='select'
            required
            defaultValue={this.state.select}
            onChange={(event) => this.onChangeSelect(event)}
            className='input-select'
          >
            <option className='option-item'>Select a purpose</option>
            <option className='option-item'>To buy a real state</option>
            <option className='option-item'>To rent a real state</option>
          </select>
        </div>
        <div className='input-wrapper'>
          <p className='label'>
            What type of real estate are you interested in? <span className='error'>{this.state.checkboxError}</span>
          </p>
          {this.state.checkboxes.map((box) => (
            <label className='' key={box.name}>
              <input
                name={box.name}
                checked={box.checked}
                type='checkbox'
                onChange={(event) => this.onChangeCheckbox(event)}
              ></input>
              {box.name}
            </label>
          ))}
        </div>
        <div className='input-wrapper'>
          <p className='label'>
            Do you need a transfer from airport? <span className='error'>{this.state.radioError}</span>
          </p>
          <label>
            <input
              name='transfer'
              type='radio'
              required
              value='yes'
              onChange={(event) => this.onChangeRadio(event)}
            ></input>
            Yes
          </label>
          <label>
            <input
              name='transfer'
              type='radio'
              required
              value='no'
              onChange={(event) => this.onChangeRadio(event)}
            ></input>
            No
          </label>
        </div>
        <div className='input-wrapper'>
          <p className='label'>
            Upload a photo: <span className='error'>{this.state.fileError}</span>
          </p>
          <input
            type='file'
            ref={this.fileRef}
            required
            accept='image/*,.png,.jpg'
            onChange={(event) => this.onChangeFile(event)}
          ></input>
          {this.state.file && <img src={this.state.file} alt='uploaded pic'></img>}
        </div>
        <button className='button'>Submit</button>
      </form>
    );
  }
}

export default Forms;
