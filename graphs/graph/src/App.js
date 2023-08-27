import React, { useEffect, useLayoutEffect, useState } from "react";
import { Stage, Layer, Rect, Text, Line, Circle } from "react-konva";

const App = () => {
  const radius = 40;
  const [nodes, setNodes] = useState(5);
  const [lines, setLines] = useState([]);
  let lineArr = [];
  const [points, setPoints] = useState([]);
  let arr = [];
  let x1, y1;
  // let points = [];
  const handleNodes = (e) => {
    setNodes(e.target.value);
    let points = [];
    for (let i = 0; i < e.target.value; i++) {
      //100 -20
      x1 = Math.random() * (window.innerWidth - 2 * radius) + radius;
      y1 = Math.random() * (window.innerHeight - 2 * radius) + radius;
      let subPoints = {};

      subPoints.x = x1;
      subPoints.y = y1;
      points.push(subPoints);
    }
    setPoints(points);
  };
  return (
    <div>
      <div>
        Enter nodes:
        <input onChange={(e) => handleNodes(e)} />
      </div>

      <div>
        Enter nodes:
        <textarea
          onChange={(e) => {
            let words = e.target.value;
            if (words[words.length - 1] != " ") {
              let values = e.target.value;
              values = values.split(" ");

              let lineNodes = {};
              for (let i = 0; i < values.length; i++) {
                if (i % 2 == 0) {
                  lineNodes.startNode = values[i];
                } else {
                  lineNodes.endNode = values[i];

                  lineArr.push({ ...lineNodes });
                }
              }
              setLines(lineArr);
            }
          }}
        />
      </div>
      <Stage width={window.innerWidth} height={window.innerHeight}>
        <Layer>
          {points.map((point) => (
            <Circle
              x={point.x}
              y={point.y}
              radius={radius}
              fill="orange"
              text="blah"
              strokeWidth={1} // border width
              stroke="black"
            />
          ))}
          {lines.map((nodes) => {
            return (
              <Line
                points={[
                  points[nodes.startNode].x,
                  points[nodes.startNode].y,
                  points[nodes.endNode].x,
                  points[nodes.endNode].y,
                ]}
                stroke="black"
                strokeWidth={1}
              />
            );
          })}

          {arr}
          {points.map((point, index) => (
            <Text
              key={index}
              fontSize={22}
              x={point.x - 6}
              y={point.y - 6}
              text={index}
              stroke="black"
              strokeWidth={0.5}
            />
          ))}
        </Layer>
      </Stage>
    </div>
  );
};

export default App;
