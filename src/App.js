import React, { useState } from "react";
import "./index.css";

const App = () => {
  const [hover, setHover] = useState(false);
  const HandleForm = () => {};

  return (
    <div
      className={`image-container ${hover && "image-container-hover"}`}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <img
        className={`image-1 ${hover && "image-1-hover"}`}
        src="logo1.svg"
        alt=""
      />
      <img
        className={`image-2 ${hover && "image-2-hover"}`}
        src="logo2.svg"
        alt=""
      />

      {/* Form Starts from Here */}
      {hover && (
        <form action="" className="form">
          <textarea
            className="text-area"
            id="form"
            name="form"
            rows="20"
            cols="50"
          >
            At w3schools.com you will learn how to make a website.
          </textarea>
          <button>Send Message</button>
        </form>
      )}
    </div>
  );
};

export default App;
