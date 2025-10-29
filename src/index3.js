import React from "react";
import ReactDom from "react-dom/client";
import Console from "./components/Console";
import emojipedia from "./emojipedia";

// create new array that only has meaning text truncated to only 100 characters
const newArray = emojipedia.map(function (entry) {
  return entry.meaning.substring(0, 100);
});

const root = ReactDom.createRoot(document.getElementById("root"));
root.render(<Console print={newArray} />);
