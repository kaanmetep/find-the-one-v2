import { Controller } from "react-hook-form";
import TextArea from "../../../../components/TextArea";
import RegisterValidationError from "../components/RegisterValidationError";

function Step3({ control, errors, goForward, goBack }) {
  return (
    <>
      <h2 className="text-center mb-4 italic font-bold text-black">
        Just to know you better.
      </h2>
      <label>Which genre of movies do you like?</label>
      <Controller
        name="registerPersonelQ1"
        control={control}
        render={({ field }) => <TextArea {...field} />}
      />
      <label>How do you usually spend your weekends?</label>
      <Controller
        name="registerPersonelQ2"
        control={control}
        render={({ field }) => <TextArea {...field} />}
      />
      <label>
        What is something you are passionate about that not many people know?
      </label>
      <Controller
        name="registerPersonelQ3"
        control={control}
        render={({ field }) => <TextArea {...field} />}
      />
      <label>
        What is something you are passionate about that not many people know?
      </label>
      <Controller
        name="registerPersonelQ4"
        control={control}
        render={({ field }) => <TextArea {...field} />}
      />
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
        {errors.registerPersonelQ1?.message ||
          errors.registerPersonelQ2?.message ||
          errors.registerPersonelQ3?.message ||
          errors.registerPersonelQ4?.message}
      </RegisterValidationError>
    </>
  );
}

export default Step3;
