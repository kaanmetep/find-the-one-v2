import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import { ArrowLeft } from "lucide-react";
import { validationSchemas } from "../features/authentication/register/validation";
import { useApp } from "../hooks/useApp";
import {
  useCheckEmail,
  useRegisterUser,
} from "../features/authentication/register/services/authService";
import LoadingSpinner from "../components/LoadingSpinner";
import Step1 from "../features/authentication/register/components/Step1";
import Step2 from "../features/authentication/register/components/Step2";
import Step3 from "../features/authentication/register/components/Step3";
import Step4 from "../features/authentication/register/components/Step4";
function Register() {
  const [images, setImages] = useState({
    image1: null,
    image2: null,
    image3: null,
  });
  console.log(images.image1);
  const handleImageUpload = (e) => {
    const { name, files } = e.target;
    setImages((prev) => ({ ...prev, [name]: files[0] }));
  };
  const [currentStep, setCurrentStep] = useState(1);
  const navigate = useNavigate();
  const { setIsLoginPopUpOpen } = useApp();
  const {
    watch,
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm({ resolver: yupResolver(validationSchemas[currentStep - 1]) });
  const {
    mutate: registerUser,
    isPending: isRegistering,
    isError: registerFailed,
    error: registerError,
  } = useRegisterUser();
  const {
    mutateAsync: checkEmail,
    isPending: isCheckingEmail,
    isError: emailCheckedFailed,
    error: emailCheckedError,
  } = useCheckEmail();
  const goBack = () => {
    if (currentStep < 2) return;
    setCurrentStep((curr) => curr - 1);
  };
  const goForward = async () => {
    if (currentStep > 3) return;
    if (currentStep === 1) {
      try {
        await checkEmail(watch("email"));
        handleSubmit(() => setCurrentStep((curr) => curr + 1))();
      } catch (error) {
        console.log(error);
        return;
      }
    } else {
      handleSubmit(() => setCurrentStep((curr) => curr + 1))(); // handleSubmit is a function that returns another function. So we have to call it immediately.
    }
  };

  const onSubmit = async (data) => {
    const { firstName, email, birthdayDate, password, rePassword, ...rest } =
      data;

    const formData = new FormData();

    formData.append("firstName", firstName);
    formData.append("email", email);
    formData.append("birthdayDate", birthdayDate);
    formData.append("password", password);
    formData.append("rePassword", rePassword);
    formData.append(
      "personelDetails",
      JSON.stringify({
        gender: rest.gender,
        genderInterest: rest.genderInterest,
      })
    );
    formData.append(
      "personelQuestions",
      JSON.stringify({
        personelQ1: rest.personelQ1,
        personelQ2: rest.personelQ2,
        personelQ3: rest.personelQ3,
        personelQ4: rest.personelQ4,
      })
    );
    formData.append(
      "relationshipQuestions",
      JSON.stringify({
        relationshipQ1: rest.relationshipQ1,
        relationshipQ2: rest.relationshipQ2,
        relationshipQ3: rest.relationshipQ3,
        relationshipQ4: rest.relationshipQ4,
      })
    );

    if (images.image1) formData.append("photos", images.image1);
    if (images.image2) formData.append("photos", images.image2);
    if (images.image3) formData.append("photos", images.image3);

    registerUser(formData);
  };

  return (
    <div className=" min-h-[100vh] flex items-center justify-center bg-gradient-to-r from-red-50 to-pink-100 ">
      <div className="flex flex-col  items-center gap-2 py-8 md:w-[75%]  min-h-[95vh] w-full mx-auto bg-red-100 rounded-lg shadow-2xl ">
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
            <Step1
              control={control}
              errors={errors}
              images={images}
              handleImageUpload={handleImageUpload}
            />
          )}
          {currentStep === 2 && (
            <Step2 control={control} errors={errors} register={register} />
          )}
          {currentStep === 3 && <Step3 control={control} errors={errors} />}
          {currentStep === 4 && <Step4 control={control} errors={errors} />}
          {currentStep === 4 ? (
            isRegistering ? (
              <LoadingSpinner />
            ) : registerFailed ? (
              <p className="text-red-700 font-extrabold">
                An error occured on register. Please try again later.
                {registerError?.response.data.result}
              </p>
            ) : (
              <div className=" flex gap-2 items-center mt-4 justify-between w-full px-4">
                <button
                  onClick={goBack}
                  className="w-4 h-4 rounded-full bg-red-300 flex items-center justify-center p-4 hover:bg-red-400 transition-all delay-75"
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
            )
          ) : (
            <div className=" flex gap-2 items-center mt-4 justify-between w-full px-4">
              {currentStep !== 1 && (
                <button
                  onClick={goBack}
                  className="w-4 h-4 rounded-full bg-red-300 flex items-center justify-center p-4 hover:bg-red-400 transition-all delay-75"
                  type="button"
                >
                  &larr;
                </button>
              )}
              {isCheckingEmail ? (
                <div className=" flex w-full justify-end">
                  <LoadingSpinner />
                </div>
              ) : (
                <button
                  className="ml-auto bg-red-300 px-5 py-2 rounded-lg text-white font-bold hover:bg-red-100 hover:text-black transition-all delay-75"
                  onClick={goForward}
                  type="button"
                >
                  Continue &rarr;
                </button>
              )}
            </div>
          )}
          <p className="text-red-500 italic font-semibold">
            {emailCheckedError?.response.data.result}
          </p>
        </form>
      </div>
    </div>
  );
}

export default Register;
