import { useOutsideClick } from "../hooks/useOutsideClick";
import { useApp } from "../hooks/useApp";
import Button from "./Button";
import InputElement from "./InputElement";
function LogInPopUp() {
  const { setIsLoginPopUpOpen } = useApp();
  useOutsideClick(setIsLoginPopUpOpen);
  return (
    <div className=" fixed top-0 bottom-0 left-0 right-0 flex flex-col items-center justify-center z-[100]   inset-0 backdrop-blur-sm bg-opacity-50 ">
      <div className="shadow-2xl bg-rose-50 px-12 pb-10 pt-4 rounded-md flex flex-col items-center relative popup gap-4">
        <button
          className="absolute right-4 text-black text-xl"
          onClick={() => setIsLoginPopUpOpen((curr) => !curr)}
        >
          X
        </button>
        <h2 className="text-black text-bold text-xl uppercase tracking-widest">
          Log In
        </h2>
        <img
          src="minilogo.png"
          alt="logo"
          className="w-48 filter brightness-0"
        />
        <div className="grid grid-cols-[80px,350px] items-center gap-4">
          <label htmlFor="" className="text-black">
            E-mail:
          </label>
          <InputElement />
        </div>
        <div className="grid grid-cols-[80px,350px] items-center gap-4 mb-2">
          <label htmlFor="" className="text-black">
            Password:
          </label>
          <InputElement />
        </div>
        <a href="#" className="text-black mb-4 border-b-2 border-black text-sm">
          Do you already have an account?
        </a>
        <Button>Login</Button>
      </div>
    </div>
  );
}

export default LogInPopUp;
