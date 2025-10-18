"use client";

import { useState } from "react";
import {
  Box,
  Heading,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Button,
  VStack,
  Text,
  SimpleGrid,
} from "@chakra-ui/react";
import Swal from "sweetalert2";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    Swal.fire({
      title: "Sending Message...",
      html: "Please wait while we send your message",
      allowOutsideClick: false,
      didOpen: () => {
        Swal.showLoading();
      },
    });

    try {
      // Prepare form data
      const formDataToSend = {
        name: formData.name,
        email: formData.email,
        message: formData.message,
        _template: "table",
        _captcha: "false",
      };

      // Submit form data to FormSubmit
      const response = await fetch(
        "https://formsubmit.co/Amaradelhasan131@gmail.com",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formDataToSend),
        }
      );

      if (response.ok) {
        // Show success message
        Swal.fire({
          title: "Success!",
          text: "Your message has been sent successfully!",
          icon: "success",
          confirmButtonColor: "#6366f1",
          timer: 2000,
          timerProgressBar: true,
        }).then(() => {
          // Reset form
          setFormData({
            name: "",
            email: "",
            message: "",
          });
        });
      } else {
        throw new Error("Failed to send message");
      }
    } catch (error) {
      console.error(error);
      Swal.fire({
        title: "Error!",
        text: "Something went wrong. Please try again later.",
        icon: "error",
        confirmButtonColor: "#6366f1",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

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

      <SimpleGrid columns={{ base: 1, lg: 2 }} spacing={8} alignItems="center">
        <VStack spacing={6} align="stretch">
          <Text fontSize="lg" color="dark.200">
            Have a project in mind or want to discuss potential opportunities?
            Feel free to reach out!
          </Text>

          <VStack spacing={4} align="stretch">
            <Box>
              <Text fontWeight="bold" color="brand.300" mb={1}>
                Email
              </Text>
              <Text color="dark.300">Amaradelhasan131@gmail.com</Text>
            </Box>
            <Box>
              <Text fontWeight="bold" color="brand.300" mb={1}>
                Phone
              </Text>
              <Text color="dark.300">01128538635</Text>
            </Box>
            <Box>
              <Text fontWeight="bold" color="brand.300" mb={1}>
                Location
              </Text>
              <Text color="dark.300">6th October, Giza, Egypt</Text>
            </Box>
          </VStack>
        </VStack>

        <Box>
          <VStack spacing={4} w="full" as="form" onSubmit={handleSubmit}>
            <FormControl id="name" isRequired>
              <FormLabel color="dark.200">Name</FormLabel>
              <Input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                isDisabled={isSubmitting}
                focusBorderColor="brand.500"
                bg="dark.700"
                border="1px"
                borderColor="dark.600"
                _hover={{ borderColor: "brand.400" }}
                color="dark.50"
                _placeholder={{ color: "dark.400" }}
                placeholder="Your name"
              />
            </FormControl>

            <FormControl id="email" isRequired>
              <FormLabel color="dark.200">Email</FormLabel>
              <Input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                isDisabled={isSubmitting}
                focusBorderColor="brand.500"
                bg="dark.700"
                border="1px"
                borderColor="dark.600"
                _hover={{ borderColor: "brand.400" }}
                color="dark.50"
                _placeholder={{ color: "dark.400" }}
                placeholder="your.email@example.com"
              />
            </FormControl>

            <FormControl id="message" isRequired>
              <FormLabel color="dark.200">Message</FormLabel>
              <Textarea
                h={24}
                name="message"
                value={formData.message}
                onChange={handleChange}
                isDisabled={isSubmitting}
                focusBorderColor="brand.500"
                bg="dark.700"
                border="1px"
                borderColor="dark.600"
                _hover={{ borderColor: "brand.400" }}
                color="dark.50"
                _placeholder={{ color: "dark.400" }}
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
              isLoading={isSubmitting}
              loadingText="Sending..."
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
