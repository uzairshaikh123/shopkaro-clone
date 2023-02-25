import React from "react";
import {
  Box,
  Text,
  Image,
  Link,
  GridItem,
  SimpleGrid,
  Flex,
  Stack,
  Grid,
  Heading
  
} from "@chakra-ui/react";
import { BsHeart ,BsWhatsapp} from "react-icons/bs";
import logo from '../Assets/logo.png'
export default function Main() {
  const DataMain = [
    {
      desc: "All About Details",
      id: 1,
      img: "https://img0.junaroad.com/stories/story_p_63e22899f38057083e1da170-1677066547.jpeg",
      follower:"30K Followers",
      title:"Kanika.Crystal",
    },
    {
      desc: "They Look Good On Everyone",
      id: 2,
      img: "https://img2.junaroad.com/stories/story_p_63d5b1b3fd1d3c5bbc64eb71-1676115689.jpeg",
      follower:"558 Followers",
      title:"Anujabofficial",
    },
    {
      desc: "Look Story | #ContemporaryQuilting",
      id: 3,
      img: "https://img2.junaroad.com/stories/story_p_63d0d8aff47b70081172ac44-1675402528.jpeg",
      follower:"30K Followers",
      title:"Kanika.Crystal",
    },
    {
      desc: "Feel The Vacay Vibes",
      id: 4,
      img: "https://img0.junaroad.com/stories/story_p_63e22775b388b0081fbd7b5e-1677066610.jpeg",
      follower:"30K Followers",
      title:"Kanika.Crystal",
    },
    {
      desc: "Punk Up Your Look",
      id: 5,
      img: "https://img2.junaroad.com/stories/story_p_63d5ab5bfd1d3c5bbc64e9a6-1675070572.jpeg",
      follower:"558 Followers",
      title:"Anujabofficial",
    },
    {
      desc: "#WearAtHome | New Drops",
      id: 6,
      img: "https://img3.junaroad.com/stories/story_p_63e223d313cb38083358dccc-1677065999.jpeg",
      follower:"30K Followers",
      title:"Kanika.Crystal",
    },
    {
      desc: "All New And Totally You",
      id: 7,
      img: "https://img0.junaroad.com/stories/story_p_63a937aff47b700829f6b5e2-1672991478.jpeg",
      follower:"30K Followers",
      title:"Kanika.Crystal",
    },
    {
      desc: "Look Dapper Like Sidharth",
      id: 8,
      img: "https://img0.junaroad.com/stories/story_p_63ad261eadb8b84ef73bb7d1-1672906302.jpeg",
      follower:"558 Followers",
      title:"Anujabofficial",
    },
    {
      desc: "Top It Off With A Tie",
      id: 9,
      img: "https://img3.junaroad.com/stories/story_p_63d583c2fd1d3c5bbc64d351-1675070926.jpeg",
      follower:"558 Followers",
      title:"Anujabofficial",
    },
    {
      desc: "Stay Effortlessly Stylish",
      id: 10,
      img: "https://img0.junaroad.com/stories/story_p_63b7fd21b388b00822ba79e2-1674635779.jpeg",
      follower:"30K Followers",
      title:"Kanika.Crystal",
    },
    {
      desc: "Snag Shirts, Chinos And Sneakers",
      id: 11,
      img: "https://img2.junaroad.com/stories/story_p_63b683d013cb38081c3a1a68-1674284709.jpeg",
      follower:"30K Followers",
      title:"Kanika.Crystal",
    },
    {
      desc: "New Boxers For You",
      id: 12,
      img: "https://img3.junaroad.com/stories/story_p_63be75bbf47b7008346d38c4-1674645401.jpeg",
      follower:"30K Followers",
      title:"Kanika.Crystal",
    },
    {
      desc: "New Arrivals | #ComfyBasics",
      id: 13,
      img: "https://img0.junaroad.com/stories/story_p_63bbc7a7cc8b5e082d248dcc-1673860725.jpeg",
      follower:"30K Followers",
      title:"Kanika.Crystal",
    },
    {
      desc: "Look Story | #ContemporaryQuilting",
      id: 14,
      img: "https://img2.junaroad.com/stories/story_p_63a93669adb8b82d0e16324b-1677051481.jpeg",
      follower:"558 Followers",
      title:"Anujabofficial",
    },
    {
      desc: "Fresh Prints In The House",
      id: 15,
      img: "https://img3.junaroad.com/stories/story_p_63b6830ffd1d3c18522ec047-1673860871.jpeg",
      follower:"30K Followers",
      title:"Kanika.Crystal",
    },
    {
      desc: "Celeb Edit | #VacayWorthy Picks",
      id: 16,
      img: "https://img0.junaroad.com/stories/story_p_63ac0811fd1d3c5cf6441b5c-1675499814.jpeg",
      follower:"30K Followers",
      title:"Kanika.Crystal",
    },
    {
      desc: "New Arrivals| #PickPolos",
      id: 17,
      img: "https://img2.junaroad.com/stories/story_p_63a95cd5f3805708227a5a64-1672997326.jpeg",
      follower:"30K Followers",
      title:"Kanika.Crystal",
    },
    {
      desc: "Trend Story | Checks + Stripes",
      id: 18,
      img: "https://img3.junaroad.com/stories/story_p_63b7f2a5f3805708269bf569-1674636056.jpeg",
      follower:"558 Followers",
      title:"Anujabofficial",
    },
    {
      desc: "Make A Statement",
      id: 19,
      img: "https://img0.junaroad.com/stories/story_p_63be668ef47b7008346d21de-1676385331.jpeg",
      follower:"558 Followers",
      title:"Anujabofficial",
    },
    {
      desc: "Up Your Fashion Game",
      id: 20,
      img: "https://img2.junaroad.com/stories/story_p_63abb0b2adb8b84ef739b66d-1672373131.jpeg",
      follower:"558 Followers",
      title:"Anujabofficial",
    },
    {
      desc: "Get Timeless Pieces Here",
      id: 21,
      img: "https://img3.junaroad.com/stories/story_p_63ad289a13cb38082a949255-1676380227.jpeg",
      follower:"558 Followers",
      title:"Anujabofficial",
    },
  ];

  return (
    // <Box   margin="0 50px" alignItems="center">
    <SimpleGrid  columns={{ sm: 1, md: 2, lg:3 }} 
    textAlign='center'  gap={4}>
        {DataMain.map((el) => (
          <GridItem  backgroundColor="#fff" paddingBottom={4}>
            <Stack>
             <Text fontWeight="400" fontSize="18px"  p="10px 0px 0px 10px" textAlign="left">{el.desc}</Text>
             <Image  src={el.img} width="100%" height="90%"  alt={el.desc} />
             </Stack>

             <Flex gap={3} paddingRight={5} justifyContent="end" marginTop="-36px">
              <Stack boxShadow="rgba(0, 0, 0, 0.16) 0px 1px 4px"  borderRadius="50%" bgColor="white" padding="7px"> <BsHeart color="red"  fontSize="28px" /></Stack>
              <Stack boxShadow="rgba(0, 0, 0, 0.16) 0px 1px 4px" borderRadius="50%" bgColor="white" padding="7px"> <BsWhatsapp color="limegreen"  fontSize="28px" /> </Stack>
             </Flex>

             <Stack textAlign="left" paddingLeft={5}>
              <Text><span>By </span>  {el.title} </Text>
              <Text>{el.follower}</Text>
             </Stack>
            </GridItem>
            ))}
      
    </SimpleGrid>
    //  </Box>
  );
};
