
import React from 'react';
import './App.css';
import SignupPage from './pages/Signup';
import LoginPage from './pages/Login';
import ProfilePage from './components/profile/Profile';
import ProfileCard from './components/profile/ProfileCard';
import Main from './pages/Main';
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';

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
        </Routes>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
