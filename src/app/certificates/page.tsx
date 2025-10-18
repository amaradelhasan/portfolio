import {
  Box,
  Heading,
  SimpleGrid,
  Card,
  CardBody,
  Image,
  Text,
  VStack,
  Container,
  Button,
} from "@chakra-ui/react";
import Navbar from "../../components/Navbar";

const CertificatesPage = () => {
  const certificates = [
    {
      id: 1,
      title: "Google Business Intelligence Certificate",
      issuer: "Coursera",
      date: "2024",
      imageUrl: "/images/cert-fullstack.jpg",
    },
    {
      id: 2,
      title: "Google Data Analytics Professional Certificate",
      issuer: "Coursera",
      date: "2024",
      imageUrl: "/images/cert-javascript.jpg",
    },
    {
      id: 3,
      title: "ETL and ELT In Python Certificate",
      issuer: "Datacamp",
      date: "2025",
      imageUrl: "/images/cert-react.jpg",
    },
    {
      id: 4,
      title: "ITI Summer Training Python",
      issuer: "Information Technology Institute (ITI)",
      date: "2023",
      imageUrl: "/images/cert-aws.jpg",
    },
    {
      id: 5,
      title: "ITI Summer Training SQL",
      issuer: "Information Technology Institute (ITI)",
      date: "2022",
      imageUrl: "/images/cert-ux.jpg",
    },
  ];

  return (
    <>
      <Navbar />
      <Box minH="100vh" bg="dark.900" pt={{ base: "100px", md: "0" }}>
        <Container maxW="container.xl" py={20}>
          <Heading
            as="h1"
            size="2xl"
            mb={12}
            textAlign="center"
            bgGradient="linear(to-r, brand.400, brand.200)"
            bgClip="text"
            fontWeight="bold"
          >
            Professional Certifications
          </Heading>

          <SimpleGrid columns={{ base: 1, md: 2, lg: 2, xl: 3 }} spacing={10}>
            {certificates.map((certificate) => (
              <Card
                key={certificate.id}
                maxW="sm"
                bg="dark.800"
                boxShadow="xl"
                border="1px"
                borderColor="dark.700"
                transition="all 0.3s ease"
                _hover={{
                  transform: "translateY(-5px)",
                  borderColor: "brand.500",
                  shadow: "2xl",
                }}
                height="100%"
              >
                <CardBody p={6}>
                  <VStack spacing={4} align="center">
                    <Box
                      position="relative"
                      width="100%"
                      height="200px"
                      overflow="hidden"
                      borderRadius="md"
                    >
                      <Image
                        src={certificate.imageUrl}
                        alt={certificate.title}
                        objectFit="cover"
                        width="100%"
                        height="100%"
                        border="2px"
                        borderColor="brand.500"
                      />
                    </Box>

                    <Box textAlign="center" width="100%">
                      <Heading size="md" color="brand.300">
                        {certificate.title}
                      </Heading>
                      <Text mt={2} color="dark.300">
                        {certificate.issuer}
                      </Text>
                      <Text mt={1} color="dark.400" fontSize="sm">
                        {certificate.date}
                      </Text>
                    </Box>
                  </VStack>
                </CardBody>
              </Card>
            ))}
          </SimpleGrid>
        </Container>

        {/* Back to Home Button */}
        <Container maxW="container.xl" py={8} textAlign="center">
          <a href="#about">
            <Button variant="brand" size="lg" px={8}>
              Back to Home
            </Button>
          </a>
        </Container>
      </Box>
    </>
  );
};

export default CertificatesPage;
