import './App.css';
import React, { useState } from 'react';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import BookList from './components/BookList';
import data from './components/data';


function App() {
  console.log(data)
  
  return (
    <div>
      <Navbar/>
      <Hero/>
      <BookList />
    </div>
  );
}

export default App;
