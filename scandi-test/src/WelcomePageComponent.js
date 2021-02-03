import { Component } from "react";

/** @namespace scandi-test/WelcomePageComponent */
export class WelcomePageComponent extends Component {
  renderHello() {
    return "Hello - default value";
  }

  render() {
    return (
      <main className="WelcomePage">
        <h1>Stuff above</h1>
        <p>{this.renderHello()}</p>
        <h1>Stuff below</h1>
      </main>
    );
  }
}

export default WelcomePageComponent;
