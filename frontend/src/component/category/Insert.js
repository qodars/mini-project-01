import { Card, CardBody, CardHeader, Modal,Button,ModalFooter,  Heading,  Input,FormControl, 
    ModalBody,ModalContent,FormLabel,ModalOverlay,ModalCloseButton,ModalHeader, 
    Center, Stack, useColorModeValue,useDisclosure, TableContainer, Td,Tr,Th, Table, 
    Thead, Tbody} from "@chakra-ui/react";

import React from "react";

export default function Insert(){

    const { isOpen, onOpen, onClose } = useDisclosure();

    const initialRef = React.useRef();
    const finalRef = React.useRef();

    return(
        <Card align={'center'}>
            <CardHeader>
                <Heading size={'md'}>Data All Category</Heading>
            </CardHeader>
            <CardBody>
             <Center py={6}>
                <Stack borderWidth="1px" borderRadius="lg" w={{ sm: '100%', md: '740px' }}
                       height={{ sm: '476px', md: '25rem' }} direction={{ base: 'column', md: 'row' }}
                       bg={useColorModeValue('white', 'gray.900')} boxShadow={'2xl'} padding={4}>
                    <FormControl>
                        <Button onClick={onOpen}>New Category</Button>
                     

                        <TableContainer>
                        <Table variant='striped' colorScheme='teal'>
                          
                            <Thead>
                            <Tr>
                                <Th>ID</Th>
                                <Th>Name</Th>
                                <Th>Action</Th>
                            </Tr>
                            </Thead>
                            <Tbody>
                            <Tr>
                                <Td>1</Td>
                                <Td>Data</Td>
                                <Td><Button>Edit</Button></Td>
                            </Tr>
                            <Tr>
                                <Td>1</Td>
                                <Td>Data</Td>
                                <Td><Button>Edit</Button></Td>
                            </Tr>
                            </Tbody>
                        </Table>
                        </TableContainer>
                
                    <Modal initialFocusRef={initialRef} finalFocusRef={finalRef} isOpen={isOpen} onClose={onClose}>
                        <ModalOverlay />
                        <ModalContent>
                        <ModalHeader>Create New Category</ModalHeader>
                        <ModalCloseButton />

                        <ModalBody pb={6}>
                            <FormControl>
                            <FormLabel>Name</FormLabel>
                            <Input ref={initialRef} placeholder="Name Category" />
                            </FormControl>
                        </ModalBody>

                        <ModalFooter>
                            <Button variantColor="blue" mr={3}>
                            Save
                            </Button>
                            <Button onClick={onClose}>Cancel</Button>
                        </ModalFooter>
                        </ModalContent>
                    </Modal>
                    </FormControl>
                </Stack>
            </Center> 
            </CardBody>
        </Card>
    )
}