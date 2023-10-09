'use client'
import Image from 'next/image'
import { Flex, Box, Text, Container, Heading, useMediaQuery } from '@chakra-ui/react'
import NavBar from './dashbord/header/page'
import Link from 'next/link';

export default function Home() {
   const [isLargerThanMD] = useMediaQuery("(min-width: 768px)");

   return (
      <Container maxW={isLargerThanMD ? "1200px" : "100%"} p={isLargerThanMD ? "0" : "4"} h={'100vh'}>
         <NavBar />
         <Heading size="xl" textAlign="center" as={'h1'} pt={isLargerThanMD ? '100px' : '50px'}>
            Резюме
         </Heading>
         <Flex
            direction={isLargerThanMD ? ['column', 'column', 'row'] : 'column'}
            align="center"
            justify="space-around"
            pt={isLargerThanMD ? '70px' : '30px'}>
            <Image src="/me.jpg" width={250} height={400} alt="Фотография" />
            <Box
               display="flex"
               flexDirection="column"
               justifyContent="space-between"
               alignSelf="center"
               p={4}
               height={isLargerThanMD ? '350px' : 'auto'}
            >
               <Text><b style={{ fontWeight: 'bold', fontSize: '24px' }}>Фамилия :</b> Трофимов</Text>
               <Text><b style={{ fontWeight: 'bold', fontSize: '24px' }}>Имя :</b> Николай</Text>
               <Text><b style={{ fontWeight: 'bold', fontSize: '24px' }}>Отчество :</b> Александрович</Text>
               <Link href="tel:89879773047">
                  <Text><b style={{ fontWeight: 'bold', fontSize: '24px' }}>Телефон :</b> 89879773047</Text>
               </Link>
               <Link href="tel:89393422847">
                  <Text><b style={{ fontWeight: 'bold', fontSize: '24px' }}>Телефон :</b> 89393422847</Text>
               </Link>

               <Text><b style={{ fontWeight: 'bold', fontSize: '24px' }}>Email :</b> <Link href="mailto:nikolatrofik@gmail.com">nikolatrofik@gmail.com</Link></Text>

               <Text><b style={{ fontWeight: 'bold', fontSize: '24px' }}>Дата рождения :</b> 12.04.1995</Text>
            </Box>
         </Flex>
      </Container>
   );
}
