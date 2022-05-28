import React, { useState } from 'react';
import Navbar from '../components/navbar/Navbar';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';
import bag from '../assets/bag.jpg';

export default function Shop() {
    const [product] = useState({
        name: 'Laptop Bag',
        price: 45,
        description: 'Connections Swag Bag',
    })

    async function handleToken(token, addresses) {
        const response = await axios.post('http://localhost:5000/checkout', { token, product })
        console.log(response.status)
    }

    return (
        <React.Fragment>
            <Navbar></Navbar>
            <div className='container rounded-2xl flex flex-col mx-auto w-full items-center justify-between'>
                <div className='px-4 py-5 sm:px-6 w-full border dark:bg-gray-800 bg-white shadow mb-2 rounded-md flex justify-between items-center'>
                    <h3 className='text-lg leading-6 font-medium text-gray-900 dark:text-white'>
                        Connections Swag Gear
                    </h3>
                    <div className='w-3/6'>
                        <p className='text-gray-500 text-sm'>
                            Be
                            <span className='text-blue-400 font-bold'>
                                {/* Need to connect the new messages to this line */}
                                &nbsp;Connected&nbsp;
                            </span>
                            In Style
                        </p>
                    </div>
                    <div className='w-1/6 text-right'>
                        <StripeCheckout
                            className='center'
                            // This is the Publishable key from Stripe used for development only
                            stripeKey='pk_test_51L3QCIKezzOjXHEw7y7pQQXh3GGoV1xmrbZIaVuxLx3D8X2JO1Utc3pZ2dD54sDP2UKBVuiv6uwqRmPwCErHmKwp00uYR4Urrn'
                            token={handleToken}
                            amount={product.price * 100}
                            name={product.name}
                            billingAddress
                            shippingAddress
                        />
                    </div>
                </div>
                <ul className='flex flex-col'>
                    <li className='px-2 py-2 sm:px-6 w-full border dark:bg-gray-800 bg-blue-200 shadow mb-2 rounded-md flex justify-between items-center'>
                        <div className='transition duration-500 shadow ease-in-out transform hover:-translate-y-1 hover:shadow-lg select-none cursor-pointer bg-white dark:text-blue-400 rounded-md flex flex-1 items-center p-4'>
                            <div className='flex flex-col w-10 h-10 justify-center items-center mr-2'>
                                <div>
                                    <img
                                        className='h-11 w-100'
                                        src={bag}
                                        alt='Workflow'
                                    />
                                </div>
                            </div>
                            <div className='flex-1 pl- md:mr-16'>
                                <div className='font-medium dark:text-white'>
                                    {product.name}
                                </div>
                                <div className='text-gray-600 dark:text-gray-200 text-sm'>
                                    {product.description}
                                </div>
                            </div>
                            <div className='w-24 text-right flex justify-end'>
                                $ {product.price}
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </React.Fragment >
    )
}