import React from 'react';
import './testimonials.css';
import AVTR1 from "../../assets/avatar1.jpg";
import AVTR2 from "../../assets/avatar2.jpg";
import AVTR3 from "../../assets/avatar3.jpg";
import AVTR4 from "../../assets/avatar4.jpg";
import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/pagination';
import 'swiper/css';

const data = [
  {
  avatar: AVTR1,
  name: "Tina Snow",
  review: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. At minus, corporis id similique assumenda doloremque nihil, unde distinctio voluptas molestias cum explicabo! Suscipit maiores reiciendis provident porro quae impedit voluptatum."
  },
  {
    avatar: AVTR2,
    name: "Shatta Wale",
    review: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. At minus, corporis id similique assumenda doloremque nihil, unde distinctio voluptas molestias cum explicabo! Suscipit maiores reiciendis provident porro quae impedit voluptatum."
    },
    {
      avatar: AVTR3,
      name: "Kwame Despite",
      review: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. At minus, corporis id similique assumenda doloremque nihil, unde distinctio voluptas molestias cum explicabo! Suscipit maiores reiciendis provident porro quae impedit voluptatum."
      },
      {
        avatar: AVTR4,
        name: "Zoya Khan",
        review: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. At minus, corporis id similique assumenda doloremque nihil, unde distinctio voluptas molestias cum explicabo! Suscipit maiores reiciendis provident porro quae impedit voluptatum."
        },
]

const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <Swiper className="container testimonials__container"
       modules={[Pagination]}
       spaceBetween={40}
       slidesPerView={1}
       navigation
       pagination={{ clickable: true }}>
        {
          data.map(({avatar, name, review}, index) => {
            return (
              <SwiperSlide key={index} className="testimonial">
                <div className="client__avatar">
                  <img src={avatar} />
                </div>
                <h5 className="client__name">{name}</h5>
                <small className="client review">{review}</small>
              </SwiperSlide>
            )
          })
        }
      </Swiper>
    </section>
  )
}

export default Testimonials
