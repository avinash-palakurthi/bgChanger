import { useState } from "react";

import "./App.css";

function App() {
  const [color, setColor] = useState("lightslategrey");

  return (
    <div
      className="w-full h-screen flex flex-col"
      style={{ backgroundColor: color }}
    >
      <h1 className="text-center text-3xl">BG CHANGER</h1>
      <div className="flex inset-x-0 flex-wrap justify-center bottom-12 fixed px-2  ">
        <div className="text-xl flex flex-wrap justify-center gap-3 shadow-lg bg-white px-4 py-4 rounded-3xl">
          <button
            onClick={() => setColor("seagreen")}
            className="outline-none  px-4 rounded-2xl "
            style={{ backgroundColor: "seagreen" }}
          >
            Seagreen
          </button>

          <button
            onClick={() => setColor("tomato")}
            className="outline-none  px-4   rounded-2xl"
            style={{ backgroundColor: "tomato" }}
          >
            Tomato
          </button>
          <button
            onClick={() => setColor("teal")}
            className="outline-none  px-4  rounded-2xl"
            style={{ backgroundColor: "teal" }}
          >
            Teal
          </button>
          <button
            onClick={() => setColor("lightblue")}
            className="outline-none  px-4  rounded-2xl"
            style={{ backgroundColor: "lightblue" }}
          >
            Lightblue
          </button>
          <button
            onClick={() => setColor("lightseagreen")}
            className="outline-none  px-4  rounded-2xl"
            style={{ backgroundColor: "lightseagreen" }}
          >
            Lightseagreen
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
