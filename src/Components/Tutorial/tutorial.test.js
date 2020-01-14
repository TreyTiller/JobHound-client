import React from "react";
import ReactDOM from "react-dom";
import Tutorial from "./Tutorial";
import { MemoryRouter } from "react-router-dom";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <MemoryRouter>
      <Tutorial />
    </MemoryRouter>,
    div
  );

  ReactDOM.unmountComponentAtNode(div);
});