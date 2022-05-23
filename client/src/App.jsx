
import React from 'react';
import './App.css';
import Navbar from './components/navbar/Navbar'
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';
import SignupPage from './pages/Signup';
import LoginPage from './pages/Login';
import ProfilePage from './components/profile/Profile';
import ProfileCard from './components/profile/ProfileCard';
import Dashboard from './pages/Dashboard'

function App() {
// const[state] = displayDashboard
  
  return (
    <React.Fragment>
      <Navbar>
      </Navbar>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<LoginPage />} />
          <Route path='/signup' element={<SignupPage />} />
          <Route path='/profile' element={<ProfilePage />} />
          <Route path='/profiledetail' element={<ProfileCard />} />
          <Route path='/Dashboard' element={<Dashboard />} />
        </Routes>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
