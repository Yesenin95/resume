'use client'
import { Box, Container, Grid, Heading, useMediaQuery } from "@chakra-ui/react";
import Image from "next/image";

export default function Stack() {
   const [isLargerThanMD] = useMediaQuery("(min-width: 768px)");
   const padding = {
      base: "10px",
      xl: "20px",
      md: "15px",
   };

   return (
      <Box backgroundColor={'rgb(34, 33, 33)'} color={'white'}>
         <Container maxW={isLargerThanMD ? "1200px" : "100%"} p={padding} overflowY={isLargerThanMD ? "auto" : "scroll"} h="80vh" display="flex" flexDirection="column" justifyContent="space-between" backgroundColor={'rgb(34, 33, 33)'} color={'white'}>
            <Heading as="h1" fontSize="36px" textAlign="center" pb="20px">
               Мой стек
            </Heading>
            <Grid
               placeItems="center"
               gridTemplateColumns={[
                  "1fr", // Один столбец для экранов шириной менее 768px
                  "repeat(2, 1fr)", // Два столбца для экранов шириной от 768px до 1200px
                  "repeat(3, 1fr)", // Три столбца для экранов шириной более 1200px
               ]}
               gap="10px"
               p={padding} pb="20px">
               <Image src="/images/html.jpg" width={250} height={250} alt="html" />
               <Image src="/images/css.jpg" width={250} height={250} alt="css" />
               <Image src="/images/js.jpg" width={250} height={250} alt="js" />
               <Image src="/images/react.jpg" width={250} height={250} alt="react" />
               <Image src="/images/next.png" width={250} height={250} alt="next" />
               <Image src="/images/prisma.png" width={250} height={250} alt="prisma" />
               <Image src="/images/ts.png" width={250} height={250} alt="ts" />
               <Image src="/images/chakra.jpg" width={250} height={250} alt="chakra" />
               <Image src="/images/neon.svg" width={250} height={250} alt="neon" />
            </Grid>
         </Container>
      </Box>
   );
}
