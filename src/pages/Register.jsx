import { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import { validationSchemas } from "../features/authentication/register/validation";
import { useApp } from "../hooks/useApp";
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

  const goBack = () => {
    if (currentStep < 2) return;
    setCurrentStep((curr) => curr - 1);
  };

  const goForward = () => {
    if (currentStep > 3) return;
    handleSubmit(() => setCurrentStep((curr) => curr + 1))(); // handleSubmit is a function that returns another function. So we have to call it immediately.
  };

  const onSubmit = (data) => console.log(data);

  return (
    <div className=" h-svh flex items-center justify-center bg-red-50">
      <div className="flex flex-col justify-center items-center gap-6 h-[680px]  w-[80%] mx-auto bg-red-200 rounded-lg ">
        {currentStep === 1 && (
          <img src="minilogo.png" alt="Logo" className="w-32" />
        )}
        <div className="flex gap-4 items-center">
          <h1 className="text-3xl font-bold italic p-2 rounded-sm text-center ">
            Create an account
          </h1>
          <h2 className="text-black font-bold">{currentStep}/4</h2>
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
        </form>
        {currentStep === 1 && (
          <a
            href="#"
            className=" border-b-2  border-black text-black hover:border-transparent transition-all delay-75"
            onClick={() => {
              navigate("/");
              setIsLoginPopUpOpen(true);
            }}
          >
            Do you already have an account?
          </a>
        )}
      </div>
    </div>
  );
}

export default Register;
