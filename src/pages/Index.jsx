import { Container, Text, VStack, Heading, Box, Image, Link, Button, useColorModeValue } from "@chakra-ui/react";
import { FaTwitter, FaGithub, FaLinkedin, FaTrash } from "react-icons/fa";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const navigate = useNavigate();
  const [posts, setPosts] = useState([
    { id: 1, title: "First Post", content: "This is the first post." },
    { id: 2, title: "Second Post", content: "This is the second post." },
    // Add more posts as needed
  ]);

  const deletePost = (id) => {
    setPosts(posts.filter(post => post.id !== id));
  };

  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center" bg={useColorModeValue("white", "gray.800")}>
      <VStack spacing={4}>
        <Heading as="h1" size="2xl">Welcome to My Blog</Heading>
        <Box boxSize="sm">
          <Image src="/images/profile.jpg" alt="Profile Picture" borderRadius="full" boxSize="150px" />
        </Box>
        <Text fontSize="lg" textAlign="center">
          Hi, I'm [Your Name], a passionate writer and tech enthusiast. Follow my journey as I share insights on technology, programming, and life.
        </Text>
        <VStack spacing={4} width="100%">
          {posts.map(post => (
            <Box key={post.id} p={4} borderWidth="1px" borderRadius="lg" width="100%">
              <Heading as="h2" size="md">{post.title}</Heading>
              <Text mt={2}>{post.content}</Text>
              <Button leftIcon={<FaTrash />} colorScheme="red" variant="outline" mt={4} onClick={() => deletePost(post.id)}>
                Delete
              </Button>
            </Box>
          ))}
        </VStack>
        <VStack spacing={2} mt={4}>
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