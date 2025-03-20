import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Layout from './components/Layout';
import Contact from './components/contact';
import Services from './components/Services';
import Login from './components/Login';
import Signup from './components/Signup';
import About from './components/About';
import DashboardLayout from './Dashboard/DashboardLayout';
// CareerTest from './components/CareerTest';
import CareerTest from './Dashboard/CareerTest';
//import Navbar2 from './components/Navbar2';
import Assessment2 from './Dashboard/Assessment2';
import Assesment3 from './Dashboard/Assessment3';
import Orders from './Dashboard/Orders'
// import Content2 from './Dashboard/Content2';
//mozambi....

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public Routes */}
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          {/* <Route path='Navbar2' element={<Navbar2 />} /> */}
          <Route path='Signup' element={<Signup />} />
          <Route path='Login' element={<Login />} />
          <Route path='About' element={<About />} />
          <Route path='Contact' element={<Contact />} />
          <Route path='Services' element={<Services />} />
        </Route>

        {/* Dashboard Routes (Protected) */}

        <Route path='/dashboard' element={<DashboardLayout />}>
          <Route index element={<CareerTest />} />
          {/* <Route path='CareerTest' element={<CareerTest />} /> */}
          <Route path='assessment2' element={<Assessment2 />} />
          <Route path='Assessment2/assessment3' element={<Assesment3 />} />
          <Route path='Orders' element={<Orders />} />
          {/* <Route path='content2' element={<Content2 />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
