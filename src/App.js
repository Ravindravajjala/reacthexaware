import React from 'react';
import {Router, Route, Link, Navigate ,Routes, BrowserRouter } from 'react-router-dom';
import LoginAdmin from './LoginAdmin';
import RegisterAdmin from './RegisterAdmin';
import Apps from './Apps';
import AddNewApp from './AddNewApp';
import AddNewReview from './AddNewReview';
import EmailForm from './EmailForm';
import EmailForm1 from './EmailForm1';
import AppReviews from './AppReviews';
import AdminLogout from './AdminLogout';
import LoginUser from './LoginUser';
import RegisterUser from './RegisterUser';
import UserLogout from './UserLogout';
import Navbar from './Navbar';
import Home from './Home';
import NavbarA from './NavbarA';
import AddNewReview1 from './AddNewReview1';
import Apps1 from './Apps1';
import Review from './Review';
import GetAppImages from './GetAppImages';


function App() {
  return(
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/Navbar" element={<Navbar />}></Route>
      <Route path="/Navbar" element={<Navbar />}></Route>
      <Route path="/NavbarA" element={<NavbarA />}></Route>
      <Route path="/Apps" element={<Apps />}></Route>
      <Route path="/Home" element={<Home />}></Route>
      <Route path="/Apps1" element={<Apps1 />}></Route>
      <Route path="/AddNewApp" element={<AddNewApp />}></Route>
      <Route path="/LoginAdmin" element={<LoginAdmin />}></Route>
      <Route path="/LoginUser" element={<LoginUser />}></Route>
      <Route path="/UserLogout" element={<UserLogout />}></Route>
      <Route path="/AdminLogout" element={<AdminLogout />}></Route>
      <Route path="/RegisterAdmin" element={<RegisterAdmin />}></Route>
      <Route path="/RegisterUser" element={<RegisterUser />}></Route>
      <Route path="/AddNewReview" element={<AddNewReview />}></Route>
      <Route path="/AddNewReview1" element={<AddNewReview1 />}></Route>
      <Route path="/EmailForm" element={<EmailForm />}></Route>
      <Route path="/EmailForm1" element={<EmailForm1 />}></Route>
      <Route path="/AppReviews" element={<AppReviews />}></Route>
      <Route path="/Review" element={<Review />}></Route>
      <Route path="/GetAppImages" element={<GetAppImages/>}></Route>
      

    </Routes>
  </BrowserRouter>
  );
}

export default App;