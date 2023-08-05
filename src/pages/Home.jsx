import React from 'react';
import { Carousel } from '../components/Carousel';
import { Card } from '../components/Card';
import { Cards } from '../components/Cards';

const images = [
  '/assets/pexels-jess-bailey-designs-788946.jpg',
  '/assets/pexels-josh-sorenson-1334597.jpg',
  '/assets/pexels-karolina-grabowska-5632386.jpg',
  '/assets/pexels-mart-production-7679454.jpg',
  '/assets/pexels-maryam-7250143.jpg',
];

export function Home() {
  return (
    <>
      <Carousel images={images} autoSlide={true} />
      <Cards>
        <Card />
        <Card />
        <Card />
        <Card />
      </Cards>
    </>
  );
}
