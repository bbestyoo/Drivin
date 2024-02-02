import pp1 from "/pp1.jpg";
import pp2 from "/pp2.jpg";
import pp3 from "/pp3.jpg";
import pp4 from "/pp4.jpg";

import { FaQuoteLeft } from "react-icons/fa";
import "../App.css";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const mock_data = [
  {
    id: 1,
    image: pp1,
    name: "Dore Brantl",
    profession: "Senior Financial Analyst",
    character:
      "A compassionate and creative individual with a zest for life and a talent for connecting with others.",
  },
  {
    id: 2,
    image: pp2,

    name: "Trudey Gricewood",
    profession: "Paralegal",
    character:
      "A compassionate and creative individual with a zest for life and a talent for connecting with others.",
  },
  {
    id: 3,
    image: pp3,

    name: "Hy Iozefovich",
    profession: "Business Systems Development Analyst",
    character:
      "A compassionate and creative individual with a zest for life and a talent for connecting with others.",
  },
  {
    id: 4,
    image: pp4,

    name: "Garrott Glasgow",
    profession: "Office Assistant II",
    character:
      "A compassionate and creative individual with a zest for life and a talent for connecting with others.",
  },
];

function Testimonials() {
  let settings = {
    dots: true,
    isFinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  }; 
  
  return (
    <>
      <div className=" my-20">
        <Slider className="slider" {...settings}>
          {mock_data.map((slide, index) => {   
            return (
              <div key={index}>
                <Card user={slide} />
              </div>
            );
          })}
        </Slider>
      </div>
      {/* <swiper-container slides-per-view="1" loop="true" Pagination="true">
        {mock_data.map((slide, index) => {
          return (
            <swiper-slide key={index}>
              <Card user={slide} />
            </swiper-slide>
          );
        })}
      </swiper-container> */}
    </>
  );
}

export default Testimonials;

export const Card = ({ user }) => {
  return (
    <>
    <div className="">

      <section
        id="for the carousel box "
        className="  flex flex-col items-center "
      >
        <div className="text-center mb-16">
          <p className="text-yellow-400">TESTIMONIAL</p>
          <h1 className="font-bold text-4xl text-black">What Our Clients Say! </h1>
        </div>
        <div className=" relative">
          <img
            className=" w-36 h-36 object-cover object-top rounded-full"
            alt="pp"
            src={user.image}
          />
          <div className=" absolute -bottom-8 left-12 -translate-x-0 bg-white p-3 rounded-full">
            <FaQuoteLeft className=" text-3xl" />
          </div>
        </div>
        <div className="  box-border mt-10 w-1/2">
          <p className=" text-center text-2xl text-gray-400">
            {user.character}
          </p>
        </div>
        <hr className=" my-2 h-[2px]  w-[200px] bg-slate-200" />
        <p className=" text-black text-xl font-semibold">{user.name}</p>
        <p className=" text-slate-400">{user.profession}</p>
      </section>
    </div>

    </>
  );
};
