'use client';

'use client';

import { Box, Heading, FormControl, FormLabel, Input, Textarea, Button, VStack, Text, SimpleGrid } from '@chakra-ui/react';

const Contact = () => {
  return (
    <Box 
      id="contact"
      bg="dark.800" 
      borderRadius="xl" 
      p={8} 
      boxShadow="xl"
      mb={12}
      border="1px"
      borderColor="dark.700"
    >
      <Heading 
        as="h2" 
        size="xl" 
        mb={6} 
        textAlign="center"
        bgGradient="linear(to-r, brand.400, brand.200)"
        bgClip="text"
        fontWeight="bold"
      >
        Get In Touch
      </Heading>
      
      <SimpleGrid 
        columns={{ base: 1, lg: 2 }} 
        spacing={8}
        alignItems="center"
      >
        <VStack spacing={6} align="stretch">
          <Text fontSize="lg" color="dark.200">
            Have a project in mind or want to discuss potential opportunities? Feel free to reach out!
          </Text>
          
          <VStack spacing={4} align="stretch">
            <Box>
              <Text fontWeight="bold" color="brand.300" mb={1}>Email</Text>
              <Text color="dark.300">Amaradelhasan131@gmail.com</Text>
            </Box>
            <Box>
              <Text fontWeight="bold" color="brand.300" mb={1}>Phone</Text>
              <Text color="dark.300">01128538635</Text>
            </Box>
            <Box>
              <Text fontWeight="bold" color="brand.300" mb={1}>Location</Text>
              <Text color="dark.300">6th October, Giza, Egypt</Text>
            </Box>
          </VStack>
        </VStack>
        
        <Box>
          <VStack spacing={4} w="full">
            <FormControl id="name" isRequired>
              <FormLabel color="dark.200">Name</FormLabel>
              <Input 
                type="text" 
                focusBorderColor="brand.500" 
                bg="dark.700"
                border="1px"
                borderColor="dark.600"
                _hover={{ borderColor: "brand.400" }}
                color="dark.50"
                _placeholder={{ color: 'dark.400' }}
                placeholder="Your name"
              />
            </FormControl>
            
            <FormControl id="email" isRequired>
              <FormLabel color="dark.200">Email</FormLabel>
              <Input 
                type="email" 
                focusBorderColor="brand.500" 
                bg="dark.700"
                border="1px"
                borderColor="dark.600"
                _hover={{ borderColor: "brand.400" }}
                color="dark.50"
                _placeholder={{ color: 'dark.400' }}
                placeholder="your.email@example.com"
              />
            </FormControl>
            
            <FormControl id="message" isRequired>
              <FormLabel color="dark.200">Message</FormLabel>
              <Textarea 
                h={24} 
                focusBorderColor="brand.500" 
                bg="dark.700"
                border="1px"
                borderColor="dark.600"
                _hover={{ borderColor: "brand.400" }}
                color="dark.50"
                _placeholder={{ color: 'dark.400' }}
                placeholder="Your message here..."
              />
            </FormControl>
            
            <Button 
              variant="brand" 
              size="lg" 
              w="full"
              type="submit"
              px={8}
              mt={2}
            >
              Send Message
            </Button>
          </VStack>
        </Box>
      </SimpleGrid>
    </Box>
  );
};

export default Contact;