import { Controller } from "react-hook-form";
import TextArea from "../../../../components/TextArea";
import RegisterValidationError from "../components/RegisterValidationError";

function Step4({ control, errors, goBack }) {
  return (
    <>
      <h2 className="text-center mb-4 italic font-bold text-black">
        Your ideas about relationships.
      </h2>
      <div className="flex flex-col items-center gap-2">
        <label className="text-center">
          What type of relationship is most valuable to you? (For example, an
          adventurous partner, a calming bond, a relationship based on strong
          communication, etc.)
        </label>
        <Controller
          name="registerRelationshipQ1"
          control={control}
          render={({ field }) => <TextArea {...field} />}
        />
      </div>
      <div className="flex flex-col items-center gap-2">
        <label>
          If you could describe your ideal day, what would it look like?
        </label>
        <Controller
          name="registerRelationshipQ2"
          control={control}
          render={({ field }) => <TextArea {...field} />}
        />
      </div>
      <div className="flex flex-col items-center gap-2">
        <label htmlFor="">
          If you could live in any country for a year, where would it be, and
          why?
        </label>
        <Controller
          name="registerRelationshipQ3"
          control={control}
          render={({ field }) => <TextArea {...field} />}
        />
        <label htmlFor="">
          If you could live in any country for a year, where would it be, and
          why?
        </label>
        <Controller
          name="registerRelationshipQ4"
          control={control}
          render={({ field }) => <TextArea {...field} />}
        />
      </div>
      <div className="flex gap-8 items-center mt-4 w-full justify-center ">
        <button
          onClick={goBack}
          className="w-4 h-4 rounded-full bg-red-300 flex items-center justify-center p-4 hover:bg-red-400 transition-all delay-75 "
          type="button"
        >
          &larr;
        </button>
        <button
          className=" bg-red-300 px-8 py-2 rounded-lg text-white font-bold hover:bg-red-100 hover:text-black transition-all delay-75"
          type="submit"
        >
          Complete
        </button>
      </div>
      <RegisterValidationError>
        {errors.registerRelationshipQ1?.message ||
          errors.registerRelationshipQ2?.message ||
          errors.registerRelationshipQ3?.message ||
          errors.registerRelationshipQ4?.message}
      </RegisterValidationError>
    </>
  );
}

export default Step4;
