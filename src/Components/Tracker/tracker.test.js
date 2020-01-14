import React from "react";
import ReactDOM from "react-dom";
import Tracker from "./Tracker";
import { MemoryRouter } from "react-router-dom";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <MemoryRouter>
      <Tracker />
    </MemoryRouter>,
    div
  );

  ReactDOM.unmountComponentAtNode(div);
});