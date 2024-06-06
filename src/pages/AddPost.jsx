import React, { useState } from 'react';
import { Container, VStack, Heading, Input, Textarea, Button, Image, useToast, useColorModeValue } from "@chakra-ui/react";

const AddPost = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [image, setImage] = useState(null);
  const toast = useToast();

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = () => {
    if (!title || !content) {
      toast({
        title: "Error",
        description: "Title and content are required.",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
      return;
    }

    const newPost = {
      title,
      content,
      image,
    };

    console.log("New Post:", newPost);
    toast({
      title: "Success",
      description: "Post added successfully.",
      status: "success",
      duration: 5000,
      isClosable: true,
    });

    setTitle('');
    setContent('');
    setImage(null);
  };

  return (
    <Container centerContent maxW="container.md" py={8} bg={useColorModeValue("white", "gray.800")}>
      <VStack spacing={4} width="100%">
        <Heading as="h1" size="xl">Add New Post</Heading>
        <Input
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <Textarea
          placeholder="Content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <Input
          type="file"
          accept="image/*"
          onChange={handleImageUpload}
        />
        {image && <Image src={image} alt="Uploaded Image" boxSize="200px" />}
        <Button colorScheme="teal" onClick={handleSubmit}>Submit</Button>
      </VStack>
    </Container>
  );
};

export default AddPost;