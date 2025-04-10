import { Controller } from "react-hook-form";
import TextArea from "@components/TextArea";
import RegisterValidationError from "../components/RegisterValidationError";

function Step4({ control, errors }) {
  const questions = {
    question1: "What type of activities do you enjoy in your free time?",
    question2: "How would you describe your communication style?",
    question3: "What qualities do you value most in relationships?",
    question4: "What's your ideal way to spend a weekend?",
    question5: "How do you typically handle stress or difficult situations?",
    question6: "What are your goals for the next few years?",
    question7:
      "If you could share one thing about yourself that most people don't know, what would it be?",
  };

  const optionsQ1 = [
    "Outdoor activities (hiking, sports, nature)",
    "Creative pursuits (art, music, writing)",
    "Social gatherings (parties, dining out, group events)",
    "Quiet activities (reading, meditation, solo hobbies)",
  ];

  const optionsQ2 = [
    "Direct and straightforward",
    "Thoughtful and diplomatic",
    "Expressive and animated",
    "Reserved and observant",
  ];

  const optionsQ3 = [
    "Honesty and transparency",
    "Empathy and understanding",
    "Shared interests and excitement",
    "Independence and respect for boundaries",
  ];

  const optionsQ4 = [
    "Exploring new places and adventures",
    "Relaxing at home with movies or books",
    "Spending time with friends and family",
    "Working on personal projects or hobbies",
  ];

  const optionsQ5 = [
    "Taking action and solving the problem immediately",
    "Stepping back to analyze and plan carefully",
    "Seeking advice or support from others",
    "Self-care and relaxation before addressing the issue",
  ];

  const optionsQ6 = [
    "Career advancement and professional growth",
    "Personal development and learning new skills",
    "Building meaningful relationships",
    "Finding better work-life balance and happiness",
  ];

  return (
    <>
      <h2 className="text-center  italic font-bold text-black">
        Just to know you better.
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
            name="personelQ1"
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
            name="personelQ2"
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
            name="personelQ3"
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

        {/* New Question 5 */}
        <div className="bg-white p-6 border border-gray-200 rounded-lg shadow-sm">
          <label className="block text-lg font-semibold text-gray-800 mb-4">
            {questions.question4}
          </label>
          <Controller
            name="personelQ4"
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
            name="personelQ5"
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
            name="personelQ6"
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
