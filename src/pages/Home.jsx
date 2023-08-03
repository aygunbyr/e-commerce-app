import React from 'react';
import Carousel from '../components/Carousel';

const images = [
  '/assets/pexels-jess-bailey-designs-788946.jpg',
  '/assets/pexels-josh-sorenson-1334597.jpg',
  '/assets/pexels-karolina-grabowska-5632386.jpg',
  '/assets/pexels-mart-production-7679454.jpg',
  '/assets/pexels-maryam-7250143.jpg',
];

function Home() {
  return (
    <>
      <Carousel images={images} autoSlide={true} />
      Home Page
    </>
  );
}

export default Home;
