import { Controller } from "react-hook-form";
import TextArea from "../../../../components/TextArea";
import RegisterValidationError from "../components/RegisterValidationError";
import { questionsPersonel } from "../../../../../config";
function Step3({ control, errors }) {
  return (
    <>
      <h2 className="text-center mb-4 italic font-bold text-black">
        Just to know you better.
      </h2>
      <label className="text-center">{questionsPersonel.question1}</label>
      <Controller
        name="registerPersonelQ1"
        control={control}
        render={({ field }) => <TextArea {...field} />}
      />
      <label className="text-center">{questionsPersonel.question2}</label>
      <Controller
        name="registerPersonelQ2"
        control={control}
        render={({ field }) => <TextArea {...field} />}
      />
      <label className="text-center">{questionsPersonel.question3}</label>
      <Controller
        name="registerPersonelQ3"
        control={control}
        render={({ field }) => <TextArea {...field} />}
      />
      <label className="text-center">{questionsPersonel.question4}</label>
      <Controller
        name="registerPersonelQ4"
        control={control}
        render={({ field }) => <TextArea {...field} />}
      />

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
