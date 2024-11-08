import { Controller } from "react-hook-form";
import InputElement from "../../../../components/InputElement";
import RegisterValidationError from "../components/RegisterValidationError";

const Step1 = ({ control, errors, goForward }) => {
  return (
    <>
      <h2 className="text-center mb-4 italic font-bold text-black">
        Registration consists of 4 steps. You must fill out all steps
        completely.
      </h2>
      <Controller
        name="registerEmail"
        control={control}
        render={({ field }) => (
          <InputElement placeholder="E-mail" pl={20} py={6} {...field} />
        )}
      />
      <Controller
        name="registerPassword"
        control={control}
        render={({ field }) => (
          <InputElement placeholder="Password" pl={20} py={6} {...field} />
        )}
      />
      <Controller
        name="registerRePassword"
        control={control}
        render={({ field }) => (
          <InputElement
            placeholder="Re-enter your password"
            pl={20}
            py={6}
            {...field}
          />
        )}
      />
      <button
        className="ml-auto mt-4 bg-red-300 px-5 py-2 rounded-lg text-white font-bold hover:bg-red-100 hover:text-black transition-all delay-75"
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
