
import { Box, RadioGroup, Stack, Radio } from "@chakra-ui/react";

const Sidebar = ({ sortBy, setSortBy }) => {
  return (
    <Box mb={4}>
      <RadioGroup onChange={setSortBy} value={sortBy}>
        <Stack direction="row">
          <Radio value="">Default</Radio>
          <Radio value="asc">Price Low to High</Radio>
          <Radio value="desc">Price High to Low</Radio>
        </Stack>
      </RadioGroup>
    </Box>
  );
};

export default Sidebar;
