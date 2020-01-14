import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { MemoryRouter } from "react-router-dom";

describe(`Main App Component`, () => {
  it("renders the App component without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(
      <MemoryRouter>
        <App/>
      </MemoryRouter>,
      div
    );

    ReactDOM.unmountComponentAtNode(div);
  });
});
