import React from 'react';
import './App.scss';
import Nav from './components/nav'
import Buildings from './components/building-grid'


export default function App() {
  return(
    <div>
    <Nav />
    <div class='hero-wrapper'>
      <div class='hero-image'></div>
      <div class='hero-copy'>
        <h1>Concrete Haus</h1>
        <p>The home of brutalist architecture</p>
      </div>
    </div>
    <Buildings />
    </div>
  )
};
