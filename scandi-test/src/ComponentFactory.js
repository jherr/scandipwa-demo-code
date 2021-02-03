/** @namespace scandi-test/ComponentFactory/function */
export const SomeFunction = () => {
  return "Default SomeFunction";
};

/** @namespace scandi-test/ComponentFactory */
export class ComponentFactory {
  getBeverageComponent() {
    return () => <div>Default Beverage</div>;
  }
}

export default ComponentFactory;
