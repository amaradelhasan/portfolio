'use client';

import { Box, Heading, SimpleGrid, Badge, VStack } from '@chakra-ui/react';

const Skills = () => {
  const technicalSkills = [
    { name: 'SQL (T-SQL)', level: 'Expert' },
    { name: 'Python (Pandas, NumPy, Matplotlib)', level: 'Expert' },
    { name: 'Power BI (Power Query, DAX)', level: 'Expert' },
    { name: 'Tableau', level: 'Advanced' },
    { name: 'Excel', level: 'Advanced' },
    { name: 'ETL Tools (SSIS, Python)', level: 'Advanced' },
    { name: 'Data Warehousing', level: 'Advanced' },
    { name: 'SQL Server', level: 'Advanced' },
    { name: 'Statistics', level: 'Advanced' },
    { name: 'Data Modeling', level: 'Advanced' },
    { name: 'Data Governance', level: 'Intermediate' },
    { name: 'SSAS/SSRS', level: 'Intermediate' },
  ];

  const tools = [
    'SQL Server', 'Power BI', 'Tableau', 'Python', 'Pandas', 'NumPy', 'Matplotlib', 
    'Plotly', 'Excel', 'Git', 'SSIS', 'SSAS', 'SSRS', 'Power Query', 'DAX'
  ];

  return (
    <Box 
      id="skills"
      mb={12}
      bg="dark.800" 
      borderRadius="xl" 
      p={8} 
      boxShadow="xl"
      border="1px"
      borderColor="dark.700"
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
        Skills & Tools
      </Heading>
      
      <VStack spacing={8} align="stretch">
        <Box>
          <Heading as="h3" size="md" mb={4} color="brand.300">
            Technical Skills
          </Heading>
          <SimpleGrid columns={{ base: 2, md: 3, lg: 4 }} spacing={4}>
            {technicalSkills.map((skill, index) => (
              <Box 
                key={index} 
                p={4} 
                bg="dark.700" 
                borderRadius="md"
                border="1px"
                borderColor="dark.600"
                _hover={{ 
                  transform: "translateY(-5px)", 
                  shadow: "lg",
                  borderColor: "brand.500"
                }}
                transition="all 0.3s ease"
              >
                <Heading as="h4" size="sm" color="brand.300" mb={2}>
                  {skill.name}
                </Heading>
                <Badge colorScheme="brand">{skill.level}</Badge>
              </Box>
            ))}
          </SimpleGrid>
        </Box>

        <Box>
          <Heading as="h3" size="md" mb={4} color="brand.300">
            Tools & Technologies
          </Heading>
          <SimpleGrid columns={{ base: 2, md: 3, lg: 4 }} spacing={3}>
            {tools.map((tool, index) => (
              <Badge 
                key={index} 
                p={2} 
                variant="outline"
                colorScheme="brand"
                borderRadius="full"
                borderColor="brand.500"
                color="brand.300"
                _hover={{
                  bg: "brand.500",
                  color: "dark.900"
                }}
              >
                {tool}
              </Badge>
            ))}
          </SimpleGrid>
        </Box>
      </VStack>
    </Box>
  );
};

export default Skills;