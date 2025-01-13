import { Controller } from "react-hook-form";
import InputElement from "../../../../components/InputElement";
import RegisterValidationError from "../components/RegisterValidationError";
import { Mail, KeyRound } from "lucide-react";
const Step1 = ({ control, errors, goForward }) => {
  return (
    <>
      <h2 className="text-center  italic font-bold text-black px-4">
        Registration consists of 4 steps. You must fill out all steps
        completely.
      </h2>
      <p className="text-gray-500 text-sm mb-4">
        Do not refresh the page before you complete all the steps.
      </p>
      <Controller
        name="registerEmail"
        control={control}
        render={({ field }) => (
          <div className="flex relative">
            <Mail className="absolute left-3 top-1/2 -translate-y-1/2" />
            <InputElement placeholder="E-mail" pl={40} py={6} {...field} />
          </div>
        )}
      />
      <Controller
        name="registerPassword"
        control={control}
        render={({ field }) => (
          <div className="flex relative">
            <KeyRound className="absolute left-3 top-1/2 -translate-y-1/2" />
            <InputElement
              placeholder="Password"
              pl={40}
              py={6}
              type="password"
              {...field}
            />
          </div>
        )}
      />
      <Controller
        name="registerRePassword"
        control={control}
        render={({ field }) => (
          <div className="flex relative">
            <KeyRound className="absolute left-3 top-1/2 -translate-y-1/2" />
            <InputElement
              placeholder="Re-Enter Password"
              pl={40}
              py={6}
              type="password"
              {...field}
            />
          </div>
        )}
      />
      <button
        className="ml-auto mt-4 bg-red-300 px-5 mr-2 py-2 rounded-lg text-white font-bold hover:bg-red-100 hover:text-black transition-all delay-75"
        onClick={goForward}
        type="button"
      >
        Continue &rarr;
      </button>
      <RegisterValidationError>
        {errors.registerEmail?.message ||
          errors.registerPassword?.message ||
          errors.registerRePassword?.message}
      </RegisterValidationError>
    </>
  );
};

export default Step1;
