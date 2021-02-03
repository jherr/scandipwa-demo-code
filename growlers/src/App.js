import { Component } from "react";
import {
  ChakraProvider,
  Heading,
  Box,
  Text,
  Grid,
  Image,
} from "@chakra-ui/react";

import beverages from "./hv-taplist.json";

/** @namespace growlers/Header */
export const Header = () => (
  <Heading as="h2" size="xl">
    Default Header
  </Heading>
);

/** @namespace growlers/Footer */
export const Footer = () => (
  <Heading as="h2" size="xl">
    Default Footer
  </Heading>
);

/** @namespace growlers/filter */
export const filter = (list) => list.slice(0, 10);

/** @namespace growlers/TapList */
class TapList extends Component {
  renderAddToCart() {
    return null;
  }

  render() {
    return (
      <div>
        {filter(beverages).map((bev, index) => (
          <Grid templateColumns="1fr 10fr" p="2" key={index}>
            <Image src={bev.logo} alt="Beverage logo" />
            <Box p="2">
              <Text size="2xl">
                <strong>{bev.producerName}</strong>: {bev.beverageName}
              </Text>
              {this.renderAddToCart(bev)}
            </Box>
          </Grid>
        ))}
      </div>
    );
  }
}

function App() {
  return (
    <ChakraProvider>
      <Box width="6xl" margin="auto">
        <Header />
        <TapList />
        <Footer />
      </Box>
    </ChakraProvider>
  );
}

export default App;
