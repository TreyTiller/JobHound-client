import React from "react";
import ReactDOM from "react-dom";
import TrackerForm from "./TrackerForm";
import { MemoryRouter } from "react-router-dom";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <MemoryRouter>
      <TrackerForm />
    </MemoryRouter>,
    div
  );

  ReactDOM.unmountComponentAtNode(div);
});