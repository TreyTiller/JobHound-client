import React from "react";
import ReactDOM from "react-dom";
import { MemoryRouter } from "react-router-dom";
import LoginForm from "../Login-Form/Login-Form";

describe(`LoginForm component`, () => {
  it("renders the complete form without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(
      <MemoryRouter>
        <LoginForm />
      </MemoryRouter>,
      div
    );

    ReactDOM.unmountComponentAtNode(div);
  });
});
