import { useOutsideClick } from "@hooks/useOutsideClick";
import { useApp } from "@hooks/useApp";
import { useNavigate } from "react-router-dom";
import { useForm, Controller } from "react-hook-form";
import { useLoginUser } from "../services/authService";
import Button from "@components//Button";
import InputElement from "@components/InputElement";
import LoadingSpinner from "@components/LoadingSpinner";

function LogInPopUp() {
  const { handleSubmit, control } = useForm();
  const { setIsLoginPopUpOpen } = useApp();
  useOutsideClick(setIsLoginPopUpOpen);
  const navigate = useNavigate();
  const {
    mutate: login,
    isPending: isLoggingIn,
    isError: isLoginError,
    error: loginError,
  } = useLoginUser();

  const onSubmit = (data) => {
    login(data);
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/40 backdrop-blur-sm z-50">
      <form
        className="flex  items-center justify-center bg-gradient-to-br from-rose-50 to-rose-100 rounded-lg shadow-2xl w-full max-w-md mx-4 relative overflow-hidden transition-all duration-300 transform hover:scale-[1.02] popup"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="h-1 bg-gradient-to-r from-rose-400 to-rose-600"></div>

        <div className="px-8 py-6">
          <button
            className="absolute right-4 top-4 w-8 h-8 flex items-center justify-center rounded-full 
                     text-gray-600 hover:bg-rose-200 hover:text-gray-800 transition-colors duration-200"
            onClick={() => setIsLoginPopUpOpen((curr) => !curr)}
            type="button"
          >
            ✕
          </button>

          <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
            Welcome Back
          </h2>

          <div className="flex justify-center mb-8">
            <img
              src="minilogo.png"
              alt="logo"
              className="w-32 filter brightness-0 transition-all duration-300 hover:brightness-90"
            />
          </div>

          <div className="space-y-6">
            <div className="space-y-2">
              <label
                htmlFor="loginEmail"
                className="block text-sm font-medium text-gray-700"
              >
                Email Address
              </label>
              <Controller
                name="loginEmail"
                control={control}
                render={({ field }) => (
                  <InputElement
                    pl={16}
                    py={6}
                    {...field}
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 
                             focus:ring-rose-400 focus:border-transparent transition-all duration-200"
                    placeholder="E-mail"
                  />
                )}
              />
            </div>

            <div className="space-y-2">
              <label
                htmlFor="loginPassword"
                className="block text-sm font-medium text-gray-700"
              >
                Password
              </label>
              <Controller
                name="loginPassword"
                control={control}
                render={({ field }) => (
                  <InputElement
                    pl={16}
                    py={6}
                    type="password"
                    {...field}
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 
                             focus:ring-rose-400 focus:border-transparent transition-all duration-200"
                    placeholder="Password"
                  />
                )}
              />
            </div>

            <div className="flex flex-col items-center gap-4">
              <button
                className="text-sm text-gray-600 hover:text-gray-800 hover:underline transition-colors duration-200"
                onClick={() => navigate("/register")}
                type="button"
              >
                You don't have an account?
              </button>

              {isLoggingIn ? (
                <LoadingSpinner className="w-8 h-8 text-rose-500" />
              ) : (
                <Button
                  type="submit"
                  className="w-full py-2 px-4 bg-gradient-to-r from-rose-400 to-rose-600 text-white 
                           rounded-lg hover:from-rose-500 hover:to-rose-700 transition-all duration-300 
                           transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-rose-400 
                           focus:ring-offset-2"
                >
                  Login
                </Button>
              )}
            </div>

            {isLoginError && (
              <p className="text-center text-red-500 font-medium italic ">
                {loginError.response.data.result}
              </p>
            )}
          </div>
        </div>
      </form>
    </div>
  );
}

export default LogInPopUp;
