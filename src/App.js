import React, { useState, useEffect } from "react";
import { send } from "emailjs-com";

const App = () => {
  const [hover, setHover] = useState(false);
  const [textHover, setTextHover] = useState(false);
  const [inputChange, setInputChange] = useState(false);
  const [handleChange, setHandleChange] = useState({
    message: "",
  });
  const [messageSent, setMessageSent] = useState(0);
  const growers = document.querySelectorAll(".grow-wrap");

  growers.forEach((grower) => {
    const textarea = grower.querySelector("textarea");
    textarea.addEventListener("input", () => {
      grower.dataset.replicatedValue = textarea.value;
    });
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputChange)
      send(
        "service_irs8e63",
        "template_xbqd1po",
        handleChange,
        "rmPdz9wNX0xaijLfZ"
      )
        .then((response) => {
          console.log("SUCCESS!", response.status, response.text);
          setHandleChange({ message: "" });
          setInputChange(false);
          setMessageSent(1);
        })
        .catch((err) => {
          console.log("FAILED...", err);
          setMessageSent(2);
        });
  };
  const handleChangeSubmit = (e) => {
    if (e.target.value === "") setInputChange(false);
    else {
      setHandleChange({ ...handleChange, [e.target.name]: e.target.value });
      setInputChange(true);
    }
  };
  useEffect(() => {
    if (hover)
      setTimeout(() => {
        setTextHover(true);
      }, 1400);
    else setTextHover(false);
  }, [hover]);

  return (
    <div className="bg-black h-screen flex items-center justify-center">
      <div
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => {
          setHover(inputChange);
          hover && setMessageSent(0);
        }}
        className="w-3/4 sm:w-1/2 xl:w-[40%] 2xl:w-1/3 flex jusitfy-center items-center"
      >
        <div className="flex jusitfy-center items-center">
          <div
            className={`flex items-center justify-center z-10 absolute h-[255px] w-3/4 sm:w-1/2 xl:w-[40%] 2xl:w-1/3 ${
              hover && ""
            }`}
          >
            <div className="md:m-[-4px]">
              <img
                src="/logo1.svg"
                className={`h-16 md:h-24 mt-[3.5rem] md:mt-24 rotate-180 ${
                  hover && "image-rotate image-1"
                }`}
                alt=""
              />
            </div>
            <div className="md:m-[-4px]  md:ml-[-11px] ">
              <img
                src="/logo2.svg"
                className={`h-16 md:h-24 mb-[4.5rem] rotate-180 ${
                  hover && "image-rotate image-2"
                }`}
                alt=""
              />
            </div>
          </div>
        </div>
        <form
          onSubmit={handleSubmit}
          className="w-[85%] break-all sm:w-1/2 xl:w-[40%] absolute 2xl:w-1/3 z-10"
        >
          {textHover && hover && (
            <>
              <textarea
                className="form-control overflow-hidden resize-none text-white block text-center w-full px-3 py-1.5 text-base font-normal bg-transparent bg-clip-padding rounded
                      transition ease-in-out m-0 focus:outline-none textarea__ "
                rows="10"
                name="message"
                disabled={messageSent === 2 || messageSent === 1 ? true : false}
                autoFocus
                onChange={handleChangeSubmit}
                value={!inputChange ? "" : handleChange.message}
              ></textarea>
              {messageSent === 0 ? (
                <button
                  type="submit"
                  value="submit"
                  className="font-[Glsnecb] transition duration-700 ease-in-out font-light text-2xl md:text-5xl m-auto flex text-white bg-black rounded z-20 px-3 py-1 md:px-6 md:py-3"
                >
                  release thoughtform
                </button>
              ) : messageSent === 1 ? (
                <button
                  type="submit"
                  value="submit"
                  disabled
                  className="font-[Glsnecb] transition duration-700 ease-in-out font-light text-2xl md:text-5xl m-auto flex text-white bg-black rounded z-20 px-3 py-1 md:px-6 md:py-3"
                >
                  thoughtform sent
                </button>
              ) : (
                messageSent === 2 && (
                  <button
                    type="submit"
                    value="submit"
                    disabled
                    className="font-[Glsnecb] transition duration-700 ease-in-out font-light text-2xl md:text-5xl m-auto flex text-white bg-black rounded z-20 px-3 py-1 md:px-6 md:py-3"
                  >
                    thoughtform failed
                  </button>
                )
              )}
            </>
          )}
        </form>
      </div>
      <div></div>
    </div>
  );
};

export default App;
