import { useNavigate } from "react-router-dom";
import { useApp } from "../hooks/useApp";
import LogInPopUp from "../features/authentication/login/components/LogInPopUp";
import Button from "./Button";
import HomeNav from "./HomeNav";
import NavItem from "./NavItem";
function Heading() {
  const { isLoginPopUpOpen, setIsLoginPopUpOpen } = useApp();
  const navigate = useNavigate();
  return (
    <div className="flex flex-col h-svh pt-8  text-white font-bold pb-8 main  ">
      <div className="flex justify-between px-8 items-center h-12 flex-col md:flex-row gap-4 ">
        <Button onClick={() => setIsLoginPopUpOpen((curr) => !curr)}>
          Log in
        </Button>
        <HomeNav />
      </div>
      <div className="flex flex-col items-center pt-40 relative">
        <div className=" font-fontHeading text-2xl sm:text-4xl md:text-5xl tracking-tight  w-full  flex items-center justify-center ">
          <h1 className="w-[45%] text-center leading-snug">
            AI-Powered matchmaking to find true love
          </h1>
        </div>
        <h2 className="font-roboto md:tracking-wide text-xl mt-6 text-center px-1">
          Where you meet the one who’s right for you
        </h2>
        <div className="mt-4 flex justify-center flex-col items-center ">
          <Button bgcolor="bg-white" onClick={() => navigate("/register")}>
            <p className="uppercase">Create Account</p>
          </Button>
        </div>
      </div>
      <div className="  border-b-2 border-rose-300 hover:border-transparent transition-all delay-[50ms] mt-auto flex items-center justify-center gap-2 mx-auto">
        <NavItem to="howitworks">Learn more &darr;</NavItem>
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
