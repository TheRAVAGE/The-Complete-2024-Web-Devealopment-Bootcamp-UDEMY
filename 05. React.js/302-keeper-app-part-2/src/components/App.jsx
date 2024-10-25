import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import notesInfo from "../notes";

// {
//   key: 1,
//   title: "Delegation",
//   content:
//     "Q. How many programmers does it take to change a light bulb? A. None – It’s a hardware problem",
// },

function App() {
  return (
    <div>
      <Header />
      {notesInfo.map((noteItem) => (
        <Note
          key={noteItem.id}
          title={noteItem.title}
          content={noteItem.content}
        />
      ))}

      <Footer />
    </div>
  );
}

export default App;
