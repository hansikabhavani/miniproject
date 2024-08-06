import React from 'react';
import { BrowserRouter,Routes, Route } from 'react-router-dom';
import LandingPage from './components/landingpage_component';
import LoginPage from './components/login'; // Ensure this matches the file name `login.js`
import SignUpPage from './components/signup';
import DashboardPage from './components/dashboard';
//import WelcomePage from './components/WelcomePage';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  return (
    <>
    <h1>Hello</h1>
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<LandingPage/>} />
        <Route path="/login" element={<LoginPage/>} />
        <Route path="/signup" element={<SignUpPage/>} />
        <Route path="/dashboard" element={<DashboardPage/>} />
        {/* <Route path="/welcome" component={WelcomePage} /> */}
        {/* Add other routes here */}
      </Routes>
    </BrowserRouter>
    </>
  );
};

export default App;
