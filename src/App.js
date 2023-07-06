import { useState } from "react";
import "./index.css";

function App() {
  let numbers = [1, 4, 767, 54, 98, 23435, 467, 32, 6];

  const [content, setContent] = useState(() =>
    numbers.filter((item) => item < 100)
  );

  let fruits = [
    "banana",
    "strawberries",
    "cherries",
    "apples",
    "pears",
    "oranges",
  ];

  const [addFruits, setAddFruits] = useState(() =>
    fruits.filter((fruit) => fruit !== "strawberries")
  );

  return (
    <div className="App">
      {content.map((showNumber) => (
        <h3>{showNumber}</h3>
      ))}

      {addFruits.map((fruit) => (
        <h1>{fruit}</h1>
      ))}
    </div>
  );
}

export default App;
