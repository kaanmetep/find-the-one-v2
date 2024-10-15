import { useState } from "react";
import { useApp } from "../hooks/useApp";
import LogInPopUp from "./LogInPopUp";
import Button from "./Button";
import HomeNav from "./HomeNav";
import Logo from "./Logo";
function Heading() {
  const { isLoginPopUpOpen, setIsLoginPopUpOpen } = useApp();
  return (
    <div className="flex flex-col h-svh pt-8  text-white bg-gradient-to-l from-black to-stone-700 font-bold pb-8">
      <div className="flex justify-between px-8 items-center h-12 flex-col md:flex-row gap-4">
        <Button onClick={() => setIsLoginPopUpOpen((curr) => !curr)}>
          Log in
        </Button>
        <HomeNav />
      </div>
      <div className="flex flex-col items-center pt-40 relative">
        <h1 className=" font-fontHeading text-[40px] md:text-[100px] md:tracking-wider bg-gradient-to-r from-stone-700 to-stone-800 w-full text-center">
          find <span className=" px-2 ml-1 rounded-md">the one</span>
        </h1>
        <div className="flex items-center  justify-center mt-4">
          <h2 className="font-roboto text-sm md:text-[20px] md:tracking-wide lowercase">
            Where You Meet the One Who’s Right for You
          </h2>
          <img
            src="square-heart.svg"
            alt="heart"
            className="block w-4 filter invert brightness-0"
          />
        </div>
        <div className="mt-12 flex justify-center flex-col items-center ">
          <Button bgcolor="bg-white">
            <p className="uppercase">Create Account</p>
          </Button>
        </div>
      </div>
      <div className="  border-b-2 border-white hover:border-transparent transition-all delay-[50ms] mt-auto flex items-center justify-center gap-2 mx-auto">
        <a href="">Learn more &darr;</a>
        <img
          src="square-heart.svg"
          alt="heart"
          className="w-4 filter invert brightness-0"
        />
      </div>
      {isLoginPopUpOpen && <LogInPopUp />}
    </div>
  );
}

export default Heading;
