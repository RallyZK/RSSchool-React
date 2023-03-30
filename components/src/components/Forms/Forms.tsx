/* eslint-disable array-callback-return */
import './Forms.css';
import ReactSelect from 'react-select';
import { IOption } from '../../utils/types';
import CardInForms from '../CardInForms/CardInForms';
import { checkboxOptions, radioOptions, selectOptions } from '../../utils/details';
import React, { Dispatch, FC, SetStateAction, useEffect } from 'react';
import { Controller, FieldValues, SubmitHandler, useForm } from 'react-hook-form';
// import * as Yup from 'yup';
// import { yupResolver } from '@hookform/resolvers/yup';
interface FormsProps {
  setCards: Dispatch<SetStateAction<never[]>>;
}

const Forms: FC<FormsProps> = ({ setCards }) => {
  // const validation = Yup.object().shape({
  //   name: Yup.string().min(2, { message: 'Required' }),
  //   chooseCb: Yup.bool().oneOf([true], 'Checkbox selection is required'),
  // });

  const { register, formState, handleSubmit, watch, control, reset } = useForm();
  const { errors } = formState;

  const watchCheckboxes = watch('realEstate', ['no']);
  useEffect(() => {
    const subscription = watch((value, { name, type }) => console.log(value, name, type));
    return () => subscription.unsubscribe();
  }, [watch]);

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    if (watchCheckboxes.length !== 0) {
      console.log(data);
    } else {
      // errors.realEstate.message = 'checkboxes not selected';
      console.log('checkboxes not selected');
    }
    console.log('watchShowAge1:::', watchCheckboxes);
  };

  const getValue = (value: string) => (value ? selectOptions.find((option) => option.value === value) : '');

  return (
    <>
      <form className='forms-wrapper' onSubmit={handleSubmit(onSubmit)}>
        <div className='input-wrapper'>
          <label htmlFor='name' className='label'>
            Name: <span className='error'>{errors.name?.message?.toString()}</span>
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
                options={selectOptions}
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
            <span className='error'>{watchCheckboxes.length > 0 ? '' : 'select something'}</span>
          </p>
          {checkboxOptions.map((el: IOption) => (
            <label key={el.value}>
              <input {...register('realEstate')} name='realEstate' type='checkbox' value={el.value}></input>
              {el.value}
            </label>
          ))}
          {/* <label>
            <input {...register('realEstate')} name='realEstate' type='checkbox' value='villa'></input>
            Villa
          </label>
          <label>
            <input {...register('realEstate')} name='realEstate' type='checkbox' value='apartment'></input>
            Apartment
          </label> */}
        </div>

        <div className='input-wrapper'>
          <p className='label'>
            Do you need a transfer from the airport?{' '}
            <span className='error'>{errors.transfer?.message?.toString()}</span>
          </p>
          {radioOptions.map((el: IOption) => (
            <label key={el.value}>
              <input
                {...register('transfer', {
                  required: 'Please, select something',
                })}
                name='transfer'
                type='radio'
                value={el.value}
              ></input>
              {el.value}
            </label>
          ))}
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
