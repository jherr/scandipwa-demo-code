import ComponentFactory from "./ComponentFactory";

const factory = new ComponentFactory();
const BeverageComponent = factory.getBeverageComponent();

function App() {
  return (
    <div className="App">
      <h1>Stuff above</h1>
      <BeverageComponent />
      <h1>Stuff below</h1>
    </div>
  );
}

export default App;
