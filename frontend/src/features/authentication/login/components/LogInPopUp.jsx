import { useOutsideClick } from "../../../../hooks/useOutsideClick";
import { useApp } from "../../../../hooks/useApp";
import { useNavigate } from "react-router-dom";
import { useForm, Controller } from "react-hook-form";
import { useLoginUser } from "../services/authService";
import Button from "./../../../../components//Button";
import InputElement from "./../../../../components/InputElement";
import LoadingSpinner from "../../../../components/LoadingSpinner";
function LogInPopUp() {
  const { handleSubmit, control } = useForm();
  const { setIsLoginPopUpOpen } = useApp();
  const navigate = useNavigate();
  useOutsideClick(setIsLoginPopUpOpen);

  const { mutate, isLoading, isError, error } = useLoginUser();

  const onSubmit = (data) => {
    mutate(data);
  };
  return (
    <div className=" fixed top-0 bottom-0 left-0 right-0 flex flex-col items-center justify-center z-[100]   inset-0 backdrop-blur-sm bg-opacity-50 ">
      <form
        className="shadow-2xl bg-rose-50 px-12 pb-10 pt-4 rounded-md flex flex-col items-center relative popup gap-4"
        onSubmit={handleSubmit(onSubmit)}
      >
        <button
          className="absolute right-4 text-black text-xl"
          onClick={() => setIsLoginPopUpOpen((curr) => !curr)}
          type="button"
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
          <Controller
            name="loginEmail"
            control={control}
            render={({ field }) => <InputElement {...field} />}
          />
        </div>
        <div className="grid grid-cols-[80px,350px] items-center gap-4 mb-2">
          <label htmlFor="" className="text-black">
            Password:
          </label>
          <Controller
            name="loginPassword"
            control={control}
            render={({ field }) => <InputElement type="password" {...field} />}
          />
        </div>
        <a
          href="#"
          className=" border-b-2  border-black text-black hover:border-transparent transition-all delay-75 mb-4 text-sm"
          onClick={() => navigate("/register")}
        >
          You don't have an account?
        </a>
        {isLoading ? <LoadingSpinner /> : <Button type="submit">Login</Button>}
        {isError && (
          <p className="text-red-600 font-bold">
            {error.response.data.result}!
          </p>
        )}
      </form>
    </div>
  );
}

export default LogInPopUp;
