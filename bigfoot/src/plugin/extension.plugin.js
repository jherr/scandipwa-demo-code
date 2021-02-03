import { Button, Heading } from "@chakra-ui/react";

export default {
  "growlers/filter": {
    function: (beverages) => {
      return beverages[0].slice(0, 5);
    },
  },
  "growlers/Header": {
    function: () => (
      <Heading as="h2" size="xl">
        Bigfoot Growlers Header
      </Heading>
    ),
  },
  "growlers/TapList": {
    "member-function": {
      renderAddToCart: () => (
        <Button colorScheme="orange">Add This Cart</Button>
      ),
    },
  },
};
