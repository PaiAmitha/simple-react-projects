import React from 'react'
import './Home.css';
import vdo from '../../Assets/home-bg.mp4';

const Home = () => {
  return (
    <section className="home">
        <div className="overlay"></div>
            <video src={vdo} muted autoPlay loop type="video/mp4"></video>
            <div className="homeContent container">
                <div className="textDiv">
                    <span className='smallText'>
                        Our Packages
                    </span>
                    <h1 className='homeTitle'>
                        Search your Holiday
                    </h1>
                </div>
                <div className="cardDiv grid">
                    
                </div>
            </div>
    </section>

  )
}

export default Home
