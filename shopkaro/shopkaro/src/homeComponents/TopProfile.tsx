import { Avatar, Flex, Grid,Text,GridItem,SimpleGrid } from '@chakra-ui/react';
import React from 'react'

const TopProfile = () => {

    const profiles = [
        {
          image:"https://img1.junaroad.com//assets/images/mobileNotif/img-1628498908811.jpg",
          title:"MY FEED",
        },
        {
          image:"https://img0.junaroad.com/images/icons/men/tshirts.png",
          title:"T-SHIRT",
        },
        {
          image:"https://img0.junaroad.com/images/icons/men/shirts.png",
          title:"SHIRTS",
        },
        {
          image:"https://img0.junaroad.com/images/icons/men/jeans.png",
          title:"JEANS",
        },
        {
          image:"https://img0.junaroad.com/images/icons/men/trousers.png",
          title:"TROUSERS",
        },
        {
          image:"https://img0.junaroad.com/images/icons/men/ethnicsets.png",
          title:"ETHNIC SETS",
        },
        {
          image:"https://img0.junaroad.com/images/icons/men/footwear.png",
          title:"FOOTWEAR",
        },
        {
          image:"https://img0.junaroad.com/images/icons/men/kids.png",
          title:"KIDS",
        },
        {
          image:"https://img0.junaroad.com/images/icons/women/home.png",
          title:"HOME",
        },
        {
          image:"https://img0.junaroad.com/images/icons/men/accessory.png",
          title:"ACCESSORY",
        },
        {
          image:"https://img0.junaroad.com/images/icons/men/winter.png",
          title:"WINTER",
        },
      ];

  return (
    <div style={{margin:"24px 0"}}>
        <SimpleGrid  columns={{ base: 4,sm:5, md: 7, lg: 11 }} gap={5} >
            {profiles.map((profile)=>(
                <GridItem textAlign="center"> 
                <Avatar size={'lg'}
                src={profile.image}
              />
              <Text fontSize="12px">{profile.title}</Text>
              </GridItem>
             ))}
            
            </SimpleGrid>
    </div>
  )
}

export default TopProfile;