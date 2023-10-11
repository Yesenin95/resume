'use client'
import {
   Box,
   Flex,
   HStack,
   IconButton,
   Button,
   Menu,
   MenuButton,
   MenuList,
   MenuItem,
   MenuDivider,
   useDisclosure,
   useColorModeValue,
   Stack,
   Center,
} from '@chakra-ui/react'
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons'
import Link from 'next/link'; // Импортируем Link из next

interface Props {
   children: React.ReactNode,
   url: string
}

const Links = [
   { title: 'Главная', url: '/' },
   { title: 'Обо мне', url: '/about' }, // Здесь '/about' - это URL для страницы "Обо мне"
   { title: 'Образование и опыт', url: '/education' }, // Здесь '/education' - это URL для страницы "Образование и опыт"
   { title: 'Стек', url: '/stack' }, // Здесь '/stack' - это URL для страницы "Стек"
];

const NavLink = (props: Props) => {
   const { children, url } = props;

   return (
      <Box
         as={Link} // Используем Link для перехода на другие страницы
         href={url} // Передаем URL через props
         px={2}
         py={1}
         rounded={'md'}
         _hover={{
            textDecoration: 'none',
            bg: 'gray.700',
         }}
      >
         {children}
      </Box>
   )
}

export default function NavBar() {
   const { isOpen, onOpen, onClose } = useDisclosure();

   return (
      <>
         <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4}>
            <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
               <IconButton
                  size={'md'}
                  icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
                  aria-label={'Open Menu'}
                  display={{ md: 'none' }}
                  onClick={isOpen ? onClose : onOpen}
               />
               <Center flex={1}>
                  <HStack as={'nav'} spacing={4} display={{ base: 'none', md: 'flex' }} >
                     {Links.map((link) => (
                        <NavLink key={link.title} url={link.url}>
                           {link.title}
                        </NavLink>
                     ))}
                  </HStack>
               </Center>
               <Flex alignItems={'center'}>
                  <Link href="/"> {/* Ссылка на главную страницу */}
                     <a>
                        Резюме
                     </a>
                  </Link>
                  <Menu>
                     <MenuButton
                        as={Button}
                        rounded={'full'}
                        variant={'link'}
                        cursor={'pointer'}
                        minW={0}
                     />
                     <MenuList>
                        {Links.map((link) => (
                           <Link key={link.title} href={link.url}>
                              <MenuItem>{link.title}</MenuItem>
                           </Link>
                        ))}
                        <MenuDivider />
                        <Link href="/"> {/* Ссылка на главную страницу */}
                           <MenuItem>Главная</MenuItem>
                        </Link>
                     </MenuList>
                  </Menu>
               </Flex>
            </Flex>
            {isOpen ? (
               <Box pb={4} display={{ md: 'none' }}>
                  <Stack as={'nav'} spacing={4}>
                     {Links.map((link) => (
                        <NavLink key={link.title} url={link.url}>
                           {link.title}
                        </NavLink>
                     ))}
                  </Stack>
               </Box>
            ) : null}
         </Box>
      </>
   );
}
