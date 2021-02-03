import BeverageComponent from "../components/BeverageComponent";

export default {
  "scandi-test/ComponentFactory": {
    "member-function": {
      getBeverageComponent: () => BeverageComponent,
    },
  },
  "scandi-test/ComponentFactory/function": {
    function: () => <div>Hello There</div>,
  },
};
