import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import { ArrowLeft } from "lucide-react";
import { validationSchemas } from "../features/authentication/register/validation";
import { useApp } from "../hooks/useApp";
import { useRegisterUser } from "../features/authentication/register/services/authService";
import LoadingSpinner from "../components/LoadingSpinner";
import Step1 from "../features/authentication/register/components/Step1";
import Step2 from "../features/authentication/register/components/Step2";
import Step3 from "../features/authentication/register/components/Step3";
import Step4 from "../features/authentication/register/components/Step4";

function Register() {
  const [currentStep, setCurrentStep] = useState(1);
  const navigate = useNavigate();
  const { setIsLoginPopUpOpen } = useApp();
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm({ resolver: yupResolver(validationSchemas[currentStep - 1]) });

  const { mutate, isLoading, isError, error } = useRegisterUser();

  const goBack = () => {
    if (currentStep < 2) return;
    setCurrentStep((curr) => curr - 1);
  };

  const goForward = () => {
    if (currentStep > 3) return;
    handleSubmit(() => setCurrentStep((curr) => curr + 1))(); // handleSubmit is a function that returns another function. So we have to call it immediately.
  };

  const onSubmit = (data) => {
    const formattedData = {
      registerName: data.registerName,
      registerEmail: data.registerEmail,
      registerBirthdayDate: data.registerBirthdayDate,
      registerPassword: data.registerPassword,
      registerRePassword: data.registerRePassword,
      personelDetails: {
        registerGender: data.registerGender,
        registerGenderInterest: data.registerInterestedGender,
      },
      personelQuestions: {
        registerPersonelQ1: data.registerPersonelQ1,
        registerPersonelQ2: data.registerPersonelQ2,
        registerPersonelQ3: data.registerPersonelQ3,
        registerPersonelQ4: data.registerPersonelQ4,
      },
      relationshipQuestions: {
        registerRelationshipQ1: data.registerRelationshipQ1,
        registerRelationshipQ2: data.registerRelationshipQ2,
        registerRelationshipQ3: data.registerRelationshipQ3,
        registerRelationshipQ4: data.registerRelationshipQ4,
      },
    };
    mutate(formattedData);
  };

  return (
    <div className="h-svh flex items-center justify-center bg-gradient-to-r from-red-50 to-pink-100 ">
      <div className="flex flex-col  items-center gap-2 py-8 md:w-[75%] h-[90%] w-full mx-auto bg-red-100 rounded-lg shadow-2xl ">
        {currentStep === 1 && (
          <div className="flex justify-between items-center w-full px-4 md:px-8 text-xs md:text-base">
            <a
              href="#"
              className="w-fit text-rose-600 hover:text-rose-800 font-bold  transition-all duration-300 ease-in-out"
              onClick={() => {
                navigate("/");
                setIsLoginPopUpOpen(true);
              }}
            >
              Do you already have an account?
            </a>

            <div className="flex flex-col items-center">
              <a
                onClick={() => navigate("/")}
                className="group flex items-center gap-2 px-4 py-2 text-rose-600 hover:text-rose-800 font-bold 
                       transition-all duration-300 ease-in-out cursor-pointer mr-4 ml-auto"
              >
                <ArrowLeft className="w-4 h-4 transform group-hover:-translate-x-1 transition-transform duration-300" />
                Back to Home
              </a>
            </div>
          </div>
        )}

        <div className="flex flex-col items-center">
          {(currentStep === 1 || currentStep === 2) && (
            <img src="minilogo.png" alt="Logo" className="w-32" />
          )}
          <div className="flex items-center gap-2">
            <h1 className="text-3xl font-bold  p-2 rounded-sm text-center">
              Create an account
            </h1>
            <p className="text-black font-bold  text-sm  bg-red-300 rounded-full aspect-square p-2">
              {currentStep}/4
            </p>
          </div>
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col gap-2 items-center justify-center"
        >
          {currentStep === 1 && (
            <Step1 control={control} errors={errors} goForward={goForward} />
          )}
          {currentStep === 2 && (
            <Step2
              control={control}
              errors={errors}
              goForward={goForward}
              goBack={goBack}
              register={register}
            />
          )}
          {currentStep === 3 && (
            <Step3
              control={control}
              errors={errors}
              goForward={goForward}
              goBack={goBack}
            />
          )}
          {currentStep === 4 && (
            <Step4 control={control} errors={errors} goBack={goBack} />
          )}
          {currentStep === 4 &&
            (isLoading ? (
              <LoadingSpinner />
            ) : isError ? (
              <p className="text-red-700 font-extrabold">
                {/* An error occured on register. Please try again later. */}
                {error.response.data.result}
              </p>
            ) : (
              <button
                className=" bg-red-300 px-8 py-2 rounded-lg text-white font-bold hover:bg-red-100 hover:text-black transition-all delay-75"
                type="submit"
              >
                Complete
              </button>
            ))}
        </form>
      </div>
    </div>
  );
}

export default Register;
