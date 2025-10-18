'use client';

'use client';

import { Box, Heading, SimpleGrid, Card, CardBody, Image, Stack, Text, Badge } from '@chakra-ui/react';

const Projects = () => {
  // Sample project data - this would be replaced with real project data once available
  const projects = [
    {
      id: 1,
      title: "Sales Data Warehouse",
      description: "Built a star-schema data warehouse and automated ETL pipeline for sales analytics, centralizing data from multiple systems to support business intelligence initiatives and reporting.",
      imageUrl: "/images/project-ecommerce.jpg",
      technologies: ["SQL Server", "SSIS", "T-SQL", "Data Modeling"]
    },
    {
      id: 2,
      title: "Examination System Database",
      description: "Designed and implemented a relational database for managing exam data using SQL Server, with comprehensive data modeling and integrity constraints to ensure data accuracy.",
      imageUrl: "/images/project-task.jpg",
      technologies: ["SQL Server", "T-SQL", "Database Design", "Data Modeling"]
    },
    {
      id: 3,
      title: "Customer Segmentation",
      description: "Applied K-Means clustering to segment customers by income and spending behavior, providing actionable insights for targeted marketing strategies and personalized customer experiences.",
      imageUrl: "/images/project-weather.jpg",
      technologies: ["Python", "Pandas", "Scikit-learn", "Matplotlib"]
    },
    {
      id: 4,
      title: "Market Basket Analysis",
      description: "Discovered purchasing patterns using Apriori and FP-Growth algorithms to improve product placement and cross-selling strategies, resulting in actionable insights for retail optimization.",
      imageUrl: "/images/project-analytics.jpg",
      technologies: ["Python", "Pandas", "Scikit-learn", "NumPy"]
    },
    {
      id: 5,
      title: "Sales Dashboard",
      description: "Designed an interactive Tableau dashboard to visualize KPIs and sales trends, providing stakeholders with real-time insights for strategic decision-making and performance monitoring.",
      imageUrl: "/images/project-fitness.jpg",
      technologies: ["Tableau", "Data Visualization", "Business Intelligence", "Excel"]
    },
    {
      id: 6,
      title: "Sales Data Mart",
      description: "Developed a data mart tailored to sales performance analysis, optimizing query speed and data accessibility to support the sales team's reporting and analytical needs.",
      imageUrl: "/images/project-recipe.jpg",
      technologies: ["SQL Server", "T-SQL", "Data Warehousing", "Performance Optimization"]
    }
  ];

  return (
    <Box 
      id="projects"
      mb={12}
    >
      <Heading 
        as="h2" 
        size="xl" 
        mb={8} 
        textAlign="center"
        bgGradient="linear(to-r, brand.400, brand.200)"
        bgClip="text"
        fontWeight="bold"
      >
        Projects
      </Heading>
      
      <SimpleGrid 
        columns={{ base: 1, md: 2, lg: 3 }} 
        spacing={8}
      >
        {projects.map((project) => (
          <Card 
            key={project.id} 
            maxW="sm" 
            bg="dark.800"
            boxShadow="xl"
            border="1px"
            borderColor="dark.700"
            transition="all 0.3s ease"
            _hover={{ 
              transform: "translateY(-5px)", 
              borderColor: "brand.500",
              shadow: "2xl"
            }}
          >
            <Image
              src={project.imageUrl}
              alt={project.title}
              borderRadius="md"
              borderTopRadius="xl"
              h="200px"
              objectFit="cover"
            />
            <CardBody>
              <Stack mt="6" spacing="3">
                <Heading size="md" color="brand.300">{project.title}</Heading>
                <Text color="dark.200">{project.description}</Text>
                
                <Box mt={4}>
                  {project.technologies.map((tech, index) => (
                    <Badge 
                      key={index} 
                      colorScheme="brand" 
                      mr={2} 
                      mb={2}
                      variant="outline"
                      borderColor="brand.500"
                      color="brand.300"
                    >
                      {tech}
                    </Badge>
                  ))}
                </Box>
              </Stack>
            </CardBody>
          </Card>
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default Projects;