import React from 'react';
import logo from '../../assets/connectedPurple.png';
import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'
import { Link } from "react-router-dom";
import auth from '../../utils/auth';
import { useState, useEffect } from 'react';
import { useQuery } from '@apollo/client';
import { QUERY_USER } from '../../utils/queries';

const Login = auth.loggedIn();

const defaultImageDataURI =
"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='000000' fill-opacity='0.25' viewBox='0 0 24 24'%3E %3Cpath d='M9,11.75A1.25,1.25 0 0,0 7.75,13A1.25,1.25 0 0,0 9,14.25A1.25,1.25 0 0,0 10.25,13A1.25,1.25 0 0,0 9,11.75M15,11.75A1.25,1.25 0 0,0 13.75,13A1.25,1.25 0 0,0 15,14.25A1.25,1.25 0 0,0 16.25,13A1.25,1.25 0 0,0 15,11.75M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,20C7.59,20 4,16.41 4,12C4,11.71 4,11.42 4.05,11.14C6.41,10.09 8.28,8.16 9.26,5.77C11.07,8.33 14.05,10 17.42,10C18.2,10 18.95,9.91 19.67,9.74C19.88,10.45 20,11.21 20,12C20,16.41 16.41,20 12,20Z' /%3E %3C/svg%3E"

const addDefaultImg = (e) => {
  // prevent infinite callbacks if 404 image fails
  e.target.onError = null
  e.target.src = defaultImageDataURI
}

const navigation = [
  { name: 'Dashboard', href: '/Dashboard', current: false },
  { name: 'Connect', href: '/Connections', current: false },
  { name: 'Jobs', href: '/Jobs', current: false },
  { name: 'Profile', href: '/Profile', current: false },
  { name: 'Messages', href: '/Messages', current: false },
  Login ? ({ name: 'Log Out', href: '/', }) : ({ name: 'Log In', href: '/Login', })
]

const userNavigation = [
  { name: 'Your Profile', href: '/Profile' },
  { name: 'Connect', href: '/Connections' },
  { name: 'Jobs', href: '/Jobs' },
  { name: 'Dashboard', href: '/Dashboard' },
  Login ? ({ name: 'Log Out', href: '/', }) : ({ name: 'Log In', href: '/Login', })
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Navbar() {
  const [profileState, setProfileState] = useState({});
    const { loading, data } = useQuery(QUERY_USER);

    useEffect(() => {
        addUserData(data);// eslint-disable-next-line
    }, [data]);

    const addUserData = async (data) => {
        try {
            if (!loading) {
                const { user } = data;
                setProfileState(user);
            }
        } catch (err) {
            console.log(err);
        }
    }
  return (
    <React.Fragment>
      <div className='min-h-full'>
        <Disclosure as='nav' className='bg-zinc-900'>
          {({ open }) => (
            <>
              <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
                <div className='flex items-center justify-between h-16'>
                  <div className='flex items-center'>
                    <div className='flex-shrink-0'>
                      <a href='/'>
                        <img
                          className='h-11 w-100'
                          src={logo}
                          alt='logo'
                        />
                      </a>
                    </div>
                    <div className='hidden md:block'>
                      <div className='ml-10 flex items-baseline space-x-4'>
                        {navigation.map((item) => (
                          <a
                            key={item.name}
                            href={item.href}
                            className={classNames(
                              item.current
                                ? 'text-blue-400 text-white'
                                : 'text-gray-300 hover:text-blue-400 hover:text-white',
                              'px-3 py-2 rounded-md text-sm font-medium'
                            )}
                            aria-current={item.current ? 'page' : undefined}
                          >
                            {item.name}
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className='hidden md:block'>
                    <div className='ml-4 flex items-center md:ml-6'>
                      <Link to="/Shopping">
                        <span role="img" aria-label="shopping bag">🛒</span>
                        Shop
                      </Link>
                      {/* Profile dropdown */}
                      <Menu as='div' className='ml-3 relative'>
                        <div>
                          <Menu.Button className='max-w-xs bg-gray-800 rounded-full flex items-center text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white'>
                            <span className='sr-only'>Open user menu</span>
                            <img className='h-50 w-50 bg-white p-2 rounded-full' 
                        src={profileState.profilePic || defaultImageDataURI}
                        alt={profileState.firstName}
                        height="40px"
                        width="40px"
                        onError={(e) => addDefaultImg(e)}
                         />
                          </Menu.Button>
                        </div>
                        <Transition
                          as={Fragment}
                          enter='transition ease-out duration-100'
                          enterFrom='transform opacity-0 scale-95'
                          enterTo='transform opacity-100 scale-100'
                          leave='transition ease-in duration-75'
                          leaveFrom='transform opacity-100 scale-100'
                          leaveTo='transform opacity-0 scale-95'
                        >
                          <Menu.Items className='origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none'>
                            {userNavigation.map((item) => (
                              <Menu.Item key={item.name}>
                                {({ active }) => (
                                  <a
                                    href={item.href}
                                    className={classNames(
                                      active ? 'bg-gray-100' : '',
                                      'block px-4 py-2 text-sm text-gray-700'
                                    )}
                                  >
                                    {item.name}
                                  </a>
                                )}
                              </Menu.Item>
                            ))}
                          </Menu.Items>
                        </Transition>
                      </Menu>
                    </div>
                  </div>
                  <div className='-mr-2 flex md:hidden'>
                    {/* Mobile menu button */}
                    <Disclosure.Button className='bg-gray-800 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white'>
                      <span className='sr-only'>Open main menu</span>
                      {open ? (
                        <XIcon className='block h-6 w-6' aria-hidden='true' />
                      ) : (
                        <MenuIcon className='block h-6 w-6' aria-hidden='true' />
                      )}
                    </Disclosure.Button>
                  </div>
                </div>
              </div>
              <Disclosure.Panel className='md:hidden'>
                <div className='px-2 pt-2 pb-3 space-y-1 sm:px-3'>
                  {navigation.map((item) => (
                    <Disclosure.Button
                      key={item.name}
                      as='a'
                      href={item.href}
                      className={classNames(
                        item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                        'block px-3 py-2 rounded-md text-base font-medium'
                      )}
                      aria-current={item.current ? 'page' : undefined}
                    >
                      {item.name}
                    </Disclosure.Button>
                  ))}
                </div>
                <div className='pt-4 pb-3 border-t border-gray-700'>
                  <div className='flex items-center px-5'>
                    <div className='flex-shrink-0'>
                    <img className='h-50 w-50 bg-white p-2 rounded-full' 
                        src={profileState.profilePic || defaultImageDataURI}
                        alt={profileState.firstName}
                        height="60px"
                        width="60px"
                        onError={(e) => addDefaultImg(e)}
                         />
                    </div>
                    <div className='ml-3'>
                      <div className='text-base font-medium leading-none text-white'>{profileState.firstName + ' ' + profileState.lastName}</div>
                      <div className='text-sm font-medium leading-none text-gray-400'>{profileState.email}</div>
                    </div>
                  </div>
                  <div className='mt-3 px-2 space-y-1'>
                    {userNavigation.map((item) => (
                      <Disclosure.Button
                        key={item.name}
                        as='a'
                        href={item.href}
                        className='block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-700'
                      >
                        {item.name}
                      </Disclosure.Button>
                    ))}
                  </div>
                </div>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
      </div>
    </React.Fragment>
  )
}