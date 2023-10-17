import React from "react";
import ReactDOM from "react-dom/client";

// React Element

const elem = <span>React Element </span>

// React Element
const Title = (
  <h1 className="head" tabIndex="5" id="heading">
    {elem}
    Namaste React using JSX{" "}
  </h1>
);
// Component composition

const HeadingComponent = () => (
  <div id="container">
    <h2>{Title}</h2>
    <h1>Namaste React Functional Component</h1>;
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent />);
