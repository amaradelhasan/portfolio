"use client";

import {
  Box,
  Container,
  Heading,
  Text,
  Button,
  VStack,
  Stack,
  Image,
  Flex,
} from "@chakra-ui/react";
import { motion } from "framer-motion";

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const imageVariants = {
    hidden: { scale: 0.8, opacity: 0, rotate: -5 },
    visible: {
      scale: 1,
      opacity: 1,
      rotate: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        delay: 0.2,
      },
    },
  };

  const floatingAnimation = {
    y: [0, -10, 0],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut",
    },
  };

  return (
    <Box
      bgGradient="linear(to-r, brand.700, brand.900)"
      minH="100vh"
      display="flex"
      alignItems="center"
      pt={{ base: "100px", md: "0" }} // Offset for fixed navbar on mobile
      position="relative"
      overflow="hidden"
    >
      {/* Animated background elements */}
      <Box
        position="absolute"
        top="10%"
        left="5%"
        width="100px"
        height="100px"
        borderRadius="full"
        bg="brand.500"
        opacity="0.2"
      />
      <Box
        position="absolute"
        top="40%"
        right="10%"
        width="150px"
        height="150px"
        borderRadius="full"
        bg="brand.400"
        opacity="0.1"
      />
      <Box
        position="absolute"
        bottom="20%"
        left="15%"
        width="80px"
        height="80px"
        borderRadius="full"
        bg="brand.300"
        opacity="0.2"
      />

      <Container maxW="container.xl" py={16} position="relative" zIndex="1">
        <Stack
          direction={{ base: "column", md: "row" }}
          spacing={12}
          align="center"
          justify="center"
        >
          <VStack
            flex={1}
            spacing={6}
            align={{ base: "center", md: "flex-start" }}
            textAlign={{ base: "center", md: "left" }}
          >
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              <motion.div variants={itemVariants}>
                <Heading
                  as="h1"
                  size={{ base: "2xl", md: "3xl", lg: "4xl" }}
                  bgGradient="linear(to-r, brand.400, brand.200)"
                  bgClip="text"
                  fontWeight="bold"
                >
                  Hi, I'm{" "}
                  <Box as="span" color="brand.300">
                    Ammar Adel Hasan
                  </Box>
                </Heading>
              </motion.div>

              <motion.div variants={itemVariants} style={{ marginTop: "1rem" }}>
                <Text
                  fontSize={{ base: "lg", md: "xl", lg: "2xl" }}
                  color="dark.200"
                  maxW="600px"
                >
                  Data Analyst & Business Intelligence Specialist
                </Text>
              </motion.div>

              <motion.div variants={itemVariants} style={{ marginTop: "2rem" }}>
                <Button
                  as="a"
                  href="#contact"
                  variant="brand"
                  size="lg"
                  alignSelf={{ base: "center", md: "flex-start" }}
                  px={8}
                >
                  Get In Touch
                </Button>
              </motion.div>
            </motion.div>
          </VStack>

          <Flex flex={1} justify="center" align="center">
            <motion.div
              variants={imageVariants}
              initial="hidden"
              animate="visible"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <Box
                position="relative"
                width={{ base: "200px", lg: "300px" }}
                height={{ base: "200px", lg: "300px" }}
                as={motion.div}
                animate={floatingAnimation}
              >
                <Box
                  position="absolute"
                  top="-10px"
                  left="-10px"
                  width={{ base: "220px", lg: "320px" }}
                  height={{ base: "220px", lg: "320px" }}
                  borderRadius="full"
                  bgGradient="linear(45deg, brand.400, brand.600)"
                  zIndex="0"
                  as={motion.div}
                  animate={{ rotate: 360 }}
                />
                <Image
                  src="/images/profile.png"
                  alt="Ammar Adel"
                  borderRadius="full"
                  boxSize={{ base: "200px", lg: "300px" }}
                  objectFit="cover"
                  position="relative"
                  zIndex="1"
                  border="3px solid"
                  borderColor="brand.500"
                />
              </Box>
            </motion.div>
          </Flex>
        </Stack>
      </Container>
    </Box>
  );
};

export default Hero;
