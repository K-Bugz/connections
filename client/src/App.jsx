
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
    <React.Fragment>     
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/login' element={<LoginPage />} />
          <Route path='/signup' element={<SignupPage />} />
          <Route path='/profile' element={<ProfilePage />} />
          <Route path='/profiledetail' element={<ProfileCard />} />
          <Route path='/Dashboard' element={<Dashboard />} />
          <Route path='/Messages' element={<Messages />} />
          <Route path='/Map' element={<Map />} />
        </Routes>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
