import { IOption } from './types';

export const selectOptions: IOption[] = [
  {
    value: 'To buy a real estate',
    label: 'To buy a real estate',
  },
  {
    value: 'To rent a real estate for a long time',
    label: 'To rent a real estate for a long time',
  },
  {
    value: 'To rent a real estate for a short period',
    label: 'To rent a real estate for a short period',
  },
];

export const checkboxOptions: IOption[] = [
  {
    value: 'Villa',
  },
  {
    value: 'Cottage',
  },
  {
    value: 'Apartment',
  },
];

export const radioOptions: IOption[] = [
  {
    value: 'No',
  },
  {
    value: 'Yes',
  },
];

export const emptyState = {
  nameError: '',
  selectError: '',
  checkboxError: '',
  radioError: '',
  fileError: '',
  cards: [
    {
      name: '',
      date: '',
      purpose: '',
      realEstate: [''],
      transfer: '',
      file: '',
    },
  ],
  isFormFilled: false,
};

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

// const getFileValue = (value: { files: (Blob | MediaSource)[] }) => (value ? URL.createObjectURL(value.files[0]) : // '');
// const getFileValue = (value: { files: (Blob | MediaSource)[] }) => (value ? JSON.stringify(value) : '');
{
  /* <Controller
          control={control}
          name='file'
          rules={{
            required: 'Please, upload a file',
          }}
          render={({ field: { value, onChange }, fieldState: { error } }) => (
            <div className='input-wrapper'>
              <p className='label'>
                Upload a photo: <span className='error'>{error && error.message}</span>
              </p>
              <input
                type='file'
                accept='image/*,.png,.jpg'
                value={getFileValue(value)}
                onChange={(newValue) => onChange(console.log(newValue))}
              ></input>
            </div>
          )}
        /> */
}

// {
//                     if (e.target?.files?.[0]) {
//                       if (value?.length) {
//                         return onChange([...value, ...Array.from(e.target.files)]);
//                       }
//                       return onChange([e.target.files[0]]);
//                     }
//                   }

// {/* <div className='input-wrapper'>
//           <p className='label'>
//             Upload a photo: <span className='error'>{errors.file?.message?.toString()}</span>
//           </p>
//           <input
//             type='file'
//             accept='image/*,.png,.jpg'
//             {...register('file', {
//               required: true,
//             })}
//           ></input>
//         </div> */}
