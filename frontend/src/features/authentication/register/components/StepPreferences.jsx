import { useEffect } from "react";
import RegisterValidationError from "../components/RegisterValidationError";
import { HeartHandshakeIcon, Users } from "lucide-react";

function StepPreferences({ errors, register, watch, setValue }) {
  console.log(errors);
  // Watch the ageDoesntMatter checkbox value
  const ageDoesntMatter = watch("ageDoesntMatter");
  const minAge = watch("minAge") || 18;
  const maxAge = watch("maxAge") || 90;

  // Initialize age values if they're not set
  useEffect(() => {
    if (!watch("minAge") && !ageDoesntMatter) {
      setValue("minAge", 18);
    }
    if (!watch("maxAge") && !ageDoesntMatter) {
      setValue("maxAge", 90);
    }
  }, [setValue, watch, ageDoesntMatter]);

  // Reset age inputs when checkbox is checked
  useEffect(() => {
    if (ageDoesntMatter) {
      setValue("minAge", "");
      setValue("maxAge", "");
    }
  }, [ageDoesntMatter, setValue]);

  // Handle slider change
  const handleSliderChange = (e) => {
    setValue(e.target.name, parseInt(e.target.value, 10));
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-sm">
      <h2 className="text-xl text-center font-bold text-black mb-2">
        It's time to find someone perfect for you.
      </h2>
      <p className="text-gray-500 text-sm mb-6 text-center">
        Tell us your preferences to help us find your ideal match.
      </p>

      <div className="space-y-4">
        {/* Interested Gender */}
        <div className="relative">
          <HeartHandshakeIcon className="absolute left-3 top-1/2 -translate-y-1/2 text-rose-500 w-5 h-5" />
          <select
            className="w-full pl-10 pr-4 py-3 bg-white border-2 border-rose-200 shadow-md rounded-lg 
                      hover:border-rose-300 focus:ring-2 focus:ring-rose-300 focus:border-rose-400 
                      focus:outline-none focus:shadow-lg transition-all placeholder:text-gray-400 placeholder:text-sm"
            required
            {...register("genderInterest")}
          >
            <option value="" disabled selected>
              Interested Gender
            </option>
            <option value="man">Man</option>
            <option value="woman">Woman</option>
            <option value="both">Both</option>
          </select>
        </div>

        {/* Age Range with Slider */}
        <div className="mb-2">
          <div className="flex justify-between items-center mb-2">
            <label className="block text-sm font-medium text-gray-700">
              Age Range
            </label>
            <div className="text-sm text-rose-500 font-medium">
              {!ageDoesntMatter && `${minAge} - ${maxAge} years`}
            </div>
          </div>

          {/* Min Age Slider */}
          <div className={`mb-4 ${ageDoesntMatter ? "opacity-50" : ""}`}>
            <label className="block text-xs text-gray-500 mb-1">
              Minimum Age
            </label>
            <input
              type="range"
              min="18"
              max="90"
              step="1"
              name="minAge"
              value={minAge}
              disabled={ageDoesntMatter}
              onChange={handleSliderChange}
              className="w-full h-2 bg-rose-200 rounded-lg appearance-none cursor-pointer accent-rose-500"
              {...register("minAge")}
            />
          </div>

          {/* Max Age Slider */}
          <div className={`mb-4 ${ageDoesntMatter ? "opacity-50" : ""}`}>
            <label className="block text-xs text-gray-500 mb-1">
              Maximum Age
            </label>
            <input
              type="range"
              min="18"
              max="90"
              step="1"
              name="maxAge"
              value={maxAge}
              disabled={ageDoesntMatter}
              onChange={handleSliderChange}
              className="w-full h-2 bg-rose-200 rounded-lg appearance-none cursor-pointer accent-rose-500"
              {...register("maxAge")}
            />
          </div>
        </div>

        {/* Age Doesn't Matter Checkbox */}
        <div className="flex items-center mb-4">
          <input
            type="checkbox"
            id="ageDoesntMatter"
            className="w-4 h-4 text-rose-600 bg-gray-100 border-gray-300 rounded focus:ring-rose-500 focus:ring-offset-0"
            {...register("ageDoesntMatter")}
          />
          <label
            htmlFor="ageDoesntMatter"
            className="ml-2 text-gray-700 text-sm"
          >
            Age doesn't matter to me
          </label>
        </div>

        {/* Relationship Type */}
        <div className="relative">
          <Users className="absolute left-3 top-1/2 -translate-y-1/2 text-rose-500 w-5 h-5" />
          <select
            className="w-full pl-10 pr-4 py-3 bg-white border-2 border-rose-200 shadow-md rounded-lg 
                      hover:border-rose-300 focus:ring-2 focus:ring-rose-300 focus:border-rose-400 
                      focus:outline-none focus:shadow-lg transition-all placeholder:text-gray-400 placeholder:text-sm"
            required
            {...register("relationshipType")}
          >
            <option value="" disabled selected>
              Looking For
            </option>
            <option value="casual">Casual Dating</option>
            <option value="serious">Serious Relationship</option>
            <option value="friendship">Friendship</option>
            <option value="doesntMatter">Doesn't Matter</option>
          </select>
        </div>
      </div>

      {/* Error Messages */}
      <div className="mt-4">
        <RegisterValidationError>
          {errors.genderInterest?.message || errors.relationshipType?.message}
        </RegisterValidationError>
      </div>
    </div>
  );
}

export default StepPreferences;
