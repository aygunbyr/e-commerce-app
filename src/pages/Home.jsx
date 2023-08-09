import { Carousel, Products } from '../components';
import { images } from '../data/images';

export const Home = () => {
  return (
    <>
      <Carousel images={images} autoSlide={true} />
      <Products />
    </>
  );
};
