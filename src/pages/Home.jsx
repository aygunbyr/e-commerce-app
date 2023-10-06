import Carousel from '../components/Carousel';
import Products from '../components/Products';
import { images } from '../data/images';

function Home() {
  return (
    <>
      <Carousel images={images} autoSlide={true} />
      <Products />
    </>
  );
}

export default Home;
