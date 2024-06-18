import React from 'react';
import './Input.css'; // Ensure correct import of CSS
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Navbar from "./component/navbar/Navbar";

const data = [
  {
    name: 'John Morgan',
    img: '/images/John_Morgan.jpg',
    review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    name: 'Ellie Anderson',
    img: '/images/Ellie_Anderson.jpg',
    review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    name: 'Nia Adebayo',
    img: '/images/Nia_Adebayo.jpg',
    review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    name: 'Rigo Louie',
    img: '/images/Rigo_Louie.jpg',
    review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    name: 'Mia Williams',
    img: '/images/Mia_Williams.jpg',
    review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
];

const sliderSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
};

const CarouselSection = ({ data }) => (

  <div className="w-3/4 mb-16">
    <Slider {...sliderSettings}>
      {data.map((d, index) => (
        <div key={index} className="p-4">
          <div className="bg-white text-black rounded-xl flex flex-col items-center h-[1000px]">
            <div className="h-[450px] w-[1000px]  rounded-t-xl bg-indigo-500 flex justify-center items-center">
              <div className="h-96 w-96 overflow-hidden rounded-full flex justify-center items-center">
                <img src={d.img} alt="" className="object-cover h-full w-full rounded-full" />
              </div>
            </div>
            <div className="flex flex-col justify-center items-center gap-4 p-4 mt-6 flex-1">
              <p className="text-5xl font-semibold">{d.name}</p>
              <p className="text-3xl">{d.review}</p>
              <button className="bg-indigo-500 text-white text-2xl px-8 py-5 rounded-xl mb-4">read more</button>
            </div>
          </div>
        </div>
      ))}
    </Slider>
  </div>
);

const App = () => (
  
  <div>
    <Navbar/>
    <div className="flex flex-col justify-center items-center min-h-screen bg-black">
      <h1 className="text-white text-4xl my-8">Section 1</h1>
      <CarouselSection data={data} />
    </div>
    <div className="flex flex-col justify-center items-center min-h-screen bg-black">
      <h1 className="text-white text-4xl my-8">Section 2</h1>
      <CarouselSection data={data} />
    </div>
    <div className="flex flex-col justify-center items-center min-h-screen bg-black">
      <h1 className="text-white text-4xl my-8">Section 3</h1>
      <CarouselSection data={data} />
    </div>
  </div>
);

export default App;
