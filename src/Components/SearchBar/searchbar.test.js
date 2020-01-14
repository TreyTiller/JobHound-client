import React from "react";
import ReactDOM from "react-dom";
import SearchBar from "./SearchBar";
import { MemoryRouter } from "react-router-dom";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <MemoryRouter>
      <SearchBar />
    </MemoryRouter>,
    div
  );

  ReactDOM.unmountComponentAtNode(div);
});