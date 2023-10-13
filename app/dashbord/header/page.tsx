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
   Stack,
   Center,
   Text
} from '@chakra-ui/react'
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons'
import Link from 'next/link';

interface Props {
   children: React.ReactNode,
   url: string
}

const Links = [
   { title: 'Главная', url: '/' },
   { title: 'Обо мне', url: '/about' },
   { title: 'Образование и опыт', url: '/education' },
   { title: 'Стек', url: '/stack' },
];

const NavLink = (props: Props) => {
   const { children, url } = props;

   return (
      <Box
         as={Link}
         href={url}
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
         <Box px={4} >
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
                  <Link href="/">
                     <Text fontSize={'24px'}>
                        Резюме
                     </Text>
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
                        <Link href="/">
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
