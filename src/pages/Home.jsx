import React from 'react';
import { Carousel } from '../components/Carousel';
import { Card } from '../components/Card';
import { Products } from '../components/Products';
import { images } from '../data/images';

export function Home() {
  return (
    <>
      <Carousel images={images} autoSlide={true} />
      <Products />
    </>
  );
}
