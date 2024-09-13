import React from "react";

const Card = (props) => {
  return (
    <div className="w-[400px] md:w-1/2 md:gap-11 h-[325px] bg-white shadow-lg text-black rounded-xl flex items-center justify-center text-center p-4">
      <div className="p-7 border border-black rounded-xl flex items-center justify-center flex-col gap-5 text-center h-[100%]">
        {" "}
        <h1 className="md:text-4xl text-3xl font-semibold">
          {props.randomquote.quote}
        </h1>
        <h3 className="font-medium text-lg md:text-lg">
          - {props.randomquote.author}
        </h3>
      </div>
    </div>
  );
};

export default Card;
