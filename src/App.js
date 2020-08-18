import React from "react";
import { render } from "react-dom";
import Pet from "./Pet";

const App = () => {
  return (
    <div>
      <h1>Adopt Me!</h1>
      <Pet name="luna" animal="Dog" breed="havanese"></Pet>
      <Pet name="Pepper" animal="bird" breed="Cockatiel"></Pet>
      <Pet name="Doink" animal="Cat" breed="Mix"></Pet>
    </div>
  );
};

render(<App />, document.getElementById("root"));
