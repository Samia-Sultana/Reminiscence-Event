import React from 'react';
import { useState } from 'react';
import {Carousel} from 'react-bootstrap';
import music from '../CarouselImage/music.jpg';
import room from '../CarouselImage/room.jpg';
import decor from '../CarouselImage/decor.jpg';
import buffet from '../CarouselImage/buffet.jpg';


const Banner = () => {
    const [index, setIndex] = useState(0);
    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
      };
    return (
        <div className="carousel">
            <Carousel activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item>
          <img
            className="d-block w-100" style={{height:'550px',objectFit:'inherit'}}
            src={decor}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>Experience of 20 years</h3>
            <p>Our organization have 20 years of experince in organizing all kinds of events</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100" style={{height:'550px',objectFit:'inherit'}}
            src={buffet}
            alt="Second slide"
          />
  
          <Carousel.Caption>
            <h3>Food and Drinks</h3>
            <p>Our specilized chef can make you desired menue</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100" style={{height:'550px',objectFit:'inherit'}}
            src={music}
            alt="Third slide"
          />
  
          <Carousel.Caption>
            <h3>Music</h3>
            <p>
                Dj's are here to take your event to next level
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100" style={{height:'550px',objectFit:'inherit'}}
            src={room}
            alt="fourth slide"
          />
  
          <Carousel.Caption>
            <h3>Guest Room</h3>
            <p>
              Bride/Groom or any other guest can take rest in our luxurious guest rooms
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
        </div>

    );
};

export default Banner;