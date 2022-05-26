
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
          <Route path='/Login' element={<LoginPage />} />
          <Route path='/Signup' element={<SignupPage />} />
          <Route path='/Profile' element={<ProfilePage />} />
          <Route path='/Profiledetail' element={<ProfileCard />} />
          <Route path='/Dashboard' element={<Dashboard />} />
          <Route path='/Messages' element={<Messages />} />
          <Route path='/Map' element={ <Map />} />
        </Routes>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
