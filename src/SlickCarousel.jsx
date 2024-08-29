import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { shortList, list } from "./data";


const SlickCarousel = () => {
   const [people, setPeople] = useState(list)

 var settings = {
    dots: true,
    infinite: true,
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplaySpeed: 3000,
    autoplay: true,
    cssEase: "linear",
  };
  return (
   <section className="slick-container">
   <Slider {...settings}>
      {people.map((person) => {
          return (
          <article 
          key={person.id} 
          >
            <img src={person.image} width="50px" height="50px" className="person-image" alt={person.name}/>
            <h3 className="person-title">{person.title}</h3>
            <h4 className="person-name">{person.name}</h4>
            <p className="person-quote">{person.quote}</p>
          </article>
          )
        })}
    </Slider>
    </section>
  )
}

export default SlickCarousel