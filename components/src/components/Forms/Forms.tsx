/* eslint-disable array-callback-return */
import './Forms.css';
import React, { Dispatch, FC, SetStateAction } from 'react';
import { Controller, useForm } from 'react-hook-form';
import CardInForms from '../CardInForms/CardInForms';
import { emptyState, IFormCard, IOption } from '../../utils/types';
import ReactSelect from 'react-select';
interface FormsProps {
  setCards: Dispatch<SetStateAction<never[]>>;
}

const Forms: FC<FormsProps> = ({ setCards }) => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    control,
    reset,
  } = useForm();

  const options: IOption[] = [
    {
      value: 'To buy a real state',
      label: 'To buy a real state',
    },
    {
      value: 'To rent a real state',
      label: 'To rent a real state',
    },
  ];
  const checkboxOptions = [
    {
      value: 'yes',
    },
    {
      value: 'no',
    },
  ];

  // checkCheckboxes = (): void => {
  //   let checkedCount = 0;
  //   if (this.chexboxRefVilla.current) {
  //     checkedCount = this.chexboxRefVilla.current.checked ? checkedCount + 1 : checkedCount + 0;
  //   }
  //   if (this.chexboxRefApartment.current) {
  //     checkedCount = this.chexboxRefApartment.current.checked ? checkedCount + 1 : checkedCount + 0;
  //   }
  //   this.setState({ checkboxError: checkedCount === 0 ? 'Select something' : '' });
  // };

  // checkFile = () => {
  //   if (this.fileRef && this.fileRef.current && this.fileRef.current.files?.length) {
  //     this.setState({ fileError: '' });
  //   } else {
  //     this.setState({ fileError: 'Please, upload a photo' });
  //   }
  // };

  // clearForm = () => {
  //   this.formRef.current && this.formRef.current.reset();
  // };

  // createCardInfo = () => {
  //   const card2: IFormCard = {
  //     name: this.nameRef && this.nameRef.current ? this.nameRef.current.value : '',
  //     date: this.dateRef && this.dateRef.current ? this.dateRef.current.value : '',
  //     purpose: this.purposeRef && this.purposeRef.current ? this.purposeRef.current.value : '',
  //     realEstate: [
  //       this.chexboxRefVilla && this.chexboxRefVilla.current?.checked && this.chexboxRefVilla.current?.name
  //         ? this.chexboxRefVilla.current.name
  //         : '',
  //       this.chexboxRefApartment && this.chexboxRefApartment.current?.checked && this.chexboxRefApartment.current?.name
  //         ? this.chexboxRefApartment.current.name
  //         : '',
  //     ],
  //     transfer: this.transferRefyes && this.transferRefyes.current?.checked ? 'yes' : 'no',
  //     file:
  //       this.fileRef && this.fileRef.current && this.fileRef.current.files
  //         ? URL.createObjectURL(this.fileRef.current.files[0])
  //         : '',
  //   };
  //   const updatedCards = this.state.cards.map((el) => el);
  //   updatedCards.push(card2);
  //   this.setState({ cards: updatedCards });
  // };

  // openModal = () => {
  //   this.setState({ isFormFilled: true });
  //   const timer = setTimeout(() => {
  //     this.setState({ isFormFilled: false });
  //     clearTimeout(timer);
  //   }, 5000);
  // };

  // handleFormSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
  //   await this.checkName();
  //   await this.checkSelect();
  //   await this.checkCheckboxes();
  //   await this.checkRadioBtns();
  //   await this.checkFile();
  //   if (
  //     !this.state.nameError &&
  //     !this.state.selectError &&
  //     !this.state.checkboxError &&
  //     !this.state.radioError &&
  //     !this.state.fileError
  //   ) {
  //     this.createCardInfo();
  //     this.openModal();
  //     this.clearForm();
  //   }
  //   event.preventDefault();
  // };

  const onSubmit = (data: any) => {
    console.log(data);
  };

  const onChangeName = () => {
    console.log(typeof errors.name?.message);
  };

  const getValue = (value: string) => (value ? options.find((option) => option.value === value) : '');

  return (
    <>
      <form className='forms-wrapper' onSubmit={handleSubmit(onSubmit)}>
        <div className='input-wrapper'>
          <label htmlFor='name' className='label'>
            Name: <span className='error'>{errors?.name?.message?.toString()}</span>
          </label>
          <input
            id='name'
            {...register('name', {
              required: 'Please, enter your name',
              minLength: {
                value: 2,
                message: 'Name should contain min 2 characters',
              },
              pattern: {
                value: /^[a-zA-Z]+$/,
                message: 'Please, write your name only in latin characters',
              },
            })}
            className='input-name'
            placeholder='Enter your name here'
            onChange={onChangeName}
          ></input>
        </div>
        <div className='input-wrapper'>
          <label htmlFor='date' className='label'>
            Visit date: <span className='error'>{errors?.date?.message?.toString()}</span>
          </label>
          <input
            id='date'
            type='date'
            {...register('date', {
              required: 'Please, select a date',
              min: {
                value: new Date().toISOString(),
                message: 'You have selected a past date',
              },
            })}
            className='input-date'
          ></input>
        </div>
        <Controller
          control={control}
          name='purpose'
          rules={{
            required: 'Please, select a purpose',
          }}
          render={({ field: { value, onChange }, fieldState: { error } }) => (
            <div className='input-wrapper'>
              <label htmlFor='select' className='label'>
                Purpose of the visit: <span className='error'>{error && error.message}</span>
              </label>
              <ReactSelect
                className='input-select'
                options={options}
                placeholder={'Select a purpose'}
                value={getValue(value)}
                onChange={(newValue) => onChange((newValue as IOption).value)}
              />
            </div>
          )}
        />
        <div className='input-wrapper'>
          <p className='label'>
            What type of real estate are you interested in?{' '}
            <span className='error'>{errors.rstypes?.message?.toString()}</span>
          </p>
          <label>
            <input
              {...register('rstypes', { deps: ['Villa', 'Apartment'] })}
              name='Villa'
              type='checkbox'
              value='Villa'
              // onChange={changeHandler}
            ></input>
            Villa
          </label>
          <label>
            <input
              {...register('rstypes', { deps: ['Villa', 'Apartment'] })}
              name='Apartment'
              type='checkbox'
              value='Apartment'
              // onChange={changeHandler}
            ></input>
            Apartment
          </label>
        </div>

        <div className='input-wrapper'>
          <p className='label'>
            Do you need a transfer from the airport?{' '}
            <span className='error'>{errors.transfer?.message?.toString()}</span>
          </p>
          <label>
            <input
              {...register('transfer', {
                required: 'Please, select something',
              })}
              name='transfer'
              type='radio'
              value='yes'
            ></input>
            Yes
          </label>
          <label>
            <input
              {...register('transfer', {
                required: 'Please, select something',
              })}
              name='transfer'
              type='radio'
              value='no'
            ></input>
            No
          </label>
        </div>

        {/* <div className='input-wrapper'>
          <p className='label'>
            Upload a photo: <span className='error'>{this.state.fileError}</span>
          </p>
          <input type='file' ref={this.fileRef} accept='image/*,.png,.jpg'></input>
        </div>  */}

        <button className='button'>Submit</button>
      </form>
      {/* <div className='cards-collection'>
        {this.state.cards.map((card, index) => {
          if (index > 0) {
            return <CardInForms card={card} key={card.name} />;
          }
        })}
      </div>
      <div className={`modal-wrapper ${this.state.isFormFilled ? '' : 'display-none'}`}>
        <div className='modal-img'></div>
        <h2 className='modal-title'>You information is successfully saved!</h2>
      </div> */}
    </>
  );
};

export default Forms;
