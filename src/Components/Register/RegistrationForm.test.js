import React from "react";
import ReactDOM from "react-dom";
import Register from "./RegistrationForm";
import { MemoryRouter } from "react-router-dom";

describe(`Register component`, () => {
  it("renders the complete form without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(
      <MemoryRouter>
        <Register />
      </MemoryRouter>,
      div
    );

    ReactDOM.unmountComponentAtNode(div);
  });
});