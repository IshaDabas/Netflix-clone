import React from 'react';
import './Banner.css';
function Banner() {
    function truncate(string, n){
        return string?.length > n ? string.substr(0, n-1)+ '....' : string;
    }
  return (
    <header className='banner' style={{
        backgroundSize: "cover",
        backgroundImage:`url("https://png.pngtree.com/thumb_back/fh260/background/20190221/ourmid/pngtree-texture-geometric-black-metal-gradient-image_17809.jpg")`,
        backgroundPosition: "center center",
    }}>
        <div className="banner_contents">
            <h1 className="banner_title">Movie Name </h1>
            <div className="banner_buttons">
                <button className='banner_button'>PLAY</button>
                <button className='banner_button'>My list</button>
            </div>
            <h1 className="banner_description">
                {truncate (`Welcome to Netflix! Here we stream movies and series which you all will love the most.
            It wont be easy to get rid of us. Enjoy your time.`, 50 )}</h1>
        </div>
        <div className="banner--fadeBottom" />
    </header>
  )
}

export default Banner