import React from 'react';
import { useState } from 'react';
import { signupFields } from '../../constants/formFields'
import FormAction from './FormAction';
import Input from './Input';
import { useMutation } from '@apollo/client';
import { ADD_USER } from '../../utils/mutations';
import Auth from '../../utils/auth';

const fields = signupFields;
let fieldsState = {};

fields.forEach(field => fieldsState[field.id] = '');

export default function Signup() {
  const [signupState, setSignupState] = useState(fieldsState);
  const [createUser, { error }] = useMutation(ADD_USER);

  const handleChange = (e) => setSignupState({ ...signupState, [e.target.id]: e.target.value });

  const setTrue = () => {
    setSignupState({ ...signupState, ["isJobSeeker"]: true });
  }
  const setFalse = () => {
    setSignupState({ ...signupState, ["isJobSeeker"]: false });
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    createAccount()
  }

  //handle Signup API Integration here
  const createAccount = async () => {
    try {
      const { data } = await createUser({
        variables: {...signupState}
      });
      Auth.login(data.addUser.token);
    } catch (err) {
      alert('Something went wrong!');
      console.log(err);
    }
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
              <div class="flex items-center gap-8">
                <label class="inline-flex items-center">
                  <input type="radio" name="vehicle" class="h-5 w-5 text-red-600" onClick={setTrue} />
                  <span class="ml-2 text-gray-700">
                    Job Seeker
                  </span>
                </label>
                <label class="inline-flex items-center">
                  <input type="radio" name="vehicle" class="h-5 w-5 text-red-600" onClick={setFalse} />
                  <span class="ml-2 text-gray-700">
                    Recruiter
                  </span>
                </label>
              </div>
              <FormAction handleSubmit={handleSubmit} text='Signup' />
            </div>
          </form>
        </div>
      </div >
    </React.Fragment>
  )
}