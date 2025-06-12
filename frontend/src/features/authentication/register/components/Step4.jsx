import { Controller } from "react-hook-form";
import TextArea from "@components/TextArea";
import RegisterValidationError from "../components/RegisterValidationError";
import { questionsPersonal } from "@config";

function Step4({ control, errors }) {
  const multipleChoiceQuestions = questionsPersonal.filter(
    (question) => question.options
  );
  const openEndedQuestion = questionsPersonal.find(
    (question) => question.openEndedQuestion
  );
  return (
    <>
      <h2 className="text-center  italic font-bold text-black">
        Just to know you better.
      </h2>
      <p className="text-gray-500 text-sm mb-4 text-center">
        Do not refresh the page before you complete all the steps.
      </p>

      <div className="space-y-6">
        {multipleChoiceQuestions.map((question, i) => (
          <div
            className="bg-white p-6 border border-gray-200 rounded-lg shadow-sm"
            key={question.id}
          >
            <label className="block text-lg font-semibold text-gray-800 mb-4">
              {question.question}
            </label>
            <Controller
              name={`personelQ${i + 1}`}
              control={control}
              render={({ field }) => (
                <div className="grid grid-cols-1 gap-3">
                  {question?.options?.map((option, index) => (
                    <label
                      key={index}
                      className={`flex items-center p-4 rounded-md cursor-pointer transition-all duration-200 
                     ${
                       field.value === option
                         ? "bg-red-50 border border-red-300"
                         : "bg-white border border-gray-200 hover:border-red-200"
                     }`}
                    >
                      <div
                        className={`w-5 h-5 flex items-center justify-center rounded-full border ${
                          field.value === option
                            ? "border-red-600"
                            : "border-gray-400"
                        }`}
                      >
                        {field.value === option && (
                          <div className="w-3 h-3 rounded-full bg-red-600"></div>
                        )}
                      </div>
                      <input
                        type="radio"
                        value={option}
                        checked={field.value === option}
                        onChange={() => field.onChange(option)}
                        className="sr-only"
                      />
                      <span className="ml-3 text-gray-800 font-medium">
                        {option}
                      </span>
                    </label>
                  ))}
                </div>
              )}
            />
          </div>
        ))}

        <div className="bg-white p-6 border border-gray-200 rounded-lg shadow-sm">
          <label className="block text-lg font-semibold text-gray-800 mb-4">
            {openEndedQuestion.openEndedQuestion}
          </label>
          <Controller
            name="personelQ7"
            control={control}
            render={({ field }) => (
              <div className="relative">
                <TextArea {...field} />
                <div className="absolute bottom-3 right-3 text-xs text-gray-400">
                  {field.value?.length || 0}/100
                </div>
              </div>
            )}
          />
          <p className="mt-2 text-xs text-gray-500 text-center">
            Your response helps us understand what makes you unique
          </p>
        </div>
      </div>

      <RegisterValidationError>
        {errors.personelQ1?.message ||
          errors.personelQ2?.message ||
          errors.personelQ3?.message ||
          errors.personelQ4?.message ||
          errors.personelQ5?.message ||
          errors.personelQ6?.message ||
          errors.personelQ7?.message}
      </RegisterValidationError>
    </>
  );
}

export default Step4;
