import {
    Flex,
    Circle,
    Box,
    Image,
    Badge,
    useColorModeValue,
    Icon,
    chakra,
    Tooltip,
    Button,
    Toast,
  } from '@chakra-ui/react';
  import { BsStar, BsStarFill, BsStarHalf } from 'react-icons/bs';
  import { FiShoppingCart } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { Product } from '../../Utils/types';
import { Modalfun } from './Modal';
  
  const data = {
    isNew: true,
    imageURL:
      'https://images.unsplash.com/photo-1572635196237-14b3f281503f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=4600&q=80',
    name: 'Wayfarer Classic',
    price: 4.5,
    rating: 4.2,
    numReviews: 34,
  };
  
  interface RatingProps {
    rating: number;
    numReviews: number;
  }
  
  function Rating({ rating, numReviews }: RatingProps) {




    return (
      <Box alignItems="center">
        {Array(5)
          .fill('')
          .map((_, i) => {
            const roundedRating = Math.round(rating * 2) / 2;
            if (roundedRating - i >= 1) {
              return (
                <BsStarFill
                  key={i}
                  style={{ marginLeft: '1' }}
                  color={i < rating ? 'teal.500' : 'gray.300'}
                />
              );
            }
            if (roundedRating - i === 0.5) {
              return <BsStarHalf key={i} style={{ marginLeft: '1' }} />;
            }
            return <BsStar key={i} style={{ marginLeft: '1' }} />;
          })}
        <Box as="span" ml="2" color="gray.600" fontSize="sm">
          {numReviews} review{numReviews > 1 && 's'}
        </Box>
      </Box>
    );
  }
  interface detpr{
    data:Product
  }
  function ProductCard({data}:detpr) {
    const handleadd=()=>{
     
    }
    
    return (

      <Flex p={50} w="fit-content">
        <Box
          bg={useColorModeValue('white', 'gray.800')}
          maxW="290px"
          key={data.id}
          //   border="1px solid red"
          borderWidth="1px"
          rounded="lg"
        shadow="lg"
        boxShadow="10px 5px 5px black"
        position="relative">
          {/* { (
            <Circle
            size="10px"
            position="absolute"
              top={2}
              right={2}
              bg="red.200"
              />
            )} */}
  <Link to={`/product/${data.id}`}>

          <Image
          boxSize={"400px"}
          objectFit={"contain"}
          src={data.image}
          alt={`Picture of ${data.name}`}
          roundedTop="lg"
          />
          </Link>
  
            <Link to={`/product/${data.id}`}>
          <Box p="6">
            <Box alignItems="baseline">
              
                <Badge rounded="full" px="2" fontSize="0.8em" colorScheme="black" color="white">
                  New
                </Badge>
           
            </Box>
            <Flex mt="1"  justifyContent="space-between" alignContent="center">
              <Box
                fontSize="2xl"
                fontWeight="semibold"
                as="h4"
                lineHeight="tight"
                isTruncated>
                {data.name}
              </Box>
             
             
            
            </Flex>
            <Box
                fontSize="2xl"
                fontWeight="semibold"
                as="h5"
                lineHeight="tight"
                isTruncated>
                {data.description}
              </Box>
            <Flex justifyContent="space-between" alignContent="center">
              {/* <Rating rating={data.rating} numReviews={data.numReviews} /> */}
              <Box fontSize="2xl" color={useColorModeValue('gray.800', 'white')}>
                <Box as="span" color={'white'} fontSize="lg">
                  $
                </Box>
                {data.price}
              </Box>
            </Flex>
          </Box>
                  </Link>
          <Button width={"100%"}  height={"50px"} onClick={handleadd} bgColor={"#D3145A"}>
          
          <Modalfun id={data.id} img={data.image} name={data.name} price={data.price} />

      </Button>
        </Box>
                 
      </Flex>
                
    );
  }
  
  export default ProductCard;