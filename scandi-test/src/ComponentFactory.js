/** @namespace scandi-test/ComponentFactory */
export class ComponentFactory {
  getBeverageComponent() {
    return () => <div>Default Beverage</div>;
  }
}

export default ComponentFactory;
