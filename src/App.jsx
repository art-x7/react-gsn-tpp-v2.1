import React from 'react';
import { Routes, Route } from 'react-router-dom'

import './App.css';

import MyNavbar from './components/navbar/MyNavbar'
import Home from './components/pages/Home'
import Process from './components/pages/Process'
import TPP from './components/pages/TPP'
import ResumeTpp from './components/pages/ResumeTpp'
import Form from './components/pages/Form'

function App() {
  return (
    <>
      <div className='container'>
        <MyNavbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route index path='process' element={<Home />} />
            <Route path='attachprint' element={<Process />} />
            <Route path='wirebond' element={<Process />} />
            <Route path='molding' element={<Process />} />
          <Route index path='tpp' element={<TPP />} />
            <Route path='GS1' element={<ResumeTpp />} />
            <Route path='Micron' element={<ResumeTpp />} />
            <Route path='Nand' element={<ResumeTpp />} />
          <Route path='form' element={<Form />} />
        </Routes>
      </div>
    </>
  );
}

export default App;