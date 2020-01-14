import React from "react";
import ReactDOM from "react-dom";
import SideBar from "./Sidebar";
import { MemoryRouter } from "react-router-dom";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <MemoryRouter>
      <SideBar />
    </MemoryRouter>,
    div
  );

  ReactDOM.unmountComponentAtNode(div);
});