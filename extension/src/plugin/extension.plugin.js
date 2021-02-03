import { Button, Heading } from "@chakra-ui/react";

export default {
  "growlers/filter": {
    function: (beverages) => {
      return beverages[0]
        .filter(({ producerName }) => producerName === "Boneyard")
        .slice(0, 5);
    },
  },
  "growlers/Header": {
    function: () => (
      <Heading as="h2" size="xl">
        Happy Value Growlers Header
      </Heading>
    ),
  },
  "growlers/TapList": {
    "member-function": {
      renderAddToCart: () => <Button colorScheme="orange">Add To Cart</Button>,
    },
  },
};
