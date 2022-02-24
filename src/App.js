import React, { useState } from "react";
import { send } from "emailjs-com";

const App = () => {
  const [hover, setHover] = useState(false);
  const [inputChange, setInputChange] = useState(false);
  const [handleChange, setHandleChange] = useState({
    message: "",
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
  return (
    <div className="bg-black h-screen flex items-center justify-center">
      <div
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(inputChange)}
        className="w-1/4 sm:w-[20%] xl:w-[40%] 2xl:w-1/3 flex jusitfy-center items-center"
      >
        <div className="flex jusitfy-center items-center">
          <div
            className={`flex items-center justify-center w-full z-10 absolute w-auto h-[255px] xl:w-[40%] 2xl:w-1/3 ${
              hover && ""
            }`}
          >
            <div>
              <img
                src="/logo1.svg"
                className={`h-16 md:h-24 mt-24 rotate-180 ${
                  hover && "image-rotate image-1"
                }`}
                alt=""
              />
            </div>
            <div>
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
            className="xl:w-[40%] absolute 2xl:w-1/3 z-10"
          >
            <textarea
              className="form-control text-white block text-center w-full resize-none px-3 py-1.5 text-base font-normal bg-transparent bg-clip-padding border border-solid border-white rounded
                      transition ease-in-out m-0 focus:outline-none textarea__"
              rows="10"
              name="message"
              value={handleChange.message}
              onChange={handleChangeSubmit}
            ></textarea>
            <button
              type="submit"
              value="submit"
              className="right-0 bottom-0 absolute text-white bg-black border border-solid border-white rounded z-20 px-3 py-1 md:px-6 md:py-3"
            >
              Send Message
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default App;
