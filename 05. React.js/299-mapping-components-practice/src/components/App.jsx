import React from "react";
import Entry from "./Entry";
import emojiPedia from "../emojipedia";

function emojiCard(emojis) {
  return (
    <Entry
      key={emojis.id}
      emojiPic={emojis.emoji}
      emojiName={emojis.name}
      emojiMeaning={emojis.meaning}
    />
  );
}

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>

      <dl className="dictionary">{emojiPedia.map(emojiCard)}</dl>
    </div>
  );
}

export default App;
