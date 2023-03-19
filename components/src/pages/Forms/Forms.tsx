import React, { Component } from 'react';
import './Forms.css';

class Forms extends Component {
  state = {
    name: '',
    nameError: '',
    date: new Date().toISOString().slice(0, 10),
    dateError: '',
    selectValue: '0',
    selectError: '',
    selectedcheckboxes: [''],
    checkboxError: '',
    radio: '',
    radioError: '',
    fileError: '',
  };
  myRef = React.createRef<HTMLInputElement>();

  onChangeName = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const input = event.target;
    const value = input.value;
    this.setState({ name: value });
  };

  checkName = (): boolean => {
    if (this.state.name.length < 3) {
      this.setState({ nameError: 'Name should contain min 2 characters' });
    } else {
      this.setState({ nameError: '' });
    }
    console.log('checkName:::', this.state.name.length > 1);
    return this.state.name.length > 1;
  };

  onChangeDate = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const input = event.target;
    const value = input.value;
    this.setState({ date: value });
  };

  onChangeSelect = (event: React.ChangeEvent<HTMLSelectElement>): void => {
    const input = event.target;
    const value = input.value;
    this.setState({ select: value });
    console.log('onChangeSelect:::', this.state.selectValue);
  };

  checkSelect = (): boolean => {
    if (this.state.selectValue === '0') {
      this.setState({ selectError: 'Select a purpose of the visit' });
    } else {
      this.setState({ nameError: '' });
    }
    console.log('checkSelect:::', this.state.selectValue !== '0');
    return this.state.selectValue !== '0';
  };

  onChangeCheckbox = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const checkbox = event.target;
    if (checkbox.checked) {
      this.state.selectedcheckboxes.push(checkbox.value);
    }
  };

  checkCheckboxes = (): boolean => {
    if (this.state.selectedcheckboxes[0] === '') {
      this.setState({ checkboxError: 'Select something' });
    } else {
      this.setState({ checkboxError: '' });
    }
    console.log('checkCheckboxes:::', this.state.selectedcheckboxes[0] !== '');
    return this.state.selectedcheckboxes[0] !== '';
  };

  onChangeRadio = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const radioButton = event.target;
    this.setState({ radio: radioButton.value });
    console.log('radioButton.value:::', this.state.radio);
  };

  checkRadioButtons = (): boolean => {
    if (this.state.radio === '') {
      this.setState({ checkboxError: 'Select something' });
    } else {
      this.setState({ checkboxError: '' });
    }
    console.log('checkRadioButtons:::', this.state.radio !== '');
    return this.state.radio !== '';
  };

  handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (this.checkName() && this.checkSelect() && this.checkCheckboxes() && this.checkRadioButtons()) {
      const stateToLS = JSON.stringify(this.state);
      console.log('stateToLS:::', this.state);
      localStorage.setItem('stateToLS', stateToLS);
    }
  };

  render() {
    return (
      <div className='page'>
        <h1>Forms</h1>
        <h3 className='page-title'>Forms</h3>
        <h3>Plan your visit in Dubai:</h3>
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
              // onBlur={(event) => blurHandler(event)}
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
              value={this.state.selectValue}
              onChange={(event) => this.onChangeSelect(event)}
              className='input-select'
            >
              <option className='option-item' value='0'>
                Select a purpose
              </option>
              <option className='option-item' value='1'>
                To buy a real state
              </option>
              <option className='option-item' value='2'>
                To rent a real state
              </option>
            </select>
          </div>
          <div className='input-wrapper'>
            <p className='label'>
              What type of property are you interested in? <span className='error'>{this.state.checkboxError}</span>
            </p>
            <label htmlFor='checkbox-villa' className=''>
              <input
                id='checkbox-villa'
                type='checkbox'
                onChange={(event) => this.onChangeCheckbox(event)}
                className='input-checkbox'
              ></input>
              Villa
            </label>
            <label htmlFor='checkbox-cottage' className=''>
              <input
                id='checkbox-cottage'
                type='checkbox'
                onChange={(event) => this.onChangeCheckbox(event)}
                className='input-checkbox'
              ></input>
              Cottage
            </label>
            <label htmlFor='checkbox-apartment' className=''>
              <input
                id='checkbox-apartment'
                type='checkbox'
                onChange={(event) => this.onChangeCheckbox(event)}
                className='input-checkbox'
              ></input>
              Apartment
            </label>
          </div>
          <div className='input-wrapper'>
            <p className='label'>
              Do you need a transfer from airport? <span className='error'>{this.state.radioError}</span>
            </p>
            <label htmlFor='transfer' className=''>
              <input
                id='transfer'
                name='transfer'
                type='radio'
                required
                value='yes'
                onChange={(event) => this.onChangeRadio(event)}
                className='input-radio'
              ></input>
              Yes
            </label>
            <label htmlFor='transfer' className=''>
              <input
                id='transfer'
                name='transfer'
                type='radio'
                required
                value='no'
                onChange={(event) => this.onChangeRadio(event)}
                className='input-radio'
              ></input>
              No
            </label>
          </div>
          <div className='input-wrapper'>
            <p className='label'>
              Upload a photo: <span className='error'>{this.state.fileError}</span>
            </p>
            <input
              id='file-input'
              name='file'
              type='file'
              // required
              accept='image/*'
              // onChange={(event) => onChangeLogin(event)}
              // onBlur={(event) => blurHandler(event)}
              className='input-file'
            ></input>
          </div>
          <button className='button'>Submit</button>
        </form>
      </div>
    );
  }
}

export default Forms;
