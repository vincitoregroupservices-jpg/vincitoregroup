import React from "react";
import Button from "../Button/Button";

const Form = () => {
  return (
    <form className="flex flex-col gap-3 w-full max-w-[500px] m-auto">
      <input
        type="text"
        className="text-xl bg-gold-lighter w-full py-3 rounded-sm px-5 placeholder:text-gold-dark text-black-2 outline-none"
        placeholder="Your Name"
      />

      <div className="text-xl bg-gold-lighter h-[50px] flex items-center gap-0 rounded-sm ">
        <span className="pl-5 text-black-2">+91</span>
        <input
          type="text"
          className="bg-gold-lighter h-full w-full px-3 py-3 placeholder:text-gold-dark text-black-2 outline-none"
          placeholder="Mobile Number"
        />
      </div>

      <textarea
        className=" min-h-[240px] text-xl bg-gold-lighter px-5 py-2 placeholder:text-gold-dark text-black-2 outline-none w-full h-[150px] resize-y rounded-sm"
        placeholder="Message..."
      ></textarea>

      <div className="flex flex-col items-start">
        <Button text="Submit" className="w-[140px] text-sm py-3 mb-2" />
        <p className="text-[10px] text-black-3">
          *By submitting you agree on our Terms and Conditions
        </p>
      </div>
    </form>
  );
};

export default Form;
