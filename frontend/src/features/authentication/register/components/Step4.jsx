import { Controller } from "react-hook-form";
import TextArea from "@components/TextArea";
import RegisterValidationError from "../components/RegisterValidationError";
import { questionsPersonel } from "@config";
function Step4({ control, errors }) {
  return (
    <>
      <h2 className="text-center italic font-bold text-black">
        Just to know you better.
      </h2>
      <p className="text-gray-500 text-sm mb-4">
        Do not refresh the page before you complete all the steps.
      </p>
      <label className="question-label">{questionsPersonel.question1}</label>
      <Controller
        name="personelQ1"
        control={control}
        render={({ field }) => <TextArea {...field} />}
      />
      <label className="question-label">{questionsPersonel.question2}</label>
      <Controller
        name="personelQ2"
        control={control}
        render={({ field }) => <TextArea {...field} />}
      />
      <label className="question-label">{questionsPersonel.question3}</label>
      <Controller
        name="personelQ3"
        control={control}
        render={({ field }) => <TextArea {...field} />}
      />
      <label className="question-label">{questionsPersonel.question4}</label>
      <Controller
        name="personelQ4"
        control={control}
        render={({ field }) => <TextArea {...field} />}
      />

      <RegisterValidationError>
        {errors.personelQ1?.message ||
          errors.personelQ2?.message ||
          errors.personelQ3?.message ||
          errors.personelQ4?.message}
      </RegisterValidationError>
    </>
  );
}

export default Step4;
