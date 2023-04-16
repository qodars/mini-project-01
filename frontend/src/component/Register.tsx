import React from "react";
import {  Center, Stack, useColorModeValue, Heading, FormControl, FormLabel, Input, 
     InputRightElement, Button, InputGroup, InputLeftAddon, Text, Link, Box, Grid } from "@chakra-ui/react";

import { useState } from "react";
import { ColorModeSwitcher } from "../ColorModeSwitcher";
export default function Register(){

        const [show, setShow] = React.useState(false)
        const handleClick = () => setShow(!show)
        
    return(
        <Box textAlign="center" fontSize="xl">
        <Grid minH="50vh" p={3}>
        <ColorModeSwitcher justifySelf="flex-end" />
        <Center py={6}>
            <Stack
            borderWidth="1px"
            borderRadius="lg"
            w={{ sm: '100%', md: '540px' }}
            height={{ sm: '476px', md: '25rem' }}
            direction={{ base: 'column', md: 'row' }}
            bg={useColorModeValue('white', 'gray.900')}
            boxShadow={'2xl'}
            padding={4}>     
                <FormControl>
                <Stack spacing={3}>
                <Heading fontSize={'2xl'} fontFamily={'body'}>
               <Center>User Registration </Center> 
                </Heading>
                    <InputGroup>
                    <FormLabel>Username</FormLabel>
                    <Input type="username" placeholder='Enter username'/>
                    </InputGroup>

                    <InputGroup>
                    <FormLabel pr={'1'}>Password</FormLabel>
                    <Input pr='4.5rem' type={show ? 'text' : 'password'} placeholder='Enter password' />
                    <InputRightElement width='4.5rem'>
                    <Button h='1.75rem' size='sm' onClick={handleClick}>
                        {show ? 'Hide' : 'Show'}
                    </Button>
                    </InputRightElement>
                    </InputGroup>

                    <InputGroup>
                    <FormLabel pr={'8'}>Email</FormLabel>
                    <Input type="email"  name="email" placeholder="your-email@example.com"/>
                    </InputGroup>

                    <InputGroup>
                    <FormLabel pr={'6'}>Phone</FormLabel>
                    <InputLeftAddon children='+82' />
                    <Input type='tel' placeholder='phone number' />
                    </InputGroup>
                </Stack>
                <Stack spacing={10} pt={5}>
              <Button
                loadingText="Submitting"
                size="lg"
                bg={'blue.400'}
                color={'white'}
                _hover={{
                  bg: 'blue.500',
                }}>
                Sign up
              </Button>
            </Stack>
            <Stack pt={6}>
              <Text align={'center'}>
                Already a user? <Link color={'blue.400'}>Login</Link>
              </Text>
            </Stack>
                </FormControl>
            </Stack>
        </Center>
        </Grid>
        </Box>
    )
}
