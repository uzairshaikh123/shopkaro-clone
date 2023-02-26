import React, { useState } from "react";

import { Box, useBreakpointValue, Image, Link } from "@chakra-ui/react";

import Slider from "react-slick";
const settings = {
  dots: true,
  // fade: true,
  infinite: true,
  autoplay: true,
  speed: 500,
  autoplaySpeed: 3000,
  slidesToShow: 2,
  slidesToScroll: 1,
  cssEase: "linear",
};

// interface UserData {
//   slider: string;
//   password: string;
//   prevState: null
// }

export default function MainCarousel() {
  // let [slider, setSlider] = useState<any>(0);
  // const top = useBreakpointValue({ base: "90%", md: "50%" });
  // const side = useBreakpointValue({ base: "30%", md: "40px" });

  const cards = [
    {
      image:
        "https://img1.junaroad.com//assets/images/mobileNotif/img-1676569571429.jpg?crsl_pos=0",
    },
    {
      image:
        "https://img0.junaroad.com/images/banners/B2G1_13january2023_1673587401792.jpg?crsl_pos=0",
    },
    {
      image:
        "https://img1.junaroad.com//assets/images/mobileNotif/img-1677088334472.jpg?crsl_pos=0",
    },
    {
      image:
        "https://img1.junaroad.com//assets/images/mobileNotif/img-1667388470485.jpg?crsl_pos=0",
    },
    {
      image:
        "https://img1.junaroad.com//assets/images/mobileNotif/img-1676008328934.jpg?crsl_pos=0",
    },
    {
      image:
        "https://img1.junaroad.com//assets/images/mobileNotif/img-1658918101342.jpg?crsl_pos=0",
    },
    {
      image:
        "https://img1.junaroad.com//assets/images/mobileNotif/img-1667988209100.jpg?crsl_pos=0",
    },
    {
      image:
        "https://img1.junaroad.com//assets/images/mobileNotif/img-1661924796571.jpg?crsl_pos=0",
    },
    {
      image:
        "https://img1.junaroad.com//assets/images/mobileNotif/img-1674029296684.jpg?crsl_pos=0",
    },
    {
      image:
        "https://img1.junaroad.com//assets/images/mobileNotif/img-1652694665568.jpg?crsl_pos=0",
    },
    {
      image:
        "https://img1.junaroad.com//assets/images/mobileNotif/img-1677239926933.jpg?crsl_pos=0",
    },
    {
      image:
        "https://img1.junaroad.com//assets/images/mobileNotif/img-1676438894037.jpg?crsl_pos=0",
    },
  ];

  return (
    <Box position={"relative"} width={"full"} overflow={"hidden"}>
      <link
        rel="stylesheet"
        type="text/css"
        charSet="UTF-8"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
      />
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
      />


      <Link href={"#"}>
        {/* <Slider {...settings} ref={(slider) => setSlider(slider)} > */}

        <Slider {...settings}>
          {cards.map((card, index) => (
            <Image
              key={index}
              src={card.image}
              alt="carausel img"
              sizes={"100vw"}
              style={{
                width: "auto",
                height: "auto",
                display: "block",
                verticalAlign: "bottom",
              }}
            />
          ))}
        </Slider>
      </Link>
    </Box>
  );
}
