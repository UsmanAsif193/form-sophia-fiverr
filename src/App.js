import React, { useState } from "react";
import { send } from "emailjs-com";

const App = () => {
  const [hover, setHover] = useState(false);
  const [inputChange, setInputChange] = useState(false);
  const [handleChange, setHandleChange] = useState({
    message: "",
  });
  const growers = document.querySelectorAll(".grow-wrap");

  growers.forEach((grower) => {
    const textarea = grower.querySelector("textarea");
    textarea.addEventListener("input", () => {
      grower.dataset.replicatedValue = textarea.value;
    });
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    send(
      "service_kcf046u",
      "template_q01ytzi",
      handleChange,
      "user_OJzKyKBJi1x8SjZD8sQSQ"
    )
      .then((response) => {
        console.log("SUCCESS!", response.status, response.text);
        setHandleChange({ message: "" });
      })
      .catch((err) => {
        console.log("FAILED...", err);
      });
  };
  const handleChangeSubmit = (e) => {
    console.log(e.target.value);
    if (e.target.value === "") setInputChange(false);
    else {
      setHandleChange({ ...handleChange, [e.target.name]: e.target.value });
      setInputChange(true);
    }
  };
  console.log(handleChange.message);
  return (
    <div className="bg-black h-screen flex items-center justify-center">
      <div
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(inputChange)}
        className="w-3/4 sm:w-1/2 xl:w-[40%] 2xl:w-1/3 flex jusitfy-center items-center"
      >
        <div className="flex jusitfy-center items-center">
          <div
            className={`flex items-center justify-center z-10 absolute h-[255px] w-3/4 sm:w-1/2 xl:w-[40%] 2xl:w-1/3 ${
              hover && ""
            }`}
          >
            <div className="m-[-3px]">
              <img
                src="/logo1.svg"
                className={`h-16 md:h-24 mt-24 rotate-180 ${
                  hover && "image-rotate image-1"
                }`}
                alt=""
              />
            </div>
            <div className="m-[-3px]">
              <img
                src="/logo2.svg"
                className={`h-16 md:h-24 mb-24 rotate-180 ${
                  hover && "image-rotate image-2"
                }`}
                alt=""
              />
            </div>
          </div>
        </div>
        {hover && (
          <form
            onSubmit={handleSubmit}
            className="w-[85%] sm:w-1/2 xl:w-[40%] absolute 2xl:w-1/3 z-10 grow-wrap"
          >
            <textarea
              className="form-control text-white block text-center w-full px-3 py-1.5 text-base font-normal bg-transparent bg-clip-padding rounded
                      transition ease-in-out m-0 focus:outline-none textarea__ "
              rows="10"
              name="message"
              autoFocus
              onChange={handleChangeSubmit}
            ></textarea>
            <button
              type="submit"
              value="submit"
              className="font-[Glsnecb] font-light text-5xl m-auto flex text-white bg-black rounded z-20 px-3 py-1 md:px-6 md:py-3"
            >
              release thoughform
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default App;
