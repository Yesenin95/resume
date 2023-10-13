'use client'
import { Box, Flex, List, ListItem, useMediaQuery } from "@chakra-ui/react";
import Link from "next/link";

export default function Footer() {
   const [isLargerThanMD] = useMediaQuery("(min-width: 768px)");
   const gap = isLargerThanMD ? (isLargerThanMD ? '50px' : '25px') : '5px';
   const flexDirection = isLargerThanMD ? 'row' : 'column';
   return (
      <Flex
         h="auto"
         background="red.600"
         alignItems="center"
         position="fixed"
         bottom="0"
         right="0"
         w="100vw"
         justifyContent="center"
         flexShrink={0}
      >
         <List styleType="disc" display="flex" gap={gap} flexDirection={flexDirection}>
            <ListItem>
               <Link href="mailto:nikolatrofik@gmail.com">
                  nikolatrofik@gmail.com
               </Link>
            </ListItem>
            <ListItem>
               <Link href="tel:89879773047">
                  89879773047
               </Link>
            </ListItem>
            <ListItem>
               <Link href="tel:89393422847">
                  89393422847
               </Link>
            </ListItem>
         </List>
      </Flex>
   );
}