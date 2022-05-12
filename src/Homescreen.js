import React from 'react';
import Banner from './Banner';
import "./Homescreen.css";
import Nav from './Nav';

function Homescreen() {
  return (
    <div className='Homescreen'>
        <Nav/>
        <Banner/>
    </div>
  )
}

export default Homescreen