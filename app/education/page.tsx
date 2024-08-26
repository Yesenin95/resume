'use client'
import { Heading, Container, useMediaQuery, Flex, Box, Text, List, ListItem } from "@chakra-ui/react";
import Link from "next/link";
import Image from "next/image";

export default function Education() {
   const [isLargerThanMD] = useMediaQuery("(min-width: 768px)");
   const padding = {
      base: "10px",
      xl: "20px",
      md: "15px",
   };
   return <>
      <Box backgroundColor={'rgb(34, 33, 33)'} color={'white'}>
         <Container maxW={isLargerThanMD ? "1200px" : "100%"} p={padding} display={'flex'} flexDirection={'column'} justifyContent={'space-between'} overflowY={isLargerThanMD ? "auto" : "scroll"} h="80vh" backgroundColor={'rgb(34, 33, 33)'} color={'white'}>
            <Heading as={'h1'} textAlign={'center'} pb={'20px'} >
               Образование и опыт
            </Heading>
            <Flex
               gap={isLargerThanMD ? "20px" : "10px"}
               justifyContent="center"
               padding={padding}
               pt={'30px'}
               flexDirection={'column'}
            >
               <Box>
                  <Heading as={'h2'} textAlign={'center'} pb={'20px'}>
                     Образование
                  </Heading>
                  <Flex flexDirection={'column'} gap={'10px'}>
                     <Text>
                        Первым делом хотелось бы отметить, что первое образование у меня средне-специально, поварское. И так как оно не играет особой роли в получение должности в сфере IT, то просто скажу, что поваром работал 6 лет.
                     </Text>
                     <Text>
                        Образование по специальности Front-end Разработчика получил в Компьютерной Академии &quot;ТОР&quot;. <br />
                        Период обучение с августа 2022г по август 2023г. <br />
                        Ссылка на мой <Link href={'https://drive.google.com/file/d/1hPzxzQaFUtziExrAJba0DCbfpL7I4hAE/view?usp=sharing'} target={"_blank"}>диплом</Link>
                     </Text>
                  </Flex>
               </Box>
               <Box w={'100%'}>
                  <Heading as={'h2'} textAlign={'center'} pb={'20px'}>
                     Опыт
                  </Heading>
                  <Box>
                     <Flex
                        flexDirection={"row"}
                        justifyContent="center"
                     >
                        <List display="flex" flexDirection={isLargerThanMD ? "row" : "column"} gap={'20px'}
                           justifyContent={'center'} alignItems={'center'} pt={'20px'} flexWrap={'wrap'}
                        >
                           <ListItem w={'250px'} alignItems='center' display={'flex'} flexDirection={'column'}>
                              <Text>Верстка интернет магазина</Text>
                              <Image src={'/images/shop.png'} width={250} height={300} alt='Картинка' />
                              <Box display={'flex'} flexDirection={'row'}>
                                 <Link href={'https://yesenin95.github.io/OnlineShopForFamily/'} target={'_blank'}>Сборка</Link>/<Link href={'https://github.com/Yesenin95/OnlineShopForFamily'} target={'_blank'}>GitHub</Link>
                              </Box>
                           </ListItem>
                           <ListItem w={'250px'} alignItems='center' display={'flex'} flexDirection={'column'}>
                              <Text>Приложение ToDo</Text>
                              <Image src={'/images/todo.png'} width={250} height={300} alt='Картинка' />
                              <Box display={'flex'} flexDirection={'row'}>
                                 <Link href={'https://todo-list-yesenin95.vercel.app/'} target={'_blank'}>Сборка</Link>/<Link href={'https://github.com/Yesenin95/Todo-List'} target={'_blank'}>GitHub</Link>
                              </Box>
                           </ListItem>
                           <ListItem w={'250px'} alignItems='center' display={'flex'} flexDirection={'column'}>
                              <Text>Приглашение на свадьбу</Text>
                              <Image src={'/images/svadba.png'} width={250} height={300} alt='Картинка' />
                              <Box display={'flex'} flexDirection={'row'}>
                                 <Link href={'https://svadba-psi.vercel.app/'} target={'_blank'}>Сборка</Link>/<Link href={'https://github.com/Yesenin95/svadba'} target={'_blank'}>GitHub</Link>
                              </Box>
                           </ListItem>
                           <ListItem w={'250px'} alignItems='center' display={'flex'} flexDirection={'column'}>
                              <Text>Приглашение на свадьбу</Text>
                              <Image src={'/images/svadba.png'} width={250} height={300} alt='Картинка' />
                              <Box display={'flex'} flexDirection={'row'}>
                                 <Link href={'https://priglashenie-na-svadby.vercel.app/'} target={'_blank'}>Сборка</Link>/<Link href={'https://github.com/Yesenin95/wedding'} target={'_blank'}>GitHub</Link>
                              </Box>
                           </ListItem>
                           <ListItem w={'250px'} alignItems='center' display={'flex'} flexDirection={'column'}>
                              <Text>Дипломный проект</Text>
                              <Image src={'/images/diplom.png'} width={250} height={300} alt='Картинка' />
                              <Box display={'flex'} flexDirection={'row'}>
                                 <Link href={'https://diplom-bay.vercel.app/'} target={'_blank'}>Сборка</Link>/<Link href={'https://github.com/Yesenin95/diplom'} target={'_blank'}>GitHub</Link>
                              </Box>
                           </ListItem>
                        </List>
                     </Flex>
                  </Box>
               </Box>
            </Flex>
         </Container>
      </Box>
   </>
}
