import { useState } from "react";

const Input = (props) => {
  const [input, getInput] = useState("");

  const changeHandler = (e) => {
    getInput(e.target.value);
    e.target.value='';
  };
  const submitHandler = (e) => {
    e.preventDefault();
    props.getInput(input);
  };
  return (
    <>
      <h2 className="">IP Address Tracker</h2>
      <form type="submit" onSubmit={submitHandler} className="">
      
        <input
          value={input}
          placeholder="Search for any IP address or domain"
          onChange={changeHandler}
          className="w-[300px] px-2 h-10 outline-none font-light rounded-md border-2 border-black"
        />
        <button className="w-[30px] h-10 -ml-[30px] pl-2 border-l-2 border-black">
          <svg xmlns="http://www.w3.org/2000/svg" width="11" height="14">
            <path fill="none" stroke="#000" strokeWidth="3" d="M2 1l6 6-6 6" />
          </svg>
        </button>
      
      </form>
    </>
  );
};
export default Input;
