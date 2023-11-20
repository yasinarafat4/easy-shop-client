import React from "react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { EffectCoverflow } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import ReviewCard from "../../../components/ReviewCard";
import SectionTitle from "../../../components/SectionTitle";
import "./Reviews.css";

const Reviews = () => {
  const reviews = [
    {
      id: 1,
      imageSrc: "https://i.ibb.co/4psHVp6/user-1.png",
      name: "Adam Smith",
      opinion:
        "Easy Shop brings together talented individuals from all over to form the best possible team.",
      rating: 5,
    },
    {
      id: 2,
      imageSrc: "https://i.ibb.co/DKdqMdP/user-2.png",
      name: "Lucia Johnson",
      opinion:
        "I’m very pleased with their work. When I need help with any aspect of development, I’m able to call on them to take care of it. They’re professional and complete tasks in a timely manner.",
      rating: 4,
    },
    {
      id: 3,
      imageSrc: "https://i.ibb.co/bPNcSvk/user-3.png",
      name: "David Brown",
      opinion:
        "Easy Shop has never let me down. I’m pleased with our partnership and they consistently develop reliable applications. They estimate a range of hours for each project and they manage it efficiently.",
      rating: 5,
    },
  ];
  return (
    <div className="py-2 px-2 lg:py-4 lg:px-8 dark:bg-slate-900">
      <SectionTitle
        heading={"Hear it from Our Clients"}
        subHeading={
          "Explore the impactful stories of clients who've experienced the transformative benefits of our teleradiology services."
        }
      />
      <div>
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={"auto"}
          loop={true}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          modules={[EffectCoverflow]}
          className="mySwiper"
          breakpoints={{
            320: {
              slidesPerView: 1,
            },
            640: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
        >
          {reviews.map((review, index) => (
            <SwiperSlide key={index}>
              <ReviewCard review={review} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Reviews;
