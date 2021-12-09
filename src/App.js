import React, { useState } from "react";
import "./styles.css";

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

const emojis = Object.keys(emojiDictionary);

export default function App() {
  const [emoji, setEmoji] = useState("");
  const [meaning, setMeaning] = useState("translation will appear here..");

  function changeHandler(event) {
    const inputEmoji = event.target.value;
    setEmoji(inputEmoji);

    if (inputEmoji in emojiDictionary) {
      setMeaning(emojiDictionary[inputEmoji]);
    } else {
      setMeaning("failure to recognise this emoji");
    }
  }

  function emojiClickHandler(inputEmoji) {
    setMeaning(emojiDictionary[inputEmoji]);
  }

  return (
    <div className="App">
      <h1>inside outttttt</h1>
      <input
        onChange={changeHandler}
        value={emoji}
        placeholder={"put an emoji here to know the meaning"}
        style={{
          padding: "1em",
          minWidth: "80%"
        }}
      />
      <h2> {emoji} </h2>
      <h3> {meaning} </h3>
      {emojis.map((emoji) => (
        <span
          onClick={() => emojiClickHandler(emoji)}
          style={{ fontSize: "2rem", padding: "0.5rem", cursor: "pointer" }}
        >
          {" "}
          {emoji}{" "}
        </span>
      ))}
    </div>
  );
}
