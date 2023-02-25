import {
  Box,
  Stack,
} from "@chakra-ui/react";


import Main from "../homeComponents/Main";
import MainCarousel from "../homeComponents/MainCarousel";
import TopProfile from "../homeComponents/TopProfile";

export default function Homepage() {
  return (
    <>
      <Box marginTop={{ base: "3rem",lg:"5rem"}} p={{ base: "50px", md: "8px 100px",lg: "8px 250px" }} backgroundColor="#EEEEEE">
        <Stack gap={2}>
            <TopProfile />
            <MainCarousel />
            <Main />
        </Stack>
      </Box>
    </>
  );
}
