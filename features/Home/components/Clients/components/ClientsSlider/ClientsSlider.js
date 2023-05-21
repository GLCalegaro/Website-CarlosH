import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";
import { Image, SimpleGrid } from "@chakra-ui/react";
import { clients } from "./clientsConsts";
import { EffectFade } from "swiper";
import { motion, useScroll,
  useSpring,
  useTransform,
  useMotionValue,
  useVelocity,
  useAnimationFrame } from "framer-motion";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { useIsDesktop } from "../../../../../../features/common/Hooks/useIsDesktop";

const ClientsSlider = ({ conteudo }) => {
  const {isDesktop} = useIsDesktop();
  return (
    <Swiper
      style={{
        "--swiper-pagination-color": "#2c5274cc",
        "--swiper-navigation-size": "30px",
      }}
      slidesPerView={isDesktop ? 5 : 3}
      spaceBetween={10}
      loop={true}
      centeredSlides={true}
      autoplay={{
        delay: 1500,
        disableOnInteraction: false,
      }}
      pagination={{dynamicBullets: true}}
      modules={[Autoplay, Pagination, Navigation, EffectFade]}
      className="mySwiper"
    >
      <SimpleGrid
        alignItems="center"
        justifyContent="center"
        display="flex"
        columns={clients.length}
        margin="0 auto"
        minChildWidth="150px"
        left="0"
        
        right="0"
      >
        {clients.map((client) => (
          <SwiperSlide>
            <Image
            alt=""
              key={client}
              src={client}
              width={{base:"50vw", sm:"10.5vw"}}
              height={{base:"31vw", sm:"9.5vw"}}
              alignItems="center"
              padding="0.3rem"
              isTruncated
              borderRadius="2xl"
              position="relative"
              backgroundSize="cover"
              backgroundPosition="center"
              marginTop={{base:"2rem", sm:"3rem"}}
              marginBottom="2.6rem"
              
              
            />
          </SwiperSlide>
        ))}
      </SimpleGrid>
    </Swiper>
  );
};

export default ClientsSlider;
