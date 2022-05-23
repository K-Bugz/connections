
import './App.css';
import Navbar from './components/navbar/Navbar'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import SignupPage from './pages/Signup';
import LoginPage from './pages/Login';
import Dashboard from './pages/Dashboard';


function App() {
// const[state] = displayDashboard
  
  return (
    <div>
      <Navbar/>
      <div className="min-h-full h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
    <div className="max-w-md w-full space-y-8">
     <BrowserRouter>
        <Routes>
            <Route path="/" element={<LoginPage/>} />
            <Route path="/signup" element={<SignupPage/>} />
            <Route path="/dashboard" element={<Dashboard/>} />
            <Route path="/login" element={<LoginPage/>} />
        </Routes>
      </BrowserRouter>
    </div>
  </div> 
  
    </div>
  );
}

export default App;
