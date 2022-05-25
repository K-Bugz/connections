import React from 'react';
import { useState } from 'react';
import { signupFields } from '../../constants/formFields'
import FormAction from './FormAction';
import Input from './Input';


const fields = signupFields;
let fieldsState = {};

fields.forEach(field => fieldsState[field.id] = '');

export default function Signup() {
  const [signupState, setSignupState] = useState(fieldsState);

  const handleChange = (e) => setSignupState({ ...signupState, [e.target.id]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(signupState)
    createAccount()
  }

  //handle Signup API Integration here
  const createAccount = () => {

  }

  return (
    <React.Fragment>
    <div className='min-h-min flex justify-center py-0 px-4 sm:px-6 lg:px-8'>
      <div className='max-w-md w-full space-y-8'>
        <form className='mt-8 space-y-6' onSubmit={handleSubmit}>
          <div className=''>
            {
              fields.map(field =>
                <Input
                  key={field.id}
                  handleChange={handleChange}
                  value={signupState[field.id]}
                  labelText={field.labelText}
                  labelFor={field.labelFor}
                  id={field.id}
                  name={field.name}
                  type={field.type}
                  isRequired={field.isRequired}
                  placeholder={field.placeholder}
                />
              )
            }
            <FormAction handleSubmit={handleSubmit} text='Signup' />
          </div>
        </form>
      </div>
    </div >
    </React.Fragment>
  )
}