import React, { useState } from "react";

const App = () => {
  const [selectedByUser1, setSelectedByUser1] = useState("");
  const [selectedByUser2, setSelectedByUser2] = useState("");
  const [result, setResult] = useState("");
  const [showResult, setShowResult] = useState(false);
  const handleChoosenItem = (item: string) => {
    if (!selectedByUser1) {
      setSelectedByUser1(item);
    } else {
      setSelectedByUser2(item);
    }
  };

  const handleResult = () => {
    setShowResult(true);
    if (selectedByUser1 === selectedByUser2) {
      setResult("Draw!");
    } else if (
      (selectedByUser1 === "Stone" && selectedByUser2 === "Scissor") ||
      (selectedByUser1 === "Paper" && selectedByUser2 === "Stone") ||
      (selectedByUser1 === "Scissor" && selectedByUser2 === "Paper")
    ) {
      setResult("User1 wins the match");
    } else if (
      (selectedByUser2 === "Stone" && selectedByUser1 === "Scissor") ||
      (selectedByUser2 === "Paper" && selectedByUser1 === "Stone") ||
      (selectedByUser2 === "Scissor" && selectedByUser1 === "Paper")
    ) {
      setResult("User2 wins the match");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center">
      {!selectedByUser2 && (
        <div>
          <button
            className="px-4 bg-blue-500 m-8"
            onClick={() => handleChoosenItem("Stone")}
          >
            Stone
          </button>
          <button
            className="px-4 bg-blue-500 m-8"
            onClick={() => handleChoosenItem("Paper")}
          >
            Paper
          </button>
          <button
            className="px-4 bg-blue-500 m-8"
            onClick={() => handleChoosenItem("Scissor")}
          >
            Scissor
          </button>
        </div>
      )}
      <p className="px-4  m-8">
        User1 selected: <span className="text-blue-500">{selectedByUser1}</span>
      </p>
      <p className="px-4  m-8">
        User2 selected: <span className="text-blue-500">{selectedByUser2}</span>
      </p>

      {selectedByUser2 && (
        <button
          className="px-4 bg-blue-500 m-2 rounded-lg p-2"
          onClick={() => handleResult()}
        >
          Result
        </button>
      )}
      {selectedByUser2 && (
        <button
          className="px-4 bg-blue-500 rounded-lg p-2 "
          onClick={() => {
            setSelectedByUser1("");
            setSelectedByUser2("");
            setShowResult(false);
          }}
        >
          New Game
        </button>
      )}
      <br />
      <br />
      <div>{showResult && result}</div>
    </div>
  );
};

export default App;
