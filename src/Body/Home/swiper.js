import React from "react";
import Swiper from "react-id-swiper";
import { compose, pure, withProps, withHandlers } from "recompose";

import c1 from '../../img/2.jpg';
import c2 from '../../img/1.jpg';

const SwiperApp = ({ data, params, renderItem }) => {
  return <Swiper {...params}>{data.map(renderItem)}</Swiper>;
};

export default compose(
  withProps(() => {
    const params = {
      effect: 'coverflow',
      grabCursor: true,
      centeredSlides: true,
      // slidesPerView: 'auto',
      coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true
      },
      pagination: {
        el: '.swiper-pagination'
      },
      loop: true,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
      },
      breakpoints: {
        // when window width is <= 320px
        320: {
          slidesPerView: 1,
          spaceBetween: 10
        },
        // when window width is <= 480px
        480: {
          slidesPerView: 2,
          spaceBetween: 20
        },
        // when window width is <= 640px
        640: {
          slidesPerView: 2,
          spaceBetween: 20
        },
        1920: {
          slidesPerView: 4,
          spaceBetween: 20
        }
      }
    };

    const data = [
      {
        imgsrc:c1,
        explanation: "This is 1",
        link: "www.google.com"
      },
      {
        imgsrc:c2,
        explanation: "This is 2",
        link: "www.google.com"
      },
      {
        imgsrc:c2,
        explanation: "This is 3",
        link: "www.google.com"
      }
    ];

    return {
      params,
      data
    };
  }),
  withHandlers({
    renderItem: () => (item, index) => (
      <div className="container" key={index}>
        <div className="row">
          <div className="col-lg-12 mx-auto">
            <img src={item.imgsrc} alt="" />
            <p>{item.explanation}</p>
          </div>
        </div>
      </div>
    )
  }),
  pure
)(SwiperApp);
