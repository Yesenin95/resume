'use client'
import { Container, Grid, Heading, useMediaQuery } from "@chakra-ui/react";
import Image from "next/image"

export default function Stack() {
   const [isLargerThanMD] = useMediaQuery("(min-width: 768px)");
   let gridColumnCount = 3; // По умолчанию 3 колонки

   if (isLargerThanMD) {
      gridColumnCount = 3; // При ширине экрана более 768px, у нас будет 3 колонки
   } else {
      gridColumnCount = 2; // При меньшей ширине экрана, у нас будет 2 колонки
   }

   if (window.innerWidth < 768) {
      gridColumnCount = 1; // При ширине экрана менее 768px, у нас будет 1 колонка
   }
   const padding = {
      base: "10px",
      xl: "20px",
      md: "15px",
   };
   return <>
      <Container maxW={isLargerThanMD ? "1200px" : "100%"} p={padding} overflow={'auto'} h={'80vh'} display={'flex'} flexDirection={'column'} justifyContent={'space-between'}>
         <Heading as={'h1'} fontSize={'36px'} textAlign={'center'} pb={'20px'}>Мой стек</Heading>
         <Grid placeItems={'center'} gridTemplateColumns={`repeat(${gridColumnCount}, 1fr)`} gap={'10px'} p={padding} pb={'20px'}>
            <Image src={'/images/html.jpg'} width={300} height={300} alt='html' />
            <Image src={'/images/css.jpg'} width={300} height={300} alt='css' />
            <Image src={'/images/js.jpg'} width={300} height={300} alt='js' />
            <Image src={'/images/react.jpg'} width={300} height={300} alt='react' />
            <Image src={'/images/next.png'} width={300} height={300} alt='next' />
            <Image src={'/images/prisma.png'} width={300} height={300} alt='prisma' />
            <Image src={'/images/ts.png'} width={300} height={300} alt='ts' />
            <Image src={'/images/chakra.jpg'} width={300} height={300} alt='chakra' />
            <Image src={'/images/neon.svg'} width={300} height={300} alt='neon' />
         </Grid>
      </Container>
   </>
}