import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { Box, useColorModeValue } from "@chakra-ui/react";
import Index from "./pages/Index.jsx";
import AddPost from "./pages/AddPost.jsx";

function App() {
  const bgColor = useColorModeValue("white", "gray.800");
  return (
    <Box bg={bgColor} minH="100vh">
      <Router>
        <Routes>
          <Route exact path="/" element={<Index />} />
          <Route path="/add-post" element={<AddPost />} />
        </Routes>
      </Router>
    </Box>
  );
}

export default App;
