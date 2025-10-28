import React from "react";
import Heading from "./Heading";
import Entry from "./Entry";
import emojipedia from "../emojipedia";

function App() {
  return (
    <div>
      <Heading />
      <div className="dictionary">
        {emojipedia.map((entry) => {
          return (
            <Entry
              emoji={entry.emoji}
              title={entry.name}
              detail={entry.meaning}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
