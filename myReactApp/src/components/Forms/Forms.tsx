import './Forms.css';
import React, { FC } from 'react';
import { radioOptions } from '../../utils/details';
import { IData, IOption } from '../../utils/types';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
interface FormsProps {
  createNewCard: (newCard: IData) => void;
  openModal: () => void;
}

const Forms: FC<FormsProps> = ({ createNewCard, openModal }) => {
  const { register, formState, handleSubmit, control, reset } = useForm<IData>();
  const { errors } = formState;

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
              required: 'Please, enter character name',
              minLength: {
                value: 2,
                message: 'Name should contain min 2 characters',
              },
              pattern: {
                value: /^[a-zA-Z]+$/,
                message: 'Please, write a name only in latin characters with no spaces',
              },
              validate: (text) => text[0] === text[0].toUpperCase() || 'Name should starts with capital letter',
            })}
            className='input'
            placeholder='Enter character name here'
          ></input>
        </div>
        <div className='input-wrapper'>
          <label htmlFor='date' className='label'>
            Birth date: <span className='error'>{errors?.date?.message?.toString()}</span>
          </label>
          <input
            id='date'
            type='date'
            {...register('date', {
              required: 'Please, select a date',
              max: {
                value: new Date().toISOString(),
                message: 'You have selected a future date',
              },
            })}
            className='input'
          ></input>
        </div>
        <div className='input-wrapper'>
          <label className='label'>
            Gender: <span className='error'>{errors?.gender?.message?.toString()}</span>
          </label>
          <select
            {...register('gender', {
              required: 'Please, select a gender',
              validate: (v) => v !== '' || 'error message',
            })}
            className='input'
            defaultValue={''}
          >
            <option value='' disabled>
              Select a gender
            </option>
            <option value='female'>Female</option>
            <option value='male'>Male</option>
            <option value='n/a'>N/a</option>
          </select>
        </div>
        <div className='input-wrapper'>
          <p className='label'>Is it a Living being or Droid?</p>
          <p className='label error'>{errors.characterType?.message?.toString()}</p>
          {radioOptions.map((el: IOption) => (
            <label className='mini-label' key={el.value}>
              <input
                {...register('characterType', {
                  required: 'Please, select something',
                })}
                name='characterType'
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
                <label htmlFor='file' className='label'>
                  Upload a photo: <span className='error'>{error && error.message}</span>
                </label>
                <input
                  id='file'
                  type='file'
                  accept='image/*,.png,.jpg'
                  onChange={(e) => onChange(e.target.files?.[0])}
                />
              </div>
            );
          }}
        />
        <div className='input-wrapper'>
          <p className='label'>Confirm the information you entered</p>
          <p className='label error'>{errors?.agree?.message?.toString()}</p>
          <label className='mini-label'>
            <input
              {...register('agree', {
                required: 'Please, confirm consent',
              })}
              type='checkbox'
            ></input>
            I confirm
          </label>
        </div>
        <button className='db-button'>Create</button>
      </form>
    </>
  );
};

export default Forms;
