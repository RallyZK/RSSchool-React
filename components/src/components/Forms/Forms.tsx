/* eslint-disable array-callback-return */
import './Forms.css';
import React, { FC, useEffect, useState } from 'react';
import ReactSelect from 'react-select';
import { IData, IOption } from '../../utils/types';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { checkboxOptions, radioOptions, selectOptions } from '../../utils/details';
interface FormsProps {
  createNewCard: (newCard: IData) => void;
  openModal: () => void;
}

const Forms: FC<FormsProps> = ({ createNewCard, openModal }) => {
  const { register, formState, handleSubmit, watch, control, reset } = useForm<IData>();
  const { errors } = formState;

  const watchCheckboxes = watch('realEstate', ['no']);
  // useEffect(() => {
  //   const subscription = watch((value, { name, type }) => console.log(value, name, type));
  //   return () => subscription.unsubscribe();
  // }, [watchCheckboxes]);

  const getValue = (value: string) => (value ? selectOptions.find((option) => option.value === value) : '');

  const onSubmit: SubmitHandler<IData> = (data: IData) => {
    const file = URL.createObjectURL(new Blob([data.file]));
    data.file = file;
    createNewCard(data);
    openModal();
    reset();
  };

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
          <p className='label'>What type of real estate are you interested in?</p>
          <p className='label error'>{watchCheckboxes.length > 0 ? '' : 'Please, select something'}</p>
          {checkboxOptions.map((el: IOption) => (
            <label className='mini-label' key={el.value}>
              <input {...register('realEstate')} name='realEstate' type='checkbox' value={el.value}></input>
              {el.value}
            </label>
          ))}
        </div>
        <div className='input-wrapper'>
          <p className='label'>Do you need a transfer from the airport?</p>
          <p className='label error'>{errors.transfer?.message?.toString()}</p>
          {radioOptions.map((el: IOption) => (
            <label className='mini-label' key={el.value}>
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
        <Controller
          name='file'
          control={control}
          rules={{
            required: { value: true, message: 'Please, upload a file' },
          }}
          render={({ field: { onChange }, fieldState: { error } }) => {
            return (
              <div className='input-wrapper'>
                <p className='label'>
                  Upload a photo: <span className='error'>{error && error.message}</span>
                </p>
                <input type='file' accept='image/*,.png,.jpg' onChange={(e) => onChange(e.target.files?.[0])} />
              </div>
            );
          }}
        />
        <button className='button'>Submit</button>
      </form>
    </>
  );
};

export default Forms;
