import React from "react";
import { bgImage } from "../utils/Constants";
import lang from "../utils/langConstant";
import { useSelector } from "react-redux";

const GptSearchBar = () => {
  const languageKey = useSelector((store=>store.language.lang))
  
  return (
    <div
      className="flex justify-center"
      onClick={(e) => {
        e.preventDefault();
      }}
    >
    <img src={bgImage} alt="" />
      <form className="bg-black p-8 w-[520px] absolute m-[20%]">
        <div>
          <input
            className="p-2 w-72 focus:outline-none"
            type="text"
            placeholder={lang[languageKey].gptSearchPlaceholder}
          />
          <button className="bg-red-700 p-2.5 w-36 text-white mx-2">{lang[languageKey].search}</button>
        </div>
      </form>
    </div>
  );
};

export default GptSearchBar;
