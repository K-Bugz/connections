
import React from 'react';
import './App.css';
import SignupPage from './pages/Signup';
import LoginPage from './pages/Login';
import ProfilePage from './components/profile/Profile';
import ProfileCard from './components/profile/ProfileCard';
import Map from './components/googlemaps/Map';
import Main from './pages/Main';
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';

import Dashboard from './pages/Dashboard'
import Messages from './pages/Messages'

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
          <Route path='/map' element={ <Map />} />
        </Routes>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
