import "./styles.css";

import React, { useState } from "react";

const emojiDictionary = {
  "😷": "corona mask",
  "😔": "sad",
  "❤️": "love",
  "😊": "Smiling",
  "😑": "annoyance",
  "😳": "disbelief",
  "😉": "Winking face",
  "😇": "Smiling Face with Halo",
  "😛": "Face with Tongue",
  "😋": "Face Savoring Food"
};

var emojis = Object.keys(emojiDictionary);
export default function App() {
  const [meaning, setMeaning] = useState("");
  function emojiInputHandler(event) {
    var userInput = event.target.value;
    var meaning = emojiDictionary[userInput];

    if (meaning === undefined) {
      meaning = "This is not in our dataBase";
    }
    setMeaning(meaning);
  }
  function clickHandler(emoji) {
    var meaning = emojiDictionary[emoji];
    setMeaning(meaning);
  }

  return (
    <div className="App">
      <h1> Emoji meter </h1>

      <input onChange={emojiInputHandler} />
      <h2>{meaning}</h2>
      <h3>Emoji's in Our DataBase</h3>
      {emojis.map(function (emoji) {
        return (
          <span
            onClick={() => clickHandler(emoji)}
            style={{ fontSize: "2rem", padding: "1rem", cursor: "pointer" }}
          >
            {emoji}
          </span>
        );
      })}
    </div>
  );
}
