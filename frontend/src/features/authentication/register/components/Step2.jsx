import { useState } from "react";
import { Controller } from "react-hook-form";
import InputElement from "../../../../components/InputElement";
import RegisterValidationError from "../components/RegisterValidationError";

function Step2({ control, errors, goForward, goBack, register }) {
  const [inputType, setInputType] = useState("text");
  return (
    <>
      <h2 className="text-center mb-4 italic font-bold text-black">
        Let's get the important details first.
      </h2>
      <Controller
        name="registerName"
        control={control}
        render={({ field }) => (
          <InputElement placeholder="Name" pl={20} py={6} {...field} />
        )}
      />
      <Controller
        name="registerBirthdayDate"
        control={control}
        render={({ field }) => (
          <input
            type={inputType}
            placeholder="Birthday Date"
            onFocus={() => setInputType("date")}
            onBlur={() => setInputType("text")}
            style={{ padding: "8px", fontSize: "16px" }}
            className={`shadow-lg border-2 border-rose-200 px-2 pl-5 rounded-md py-1 placeholder:text-sm w-72 md:focus:w-[320px]
                      transition-all duration-300 focus:outline-none
                      focus:ring
                      focus:ring-rose-200
                      focus:ring-opacity-50 text-black`}
            {...field}
          />
        )}
      />

      <select
        className={`shadow-lg border-2 border-rose-200 px-2 pl-5 rounded-md py-1 placeholder:text-sm w-72 md:focus:w-[320px]
                transition-all duration-300 focus:outline-none
                focus:ring
                focus:ring-rose-200
                focus:ring-opacity-50 text-black`}
        required
        {...register("registerGender")}
      >
        <option value="" disabled selected>
          Gender
        </option>
        <option value="man">Man</option>
        <option value="woman">Woman</option>
      </select>
      <select
        className={`shadow-lg border-2 border-rose-200 px-2 pl-5 rounded-md py-1 placeholder:text-sm w-72 md:focus:w-[320px]
                transition-all duration-300 focus:outline-none
                focus:ring
                focus:ring-rose-200
                focus:ring-opacity-50 text-black`}
        required
        {...register("registerInterestedGender")}
      >
        <option value="" disabled selected>
          Interested Gender
        </option>
        <option value="man">Man</option>
        <option value="woman">Woman</option>
      </select>
      <div className=" flex gap-2 items-center mt-4 justify-between w-full">
        <button
          onClick={goBack}
          className="w-4 h-4 rounded-full bg-red-300 flex items-center justify-center p-4 hover:bg-red-400 transition-all delay-75"
          type="button"
        >
          &larr;
        </button>
        <button
          className="ml-auto bg-red-300 px-5 py-2 rounded-lg text-white font-bold hover:bg-red-100 hover:text-black transition-all delay-75"
          onClick={goForward}
          type="button"
        >
          Continue &rarr;
        </button>
      </div>
      <RegisterValidationError>
        {errors.registerName?.message ||
          errors.registerBirthdayDate?.message ||
          errors.registerGender?.message ||
          errors.registerInterestedGender?.message}
      </RegisterValidationError>
    </>
  );
}

export default Step2;
