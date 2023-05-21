import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";
import { Box, Divider, Flex, Image, SimpleGrid } from "@chakra-ui/react";
import { speeches } from "./speechesConsts";
import { clients } from "../../../Clients/components/ClientsSlider/clientsConsts";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { useIsDesktop } from "../../../../../../features/common/Hooks/useIsDesktop";

const SpeechesSlider = () => {
  const {isDesktop} = useIsDesktop();
  return (
    <Swiper
      style={{
        "--swiper-pagination-color": "rgba(250,250,250,0.15)",
        "--swiper-navigation-size": "30px",
      }}
      slidesPerView={isDesktop ? 3 : 1}
      spaceBetween={5}
      loop={true}
      centeredSlides={true}
      autoplay={{
        delay: 1500,
        disableOnInteraction: false,
      }}
      pagination={{dynamicBullets: true}}
      modules={[Autoplay, Pagination, Navigation]}
      className="mySwiper"
    >
      <SimpleGrid
        alignItems="center"
        justifyContent="center"
        display="flex"
        columns={speeches.length}
        margin="0 auto"
        left="0"
        right="0"
      >
        {speeches.map((speech) => (
          <SwiperSlide>
            <Image
              key={speech}
              src={speech}
              width="100%"
              height="287px"
              alignSelf="center"
              isTruncated
              borderRadius="2xl"
              position="relative"
              backgroundSize="cover"
              backgroundPosition="center"
              backgroundRepeat="no-repeat"
              marginBottom="2rem"
            />
            
          </SwiperSlide>
        ))}
      </SimpleGrid>
    </Swiper>
  );
};

export default SpeechesSlider;
