import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import imag1 from './carrousel-sillon.jpg';
import imag2 from './carrousel-sillon2.jpg';
import imag3 from './carrousel-sillon3.jpg';
import './carrousel.css';

function Carrousel() {
  return (
    <Carousel className='carrousel-Principal'>
      <Carousel.Item className='carrousel' >
        <img
          className="d-block w-100 h-100"
          src={imag1}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className='carrousel'>
        <img
          className="d-block w-100 h-100"
          src={imag2}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className='carrousel'>
        <img
          className="d-block w-100 h-100"
          src={imag3}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Carrousel;