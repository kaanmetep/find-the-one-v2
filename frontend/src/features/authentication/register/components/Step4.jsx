import { Controller } from "react-hook-form";
import TextArea from "../../../../components/TextArea";
import RegisterValidationError from "../components/RegisterValidationError";
import { questionsRelationship } from "../../../../../config";
function Step4({ control, errors }) {
  return (
    <>
      <h2 className="text-center  italic font-bold text-black">
        Your ideas about relationships.
      </h2>
      <p className="text-gray-500 text-sm mb-4">
        Do not refresh the page before you complete all the steps.
      </p>
      <div className="flex flex-col items-center gap-2">
        <label className="question-label">
          {questionsRelationship.question1}
        </label>
        <Controller
          name="registerRelationshipQ1"
          control={control}
          render={({ field }) => <TextArea {...field} />}
        />
      </div>
      <div className="flex flex-col items-center gap-2">
        <label className="question-label">
          {questionsRelationship.question2}
        </label>
        <Controller
          name="registerRelationshipQ2"
          control={control}
          render={({ field }) => <TextArea {...field} />}
        />
      </div>
      <div className="flex flex-col items-center gap-2">
        <label className="question-label">
          {questionsRelationship.question3}
        </label>
        <Controller
          name="registerRelationshipQ3"
          control={control}
          render={({ field }) => <TextArea {...field} />}
        />
        <label className="question-label">
          {questionsRelationship.question4}
        </label>
        <Controller
          name="registerRelationshipQ4"
          control={control}
          render={({ field }) => <TextArea {...field} />}
        />
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
