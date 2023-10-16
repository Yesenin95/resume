'use client'
import { Box, Container, Heading, useMediaQuery } from "@chakra-ui/react";

export default function About() {
   const [isLargerThanMD] = useMediaQuery("(min-width: 768px)");
   const padding = {
      base: "2px",
      xl: "10px",
      md: "10px",
   };
   return <>
      <Box backgroundColor={'rgb(34, 33, 33)'} color={'white'}>
         <Container maxW={isLargerThanMD ? "1200px" : "100%"} p={padding} overflowY={isLargerThanMD ? "auto" : "scroll"} h="80vh" >

            <Heading as={'h1'} p={padding}>
               Обо мне
            </Heading>
            <Box maxW={'100vw'} p={'10px'}>
               Приветствую всех, кто читает данный раздел в этом резюме. Хотелось бы рассказать о себе в нескольких словах, что бы у читателя сложился в голове некий образ.<br />
               Помню в детстве, когда появился первый компьютер, меня поражало как это все работае, но когда появился интернет и в нем можно было найти все что угодно, это вызвало восторг, правда огорчало внешний вид сайтов. И мне хотелось, когда выросту, стать тем, кто будет делать эти самые сайты. Только делать их красивыми и удобными для пользователей.<br />
               Но к сожалению, сложилось так, что я стал поваром. Но это научило меня работать в команде, составлять план работы и разбивать большую работу на более мелкие задачи. Привык к монотонной работе и думать на перед. <br />
               И с годами мое желание только усилилось к возможности созданию сайтов и не только. Я закончил обучение в Акадетии &quot;ТОП&quot;. Да, не самое лучше изучение вышло, но главное, что есть понятие и начальные навыки, которые хочется улучшать и уметь применять. Надеюсь что найдется компания, которая поверит в меня и поможет мне в реализации моих планов. В то время как я смогу усилить штат и буду приносить пользу.
            </Box>

         </Container>
      </Box>
   </>
}