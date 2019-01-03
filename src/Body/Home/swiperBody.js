import React from "react";
import Swiper from "react-id-swiper";
import { compose, pure, withProps, withHandlers } from "recompose";

import Body1 from './Body1'
import Body2 from './Body2'
import Body3 from './Body3'

const SwiperApp = ({ data, params, renderItem }) => {
  return <Swiper {...params}>{data.map(renderItem)}</Swiper>;
};

export default compose(
  withProps(() => {
    const params = {
            direction: 'vertical',
            slidesPerView: 1,
            spaceBetween: 30,
            mousewheel: true,
            pagination: {
              el: '.swiper-pagination',
              clickable: true
            },
    };

    const data = [
      {
        Body:<Body1/>
      },
      {
        Body:<Body2/>
      },
      {
        Body:<Body3/>
      }
    ];

    return {
      params,
      data
    };
  }),
  withHandlers({
    renderItem: () => (item, index) => (
      <div key={index}>
        {item.Body}
      </div>
    )
  }),
  pure
)(SwiperApp);
