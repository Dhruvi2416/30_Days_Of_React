import React, { useState } from "react";

const TextFile = (props) => {
  const [text, setText] = useState("");
  const [word, setWord] = useState("");
  const [wordFound, setWordFound] = useState(false);
  const handleFind = () => {
    console.log();
    if (text.includes(word)) {
      setWordFound("Found");
    } else {
      setWordFound("Not Found");
    }
    setTimeout(()=>setWordFound(false),2000)
  };
  console.log(text.includes(word));
  return (
    <div className="container pt-5 d-flex flex-column justify-content-center">
      <h1 className="d-flex justify-content-center">{props.title}</h1>
      <h2 className="d-flex justify-content-center text-danger">
        {wordFound && wordFound}
      </h2>
      <textarea
        rows="8"
        cols="78"
        value={text}
        onChange={(e) => setText(e.target.value)}
      ></textarea>
      <div className="d-flex justify-content-center">
        <button
          className="btn btn-primary mr-3 my-2"
          onClick={() => setText(text.toUpperCase())}
        >
          Convert to Uppercase
        </button>
        <button
          className="btn btn-primary m-3 my-2"
          onClick={() => setText(text.toLowerCase())}
        >
          {" "}
          Convert to Lowercase
        </button>
        <button
          className="btn btn-primary mr-5 my-2"
          onClick={() => setText("")}
        >
          Clear Text
        </button>
      </div>
      <div className="d-flex justify-content-center">
        <input
          className="my-4"
          placeholder="Find word"
          onChange={(e) => setWord(e.target.value)}
          value={word}
        ></input>
        <button className="btn btn-primary m-3 " onClick={() => handleFind()}>
          Word Found?{" "}
        </button>
      </div>
      <div>
        <h3 className="mt-2">Your text summary</h3>
        {text.split("").length > 0 ? text.split(/\s+/).length : 0} words{" "}
        {text.split("").length} characters
      </div>
      Time read: {((0.4/60) * text.split(" ").length).toFixed(2)} Minutes read
      <h2 className="mt-5 text-primary text-opacity-50">Preview</h2>
      {text}
    </div>
  );
};

export default TextFile;
