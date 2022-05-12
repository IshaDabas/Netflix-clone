import React from 'react';
import './Banner.css';

function Banner() {
  return (
    <header className='banner' style={{
        backgroundSize: "cover",
        backgroundImage:`url("https://torranceca.files.wordpress.com/2019/10/netflix.jpg")`,
        backgroundPosition: "center center",
    }}>
        <div className="banner_contents">
            <h1 className="banner_title">Movie Name </h1>
            <div className="banner_buttons">
                <button>PLAY</button>
                <button>My list</button>
            </div>
        </div>
    </header>
  )
}

export default Banner