import React from "react";
import Heading from "./Heading";
import Entry from "./Entry";
import emojipedia from "../emojipedia";

function App() {
  return (
    <div>
      <Heading />
      <Entry title={emojipedia[0].name} detail={emojipedia[0].meaning} />
    </div>
  );
}

export default App;
