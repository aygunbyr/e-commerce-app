// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const Slide = ({ imageSrc }) => {
  return (
    <div style={{ height: '600px', position: 'relative' }}>
      <img
        src={imageSrc}
        alt="Slide"
        style={{
          display: 'block',
          width: '100%',
          height: '100%',
          objectFit: 'cover',
        }}
      />
    </div>
  );
};

const SwiperSlider = () => {
  return (
    <Swiper
      className="mySwiper"
      spaceBetween={10}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      slidesPerView={1}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      modules={[Autoplay, Pagination, Navigation]}
    >
      <SwiperSlide>
        <Slide imageSrc="/assets/ian-dooley-TT-ROxWj9nA-unsplash.jpg" />
      </SwiperSlide>
      <SwiperSlide>
        <Slide imageSrc="/assets/brooke-cagle-CYRlCwtduwE-unsplash.jpg" />
      </SwiperSlide>
      <SwiperSlide>
        <Slide imageSrc="/assets/the-nix-company-4Hmj9gkyM6c-unsplash.jpg" />
      </SwiperSlide>
      <SwiperSlide>
        <Slide imageSrc="/assets/pexels-karolina-grabowska-5632386.jpg" />
      </SwiperSlide>
      <SwiperSlide>
        <Slide imageSrc="/assets/pexels-jess-bailey-designs-788946.jpg" />
      </SwiperSlide>
    </Swiper>
  );
};

export default SwiperSlider;
