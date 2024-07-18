import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const Home = () => {
  return (
    <div style={homeStyle}>
      <h2>Bienvenido a Maestranza S.A</h2>
      <p>Somos una empresa dedicada a la gestión de inventarios y perfiles de usuarios.</p>
      <Carousel showThumbs={false} autoPlay infiniteLoop>
        <div>
          <img src="https://img.interempresas.net/fotos/2238938.jpeg" alt="Slide 1" style={imageStyle} />
          <p className="legend">Slide 1</p>
        </div>
        <div>
          <img src="https://st3.depositphotos.com/1017986/12846/i/450/depositphotos_128469934-stock-photo-auto-mechanic-or-smith-with.jpg" alt="Slide 2" style={imageStyle} />
          <p className="legend">Slide 2</p>
        </div>
        <div>
          <img src="https://st3.depositphotos.com/1017986/12931/i/450/depositphotos_129319926-stock-photo-auto-mechanic-or-smith-with.jpg" alt="Slide 3" style={imageStyle} />
          <p className="legend">Slide 3</p>
        </div>
      </Carousel>
    </div>
  );
};

const homeStyle = {
  padding: '20px',
  textAlign: 'center'
};

const imageStyle = {
  width: '100%',
  height: '700px'
};

export default Home;

