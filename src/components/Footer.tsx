"use client";

import { Box, Container, Flex, Text, IconButton, Link } from "@chakra-ui/react";
import { EmailIcon, PhoneIcon, ExternalLinkIcon } from "@chakra-ui/icons";

const Footer = () => {
  return (
    <Box as="footer" bg="dark.800" color="dark.100" py={8}>
      <Container maxW="container.xl">
        <Flex
          direction={{ base: "column", md: "row" }}
          justify="space-between"
          align="center"
          mb={4}
        >
          <Text fontSize="xl" fontWeight="bold" color="brand.400" mb={{ base: 4, md: 0 }}>
            Ammar Adel Hasan
          </Text>

          <Flex gap={6}>
            <IconButton
              aria-label="Email"
              icon={<EmailIcon />}
              variant="ghost"
              colorScheme="brand"
              color="brand.400"
              as={Link}
              href="mailto:Amaradelhasan131@gmail.com"
              _hover={{ bg: "dark.700", color: "brand.300" }}
            />
            <IconButton
              aria-label="Phone"
              icon={<PhoneIcon />}
              variant="ghost"
              colorScheme="brand"
              color="brand.400"
              as={Link}
              href="tel:01128538635"
              _hover={{ bg: "dark.700", color: "brand.300" }}
            />
            <IconButton
              aria-label="LinkedIn"
              icon={<ExternalLinkIcon />}
              variant="ghost"
              colorScheme="brand"
              color="brand.400"
              as={Link}
              href="https://linkedin.com/in/ammar-herzawy"
              isExternal
              _hover={{ bg: "dark.700", color: "brand.300" }}
            />
          </Flex>
        </Flex>

        <Text
          textAlign="center"
          color="dark.400"
          borderTop="1px"
          borderColor="dark.700"
          pt={4}
        >
          © {new Date().getFullYear()} Ammar Adel Hasan. All rights reserved.
        </Text>
      </Container>
    </Box>
  );
};

export default Footer;
