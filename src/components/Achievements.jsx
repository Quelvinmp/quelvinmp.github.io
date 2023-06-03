import { Swiper, SwiperSlide } from "swiper/react";
import embaixador from '../images/embaixador.png'
import premioFundamentos from '../images/premio-fundamentos.png'
import tecladoDeOuro from '../images/teclado-de-ouro.png'
import finalistaHackaton from '../images/finalista-hackaton.png'
import certificadoFundamentos from '../images/certificado-fundamentos.png'
import onTrackFundamentos from '../images/ontrack-fundamentos.png'

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import AOS from 'aos';
import 'aos/dist/aos.css'; 

// import required modules
import { Navigation } from "swiper";
import { useEffect, useState } from "react";

export default function Achievements() {
  const [perView, setPerView] = useState(1);
  let viewportWidth;

  const setViewportWidth = () => {
    viewportWidth = window.innerWidth || document.documentElement.clientWidth;
  }

  const changePerView = () => {
    if (viewportWidth > 1536) {
      setPerView(3)
    } else if (viewportWidth > 1024) {
      setPerView(2)
    }
    else {
      setPerView(1)
    }
  }

  useEffect(() => {
    setViewportWidth();
    changePerView();
    AOS.init({
      duration: 1000
    });
  }, [])

  window.addEventListener('resize', function () {
    setViewportWidth();
    changePerView();
  }, false);

  return (
    <div className="bg-base-100 py-14" id="achievements">
      <h1 className="text-4xl text-center mb-14" data-aos="fade">Conquistas</h1>
      <div data-aos="fade-right">
        <Swiper
          slidesPerView={perView}
          spaceBetween={30}
          loop={true}

          navigation={true}
          modules={[Navigation]}
          className="p-2 mySwiper"
        >
          <SwiperSlide className="flex h-auto "><a href="https://www.linkedin.com/posts/quelvinmachadodepaula_vqv-gotrybe-soutryber-activity-7031026425033809920-Vboz?utm_source=share&utm_medium=member_desktop" target="_blank" className="m-auto hover:scale-105" rel="noreferrer"><img src={embaixador} alt="" /></a></SwiperSlide>

          <SwiperSlide className="flex h-auto "><a href="https://www.linkedin.com/posts/quelvinmachadodepaula_vqv-gotrybe-soutryber-activity-7031026425033809920-Vboz?utm_source=share&utm_medium=member_desktop" target="_blank" className="m-auto hover:scale-105" rel="noreferrer"><img src={premioFundamentos} alt="" /></a></SwiperSlide>

          <SwiperSlide className="flex h-auto"><a href="https://www.linkedin.com/posts/quelvinmachadodepaula_vqv-gotrybe-soutryber-activity-7066742231742783488-0gJE?utm_source=share&utm_medium=member_desktop" target="_blank" className="m-auto hover:scale-105" rel="noreferrer"><img className="m-auto" src={tecladoDeOuro} alt="" /></a></SwiperSlide>

          <SwiperSlide className="flex h-auto"><a href="https://www.linkedin.com/posts/quelvinmachadodepaula_vqv-activity-7067257040502407168-1CLq?utm_source=share&utm_medium=member_desktop" target="_blank" className="m-auto hover:scale-105" rel="noreferrer"><img className="m-auto" src={finalistaHackaton} alt="" /></a></SwiperSlide>

          <SwiperSlide className="flex h-auto"><a href="https://www.linkedin.com/posts/quelvinmachadodepaula_m%C3%B3dulo-de-fundamentos-do-desenvolvimento-activity-7040080631162150912-v7Bb?utm_source=share&utm_medium=member_desktop" target="_blank" className="m-auto hover:scale-105" rel="noreferrer"><img className="m-auto" src={certificadoFundamentos} alt="" /></a></SwiperSlide>

          <SwiperSlide className="flex h-auto"><a href="https://www.linkedin.com/posts/quelvinmachadodepaula_selo-on-track-fundamentos-em-desenvolvimento-activity-7036398914844995585-MxCj?utm_source=share&utm_medium=member_desktop" target="_blank" className="m-auto hover:scale-105" rel="noreferrer"><img className="m-auto" src={onTrackFundamentos} alt="" /></a></SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}