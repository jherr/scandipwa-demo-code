import { ChakraProvider, Heading } from "@chakra-ui/react";

import ComponentFactory, { SomeFunction } from "./ComponentFactory";

const factory = new ComponentFactory();
const BeverageComponent = factory.getBeverageComponent();

function App() {
  return (
    <ChakraProvider>
      <Heading as="h2" size="xl">
        Stuff above
      </Heading>
      <div>{SomeFunction()}</div>
      <BeverageComponent />
      <Heading as="h2" size="xl">
        Stuff below
      </Heading>
    </ChakraProvider>
  );
}

export default App;
