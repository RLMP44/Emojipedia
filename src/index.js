import React from "react";
import ReactDom from "react-dom/client";
import App from "./components/App";
import("./index2");
import("./index3");

const root = ReactDom.createRoot(document.getElementById("root"));
root.render(<App />);
