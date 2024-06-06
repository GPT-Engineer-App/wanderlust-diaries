import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { Box } from "@chakra-ui/react";
import Index from "./pages/Index.jsx";
import AddPost from "./pages/AddPost.jsx";

function App() {
  return (
    <Box bg={useColorModeValue("white", "gray.800")} minH="100vh">
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
