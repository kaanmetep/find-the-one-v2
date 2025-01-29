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
    <div className="flex flex-col h-svh pt-8  text-white font-bold pb-8 main object-top   ">
      <div className="flex justify-between px-8 items-center h-12 flex-col md:flex-row gap-4 ">
        <Button onClick={() => setIsLoginPopUpOpen((curr) => !curr)}>
          Log in
        </Button>
        <HomeNav />
      </div>
      <div className="flex flex-col items-center pt-40 relative">
        <h2 className="font-roboto md:tracking-widest mb-2 text-xs md:text-base text-center px-1">
          Where you meet the one who’s right for you
        </h2>
        <div className=" font-fontHeading text-4xl sm:text-5xl md:text-6xl tracking-tight  w-full  flex items-center justify-center  ">
          <h1 className="w-[80%] md:w-[45%] text-center leading-snug ">
            AI-Powered matchmaking to find{" "}
            <span className="bg-gradient-to-r from-white to-red-100 text-black px-3 rounded-md ">
              true love
            </span>
          </h1>
        </div>

        <div className="mt-12 flex justify-center items-center gap-8 ">
          <Button bgcolor="bg-white" onClick={() => navigate("/register")}>
            <p className="uppercase">Create Account</p>
          </Button>
          <div className="bg-gradient-to-r from-red-50 to-red-100 px-6 py-2 rounded-lg text-black">
            <NavItem to="howitworks" className={"hover:text-slate-700"}>
              Learn more
            </NavItem>
          </div>
        </div>
      </div>

      {isLoginPopUpOpen && <LogInPopUp />}
    </div>
  );
}

export default Heading;
