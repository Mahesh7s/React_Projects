import { Box, Container, Heading } from "@chakra-ui/react";
import { useState } from "react";
import Sidebar from "./components/Sidebar";
import CoffeeList from "./components/CoffeeList";

const App = () => {
  const [sortBy, setSortBy] = useState("");

  return (
    <Container maxW="container.xl" p={4}>
      <Heading mb={4}>☕ Coffee List App</Heading>
      <Sidebar sortBy={sortBy} setSortBy={setSortBy} />
      <CoffeeList sortBy={sortBy} />
    </Container>
  );
};

export default App;
