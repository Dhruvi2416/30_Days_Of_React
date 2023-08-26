import React, { useState } from "react";

const TextFile = (props) => {
  const [text, setText] = useState("");
  const [word, setWord] = useState("");
  const [wordFound, setWordFound] = useState(false);
  //if word matches then it says matched
  const handleFind = () => {
    console.log();
    if (text.includes(word)) {
      setWordFound("Found");
    } else {
      setWordFound("Not Found");
    }
    setTimeout(()=>setWordFound(false),2000)
  };
  //copies text
  const handleCopy =()=>{
    navigator.clipboard.writeText(text)
  }
 
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
      <div className="d-flex flex-wrap justify-content-center">
        <button
          className="btn btn-primary mt-2 mx-1  sm:my-4 mx-2 lg:m-3"
          onClick={() => setText(text.toUpperCase())}
        >
          Convert to Uppercase
        </button>
        <button
          className="btn btn-primary mt-2 mx-1  sm:my-4 mx-2 lg:m-3"
          onClick={() => setText(text.toLowerCase())}
        >
          {" "}
          Convert to Lowercase
        </button>
        <button
          className="btn btn-primary  mt-2 mx-1  sm:my-4 mx-2 lg:m-3"
          onClick={() => handleCopy()}
        >
          Copy Text
        </button>
        <button
          className="btn btn-primary mt-2 mx-1  sm:my-4  mx-2 lg:m-3 "
          onClick={() => setText("")}
        >
          Clear Text
        </button>
       <div className="d-flex">
        <input
          className="mt-2 mx-1  sm:my-4 mx-2 lg:m-3"
          placeholder="Find word"
          onChange={(e) => setWord(e.target.value)}
          value={word}
        ></input>
        <button className="btn btn-primary mt-2 mx-1  sm:my-4 mx-2 lg:m-3 " onClick={() => handleFind()}>
          Word Found?{" "}
        </button></div>
      </div>
      <div>
        <h3 className="mt-2">Your text summary</h3>
        {text.split("").length > 0 ? text.trim().split(" ").length : 0} words{" "}
        {text.split("").length} characters
      </div>
      Time read: {(text.split("").length > 0 ?(0.4/60) * text.split(" ").length:0.00).toFixed(2)} Minutes read
      <h2 className="mt-5 text-primary text-opacity-50">Preview</h2>
      {text}
    </div>
  );
};

export default TextFile;
