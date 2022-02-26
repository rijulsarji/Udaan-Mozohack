import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import "../CSS/Components/heroStory.css";

// import required modules
import { EffectCoverflow, Pagination } from "swiper";

export default function HeroStory() {

  const [dataApi, setDataApi] = useState([])
  const [load, setLoad] = useState(true);

  fetch("https://project-udaan.herokuapp.com/api/heroes")
    .then((response) => response.json())
    .then((data) => {
      setDataApi(data);
      setLoad(false);
    });

  return (
    <div>
      { !load ? (
        <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 1,
          stretch: 0,
          depth: 200,
          modifier: 3,
          slideShadows: true,
        }}
        pagination={true}
        loop={true}
        modules={[EffectCoverflow, Pagination]}
        className="heroSwiperContainer"
      > 
        {dataApi.map((data, idx) => (
          <SwiperSlide className="mySwiper">
            <div className="leftdiv" style={{backgroundColor: data.color}}>
              <h2>{data.title}</h2>
              <p>{data.para1}</p>
            </div>
            <div className="rightdiv">
              <img src={data.image2} alt="image"/>
            </div>
          </SwiperSlide>
        ))}
        </Swiper>) : <h3>Loading...</h3> }
    </div>
  );
}
