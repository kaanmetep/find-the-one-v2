import { Controller } from "react-hook-form";
import TextArea from "@components/TextArea";
import RegisterValidationError from "../components/RegisterValidationError";

function Step5({ control, errors }) {
  const questions = {
    question1: "How important is communication in a relationship to you?",
    question2: "What are your expectations about spending time together?",
    question3: "How do you prefer to resolve conflicts in a relationship?",
    question4: "What role should personal space play in a relationship?",
    question5:
      "What's your love language (how you prefer to receive affection)?",
    question6:
      "What are your views on trust and transparency in relationships?",
    question7:
      "What's one relationship value or principle that you consider non-negotiable?",
  };

  const optionsQ1 = [
    "Very important - I prefer open and frequent communication",
    "Important - Regular check-ins work well for me",
    "Moderate - Quality over quantity in conversations",
    "Minimal - I prefer actions over words",
  ];

  const optionsQ2 = [
    "Daily interaction and frequent dates",
    "Regular quality time with independence in between",
    "Balanced time together and apart",
    "More independent lifestyle with occasional togetherness",
  ];

  const optionsQ3 = [
    "Address issues immediately and directly",
    "Take time to process, then discuss calmly",
    "Seek compromise and middle ground",
    "Prefer to let minor issues resolve naturally",
  ];

  const optionsQ4 = [
    "Minimal - I prefer being together most of the time",
    "Moderate - Regular alone time is important",
    "Significant - I need substantial personal space",
    "Balanced - Togetherness with respect for independence",
  ];

  const optionsQ5 = [
    "Physical touch (hugs, holding hands, physical closeness)",
    "Words of affirmation (compliments, hearing 'I love you')",
    "Acts of service (helpful actions, practical support)",
    "Quality time (focused attention, shared activities)",
    "Receiving gifts (thoughtful presents, tokens of affection)",
  ];

  const optionsQ6 = [
    "Complete transparency in all aspects of life",
    "Open communication with some personal boundaries",
    "Trust with privacy in certain areas",
    "Independence with mutual respect and trust",
  ];

  return (
    <>
      <h2 className="text-center italic font-bold text-black">
        Your ideas about relationships.
      </h2>
      <p className="text-gray-500 text-sm mb-4 text-center">
        Do not refresh the page before you complete all the steps.
      </p>

      <div className="space-y-6">
        <div className="bg-white p-6 border border-gray-200 rounded-lg shadow-sm">
          <label className="block text-lg font-semibold text-gray-800 mb-4">
            {questions.question1}
          </label>
          <Controller
            name="relationshipQ1"
            control={control}
            render={({ field }) => (
              <div className="grid grid-cols-1 gap-3">
                {optionsQ1.map((option, index) => (
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

        <div className="bg-white p-6 border border-gray-200 rounded-lg shadow-sm">
          <label className="block text-lg font-semibold text-gray-800 mb-4">
            {questions.question2}
          </label>
          <Controller
            name="relationshipQ2"
            control={control}
            render={({ field }) => (
              <div className="grid grid-cols-1 gap-3">
                {optionsQ2.map((option, index) => (
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

        <div className="bg-white p-6 border border-gray-200 rounded-lg shadow-sm">
          <label className="block text-lg font-semibold text-gray-800 mb-4">
            {questions.question3}
          </label>
          <Controller
            name="relationshipQ3"
            control={control}
            render={({ field }) => (
              <div className="grid grid-cols-1 gap-3">
                {optionsQ3.map((option, index) => (
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

        <div className="bg-white p-6 border border-gray-200 rounded-lg shadow-sm">
          <label className="block text-lg font-semibold text-gray-800 mb-4">
            {questions.question4}
          </label>
          <Controller
            name="relationshipQ4"
            control={control}
            render={({ field }) => (
              <div className="grid grid-cols-1 gap-3">
                {optionsQ4.map((option, index) => (
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

        <div className="bg-white p-6 border border-gray-200 rounded-lg shadow-sm">
          <label className="block text-lg font-semibold text-gray-800 mb-4">
            {questions.question5}
          </label>
          <Controller
            name="relationshipQ5"
            control={control}
            render={({ field }) => (
              <div className="grid grid-cols-1 gap-3">
                {optionsQ5.map((option, index) => (
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

        <div className="bg-white p-6 border border-gray-200 rounded-lg shadow-sm">
          <label className="block text-lg font-semibold text-gray-800 mb-4">
            {questions.question6}
          </label>
          <Controller
            name="relationshipQ6"
            control={control}
            render={({ field }) => (
              <div className="grid grid-cols-1 gap-3">
                {optionsQ6.map((option, index) => (
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

        <div className="bg-white p-6 border border-gray-200 rounded-lg shadow-sm">
          <label className="block text-lg font-semibold text-gray-800 mb-4">
            {questions.question7}
          </label>
          <Controller
            name="relationshipQ7"
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
            Your response helps us understand what matters most to you in
            relationships
          </p>
        </div>
      </div>

      <RegisterValidationError>
        {errors.relationshipQ1?.message ||
          errors.relationshipQ2?.message ||
          errors.relationshipQ3?.message ||
          errors.relationshipQ4?.message ||
          errors.relationshipQ5?.message ||
          errors.relationshipQ6?.message ||
          errors.relationshipQ7?.message}
      </RegisterValidationError>
    </>
  );
}

export default Step5;
