import React, { useState } from "react";
import Dropdown from "./Dropdown";
import Convert from "./Convert";
const options = [
  { label: "English", value: "en" },
  { label: "Arabic", value: "ar" },
  { label: "Hindi", value: "hi" },
];
const Translate = () => {
  const [language, setLanguage] = useState("en");
  const [text, setText] = useState("");

  return (
    <div>
      <div className="ui form">
        <div className="field">
          <label className="label">Enter</label>
          <input
            className="input"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </div>
      </div>
      <Dropdown
        label="Choose a language"
        onSelectedChange={setLanguage}
        selected={language}
        options={options}
      />
      <hr />
      <h3 className="ui header">Output</h3>
      <Convert text={text} language={language} />
    </div>
  );
};
export default Translate;
