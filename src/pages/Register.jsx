import { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { validationSchemas } from "../features/authentication/register/validation";
import InputElement from "../components/InputElement";
import TextArea from "../components/TextArea";
import RegisterValidationError from "../features/authentication/register/components/RegisterValidationError";
import "react-datepicker/dist/react-datepicker.css";
function Register() {
  const [page, setPage] = useState(1);
  const [inputType, setInputType] = useState("text");

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    control,
  } = useForm({ resolver: yupResolver(validationSchemas[page - 1]) });

  const goBack = () => {
    if (page < 2) return;
    setPage((curr) => curr - 1);
  };

  const goForward = () => {
    if (page > 3) return;
    handleSubmit(() => setPage((curr) => curr + 1))(); // handleSubmit is a function that returns another function. So we have to call it immediately.
  };

  const onSubmit = (data) => console.log(data);

  return (
    <div className=" h-svh flex items-center justify-center bg-red-50">
      <div className="flex flex-col justify-center items-center gap-6 h-[680px]  w-[80%] mx-auto bg-red-200 rounded-lg ">
        <div className="flex gap-4 items-center">
          <h1 className="text-3xl font-bold italic p-2 rounded-sm text-center ">
            Create an account
          </h1>
          <h2 className="text-black font-bold">{page}/4</h2>
        </div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col gap-2 items-center justify-center"
        >
          {page === 1 && (
            <>
              <h2 className="text-center mb-4 italic font-bold text-black">
                Registration consists of 4 steps. You must fill out all steps
                completely.
              </h2>
              <Controller
                name="registerEmail"
                control={control}
                render={({ field }) => (
                  <InputElement
                    placeholder="E-mail"
                    pl={20}
                    py={6}
                    {...field}
                  />
                )}
              />
              <Controller
                name="registerPassword"
                control={control}
                render={({ field }) => (
                  <InputElement
                    placeholder="Password"
                    pl={20}
                    py={6}
                    {...field}
                  />
                )}
              />
              <Controller
                name="registerRePassword"
                control={control}
                render={({ field }) => (
                  <InputElement
                    placeholder="Re-enter your password"
                    pl={20}
                    py={6}
                    {...field}
                  />
                )}
              />
              <button
                className="ml-auto mt-4 bg-red-300 px-5 py-2 rounded-lg text-white font-bold hover:bg-red-100 hover:text-black transition-all delay-75"
                onClick={goForward}
                type="button"
              >
                Continue &rarr;
              </button>
              <RegisterValidationError>
                {errors.registerEmail?.message ||
                  errors.registerPassword?.message ||
                  errors.registerRePassword?.message}
              </RegisterValidationError>
            </>
          )}
          {page === 2 && (
            <>
              <h2 className="text-center mb-4 italic font-bold text-black">
                Let's get the important details first.
              </h2>
              <Controller
                name="registerName"
                control={control}
                render={({ field }) => (
                  <InputElement placeholder="Name" pl={20} py={6} {...field} />
                )}
              />
              <Controller
                name="registerBirthdayDate"
                control={control}
                render={({ field }) => (
                  <input
                    type={inputType}
                    placeholder="Birthday Date"
                    onFocus={() => setInputType("date")}
                    onBlur={() => setInputType("text")}
                    style={{ padding: "8px", fontSize: "16px" }}
                    className={`shadow-lg border-2 border-rose-200 px-2 pl-5 rounded-md py-1 placeholder:text-sm w-40 md:w-80 md:focus:w-[340px]
                      transition-all duration-300 focus:outline-none
                      focus:ring
                      focus:ring-rose-200
                      focus:ring-opacity-50 text-black`}
                    {...field}
                  />
                )}
              />

              <select
                className={`shadow-lg border-2 border-rose-200 px-2 pl-5 rounded-md py-1 placeholder:text-sm w-40 md:w-80 md:focus:w-[340px]
                transition-all duration-300 focus:outline-none
                focus:ring
                focus:ring-rose-200
                focus:ring-opacity-50 text-black`}
                required
                {...register("registerGender")}
              >
                <option value="" disabled selected>
                  Gender
                </option>
                <option value="man">Man</option>
                <option value="woman">Woman</option>
              </select>
              <select
                className={`shadow-lg border-2 border-rose-200 px-2 pl-5 rounded-md py-1 placeholder:text-sm w-40 md:w-80 md:focus:w-[340px]
                transition-all duration-300 focus:outline-none
                focus:ring
                focus:ring-rose-200
                focus:ring-opacity-50 text-black`}
                required
                {...register("registerInterestedGender")}
              >
                <option value="" disabled selected>
                  Interested Gender
                </option>
                <option value="man">Man</option>
                <option value="woman">Woman</option>
              </select>
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
                {errors.registerName?.message ||
                  errors.registerBirthdayDate?.message ||
                  errors.registerGender?.message ||
                  errors.registerInterestedGender?.message}
              </RegisterValidationError>
            </>
          )}
          {page === 3 && (
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
                What is something you are passionate about that not many people
                know?
              </label>
              <Controller
                name="registerPersonelQ3"
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
                  errors.registerPersonelQ3?.message}
              </RegisterValidationError>
            </>
          )}
          {page === 4 && (
            <>
              <h2 className="text-center mb-4 italic font-bold text-black">
                Your ideas about relationships.
              </h2>
              <div className="flex flex-col items-center gap-2">
                <label className="text-center">
                  What type of relationship is most valuable to you? (For
                  example, an adventurous partner, a calming bond, a
                  relationship based on strong communication, etc.)
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
                  If you could live in any country for a year, where would it
                  be, and why?
                </label>
                <Controller
                  name="registerRelationshipQ3"
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
                  errors.registerRelationshipQ3?.message}
              </RegisterValidationError>
            </>
          )}
        </form>
      </div>
    </div>
  );
}

export default Register;
