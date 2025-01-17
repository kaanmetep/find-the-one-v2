import { Controller } from "react-hook-form";
import TextArea from "../../../../components/TextArea";
import RegisterValidationError from "../components/RegisterValidationError";
import { questionsRelationship } from "../../../../../config";
function Step4({ control, errors }) {
  return (
    <>
      <h2 className="text-center mb-4 italic font-bold text-black">
        Your ideas about relationships.
      </h2>
      <div className="flex flex-col items-center gap-2">
        <label className="text-center">{questionsRelationship.question1}</label>
        <Controller
          name="registerRelationshipQ1"
          control={control}
          render={({ field }) => <TextArea {...field} />}
        />
      </div>
      <div className="flex flex-col items-center gap-2">
        <label className="text-center">{questionsRelationship.question2}</label>
        <Controller
          name="registerRelationshipQ2"
          control={control}
          render={({ field }) => <TextArea {...field} />}
        />
      </div>
      <div className="flex flex-col items-center gap-2">
        <label className="text-center">{questionsRelationship.question3}</label>
        <Controller
          name="registerRelationshipQ3"
          control={control}
          render={({ field }) => <TextArea {...field} />}
        />
        <label className="text-center">{questionsRelationship.question4}</label>
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
