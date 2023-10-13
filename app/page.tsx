'use client'
import Image from 'next/image';
import { Flex, Box, Text, Container, Heading, useMediaQuery } from '@chakra-ui/react';
import Link from 'next/link';

export default function Home() {
   const [isLargerThanMD] = useMediaQuery("(min-width: 768px)");
   const padding = {
      base: "2px",
      xl: "10px",
      md: "10px",
   };

   return (
      <Container maxW={isLargerThanMD ? "1200px" : "100%"} overflowY={isLargerThanMD ? "auto" : "scroll"} h="80vh">
         <Heading size="xl" textAlign="center" as={'h1'} p={padding}>
            Резюме
         </Heading>
         <Flex
            direction={isLargerThanMD ? ['column', 'column', 'row'] : 'column'}
            align="center"
            justify="space-around"
            pt={isLargerThanMD ? '70px' : '30px'}>
            <Image src="/me.jpg" width={isLargerThanMD ? 250 : 150} height={isLargerThanMD ? 400 : 250} alt="Фотография" />
            <Box
               display="flex"
               flexDirection="column"
               justifyContent="space-between"
               alignSelf="center"
               p={4}
            >
               <Text><b style={{ fontWeight: 'bold', fontSize: '24px' }}>Фамилия :</b> Трофимов</Text>
               <Text><b style={{ fontWeight: 'bold', fontSize: '24px' }}>Имя :</b> Николай</Text>
               <Text><b style={{ fontWeight: 'bold', fontSize: '24px' }}>Отчество :</b> Александрович</Text>
               <Text><b style={{ fontWeight: 'bold', fontSize: '24px' }}>Телефон :</b>
                  <Link href="tel:89879773047"> 89879773047</Link>
               </Text>
               <Text><b style={{ fontWeight: 'bold', fontSize: '24px' }}>Телефон :</b>
                  <Link href="tel:89393422847">89393422847</Link>
               </Text>
               <Text>
                  <b style={{ fontWeight: 'bold', fontSize: '24px' }}>Email :</b>
                  <Link href="mailto:nikolatrofik@gmail.com">nikolatrofik@gmail.com</Link>
               </Text>
               <Text><b style={{ fontWeight: 'bold', fontSize: '24px' }}>Дата рождения :</b> 12.04.1995</Text>
            </Box>
         </Flex>
      </Container >
   );
}
