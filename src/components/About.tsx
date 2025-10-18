"use client";

"use client";

import { Box, Heading, Text, VStack, Image, Flex } from "@chakra-ui/react";

const About = () => {
  return (
    <Box
      id="about"
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
        About Me
      </Heading>

      <Flex direction={{ base: "column", md: "row" }} gap={8} align="center">
        <VStack
          flex={{ md: 2 }}
          align={{ base: "center", md: "flex-start" }}
          spacing={4}
          textAlign={{ base: "center", md: "left" }}
        >
          <Text fontSize="lg" color="dark.200">
            Hello! I'm Ammar Adel Hasan, a Detail-oriented Data Analyst with
            experience at Egypt's National Telecommunications Regulatory
            Authority (NTRA). I specialize in data warehousing, ETL development,
            and business intelligence solutions using SQL, Python, and Power BI.
          </Text>

          <Text fontSize="lg" color="dark.200">
            With experience as a Big Data Analyst at NTRA, I've designed
            comprehensive data warehouse models, built ETL pipelines for
            large-scale data integration, and developed interactive dashboards
            that enhanced decision-making across departments. My passion lies in
            turning complex datasets into clear insights that support
            data-driven decisions.
          </Text>

          <Text fontSize="lg" color="dark.200">
            I hold a BS in Computer Science and Bioinformatics from Minya
            University. I'm constantly learning and adapting to new technologies
            in the data analytics field. When I'm not analyzing data, I enjoy
            contributing to data governance initiatives, exploring new
            visualization techniques, and staying updated with the latest trends
            in business intelligence.
          </Text>
        </VStack>
      </Flex>
    </Box>
  );
};

export default About;
