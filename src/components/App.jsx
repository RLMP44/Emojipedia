import React from "react";
import Heading from "./Heading";
import Entry from "./Entry";
import emojipedia from "../emojipedia";

// function createEntry(entry) {
//   return (
//     <Entry
//       key={entry.id}
//       emoji={entry.emoji}
//       title={entry.name}
//       detail={entry.meaning}
//     />
//   );
// }

function App() {
  return (
    <div>
      <Heading />
      <dl className="dictionary">
        {emojipedia.map((entry) => (
          <Entry
            key={entry.id}
            emoji={entry.emoji}
            title={entry.name}
            detail={entry.meaning}
          />
        ))}
      </dl>
    </div>
  );
}

export default App;
