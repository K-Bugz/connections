import React from 'react';
import { useState } from 'react';
import { loginFields } from '../../constants/formFields';
import FormAction from './FormAction';
import FormExtra from './FormExtra';
import Input from './Input';
import { useMutation } from '@apollo/client';
import { LOGIN } from '../../utils/mutations';
import Auth from '../../utils/auth';

const fields = loginFields;
let fieldsState = {};
fields.forEach(field => fieldsState[field.id] = '');

export default function Login() {
    const [loginState, setLoginState] = useState(fieldsState);
    const [loginUser, { error }] = useMutation(LOGIN);

    const handleChange = (e) => {
        setLoginState({ ...loginState, [e.target.id]: e.target.value })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        authenticateUser();
    }

    //Handle Login API Integration here
    const authenticateUser = async () => {
        try {
            const { data } = await loginUser({
                variables: {...loginState}
              });
              Auth.login(data.login.token);
        } catch (err) {
            console.log(err);
            alert("Something went wrong!");
        }
    }


    return (
        <div className='min-h-min flex justify-center py-0 px-4 sm:px-6 lg:px-8'>
            <div className='max-w-md w-full space-y-6'>
                <form className='mt-0 space-y-6' onSubmit={handleSubmit}>
                    <div className='-space-y-px'>
                        {
                            fields.map(field =>
                                <Input
                                    key={field.id}
                                    handleChange={handleChange}
                                    value={loginState[field.id]}
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
                    </div>
                    <FormExtra />
                    <FormAction handleSubmit={handleSubmit} text='Login' />
                </form>
            </div>
        </div>
    )
}

