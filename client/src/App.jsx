
import React from 'react';
import './App.css';
import SignupPage from './pages/Signup';
import LoginPage from './pages/Login';
import Dashboard from './pages/Dashboard'
import Messages from './pages/Messages'
import ProfilePage from './components/profile/Profile';
import ProfileCard from './components/profile/ProfileCard';
import Map from './components/googlemaps/Map';
import Main from './pages/Main';
import Jobs from './pages/Jobs';
import Shopping from './pages/Shopping';

import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';
import { ApolloProvider, ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

const httpLink = createHttpLink({ uri: '/graphql' });
const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});
const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {

  return (
    <ApolloProvider client={client}>
      <React.Fragment>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Main />} />
            <Route path='/Login' element={<LoginPage />} />
            <Route path='/Signup' element={<SignupPage />} />
            <Route path='/Profile' element={<ProfilePage />} />
            <Route path='/Profiledetail' element={<ProfileCard />} />
            <Route path='/Dashboard' element={<Dashboard />} />
            <Route path='/Messages' element={<Messages />} />
            <Route path='/Map' element={<Map />} />
            <Route path='/Jobs' element={<Jobs />} />
            <Route path='/Shopping' element={<Shopping />} />
          </Routes>
        </BrowserRouter>
      </React.Fragment>
    </ApolloProvider>
  );
}

export default App;
