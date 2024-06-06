import { Container, Text, VStack, Heading, Box, Image, Link, Button } from "@chakra-ui/react";
import { FaTwitter, FaGithub, FaLinkedin } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const navigate = useNavigate();

  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4}>
        <Heading as="h1" size="2xl">Welcome to My Blog</Heading>
        <Box boxSize="sm">
          <Image src="/images/profile.jpg" alt="Profile Picture" borderRadius="full" boxSize="150px" />
        </Box>
        <Text fontSize="lg" textAlign="center">
          Hi, I'm [Your Name], a passionate writer and tech enthusiast. Follow my journey as I share insights on technology, programming, and life.
        </Text>
        <VStack spacing={2}>
          <Link href="https://twitter.com" isExternal>
            <FaTwitter size="24px" />
          </Link>
          <Link href="https://github.com" isExternal>
            <FaGithub size="24px" />
          </Link>
          <Link href="https://linkedin.com" isExternal>
            <FaLinkedin size="24px" />
          </Link>
        </VStack>
        <Button colorScheme="teal" onClick={() => navigate('/add-post')}>Add New Post</Button>
      </VStack>
    </Container>
  );
};

export default Index;