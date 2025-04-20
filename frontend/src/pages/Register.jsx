import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import { ArrowLeft, MoveRight } from "lucide-react";
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
import Step5 from "../features/authentication/register/components/Step5";
import StepSocials from "../features/authentication/register/components/StepSocials";
import StepPreferences from "../features/authentication/register/components/StepPreferences";
function Register() {
  const totalSteps = 7;
  const [images, setImages] = useState({
    image1: null,
    image2: null,
    image3: null,
  });
  const [imageError, setImageError] = useState(null);
  const [currentStep, setCurrentStep] = useState(1);
  const navigate = useNavigate();
  const { setIsLoginPopUpOpen } = useApp();
  const {
    watch,
    register,
    handleSubmit,
    formState: { errors },
    control,
    setValue,
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
    setImageError(null);
    if (currentStep > 6) return;
    if (currentStep === 1) {
      try {
        if (watch("email")) {
          await checkEmail(watch("email"));
        }
        handleSubmit(() => setCurrentStep((curr) => curr + 1))();
      } catch (error) {
        console.log(error);
        return;
      }
    } else if (currentStep === 2) {
      const uploadedPhotos = Object.values(images).filter(
        (photo) => photo !== null
      ).length;

      if (!(uploadedPhotos >= 2)) {
        return setImageError("Please upload at least 2 photo of yourself!");
      }
      handleSubmit(() => setCurrentStep((curr) => curr + 1))();
    } else {
      handleSubmit(() => setCurrentStep((curr) => curr + 1))(); // handleSubmit is a function that returns another function. So we have to call it immediately.
    }
  };
  console.log(watch());
  const onSubmit = async (data) => {
    const {
      firstName,
      email,
      birthdayDate,
      password,
      rePassword,
      occupation,
      instagram,
      twitter,
      snapchat,
      bluesky,
      ageDoesntMatter,
      gender,
      minAge,
      maxAge,
      relationshipType,
      genderInterest,
      ...rest
    } = data;
    const formData = new FormData();

    formData.append("firstName", firstName);
    formData.append("email", email);
    formData.append("birthdayDate", birthdayDate);
    formData.append("password", password);
    formData.append("rePassword", rePassword);
    formData.append("occupation", occupation);
    formData.append("gender", gender);

    formData.append(
      "personelQuestions",
      JSON.stringify({
        personelQ1: rest.personelQ1,
        personelQ2: rest.personelQ2,
        personelQ3: rest.personelQ3,
        personelQ4: rest.personelQ4,
        personelQ5: rest.personelQ5,
        personelQ6: rest.personelQ6,
        personelQ7: rest.personelQ7,
      })
    );
    formData.append(
      "relationshipQuestions",
      JSON.stringify({
        relationshipQ1: rest.relationshipQ1,
        relationshipQ2: rest.relationshipQ2,
        relationshipQ3: rest.relationshipQ3,
        relationshipQ4: rest.relationshipQ4,
        relationshipQ5: rest.relationshipQ5,
        relationshipQ6: rest.relationshipQ6,
        relationshipQ7: rest.relationshipQ7,
      })
    );
    formData.append(
      "socials",
      JSON.stringify({ twitter, snapchat, bluesky, instagram })
    );

    formData.append(
      "preferences",
      JSON.stringify({
        ageLimitMatters: watch("ageDoesntMatter") ? true : false,
        relationshipType: relationshipType,
        minAge: watch("ageDoesntMatter") ? 18 : minAge,
        maxAge: watch("ageDoesntMatter") ? 90 : maxAge,
        genderInterest: genderInterest,
      })
    );

    if (images.image1) formData.append("photos", images.image1);
    if (images.image2) formData.append("photos", images.image2);
    if (images.image3) formData.append("photos", images.image3);

    registerUser(formData);
  };
  console.log(watch());
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-rose-50 to-pink-50">
      <div className="flex flex-col items-center gap-4 py-10 md:w-[70%] lg:w-[60%] w-[90%] mx-auto bg-white rounded-xl shadow-lg border border-rose-100 my-8">
        {currentStep === 1 && (
          <div className="flex justify-between items-center w-full px-6 md:px-10 text-sm md:text-base -mb-2">
            <a
              href="#"
              className="text-rose-600 hover:text-rose-800 font-medium transition-all duration-300 ease-in-out underline underline-offset-2"
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
                className="group flex items-center gap-2 px-4 py-2 text-rose-600 hover:text-rose-800 font-medium transition-all duration-300 ease-in-out cursor-pointer"
              >
                <ArrowLeft className="w-4 h-4 transform group-hover:-translate-x-1 transition-transform duration-300" />
                Back to Home
              </a>
            </div>
          </div>
        )}

        <div className="flex flex-col items-center gap-2 mb-4">
          <img src="minilogo.png" alt="Logo" className="w-32" />

          <div className="flex items-center gap-3">
            <h1 className="text-3xl font-bold text-center text-gray-800">
              Create an account
            </h1>
            <div className="bg-rose-500 text-white font-bold text-sm rounded-full h-8 w-8 flex items-center justify-center">
              {currentStep}/{totalSteps}
            </div>
          </div>
          <div className="h-1 w-64 mt-2 bg-gray-200 rounded-full overflow-hidden">
            <div
              className="h-full bg-rose-500 transition-all duration-500 ease-in-out"
              style={{ width: `${(currentStep / totalSteps) * 100}%` }}
            ></div>
          </div>
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col gap-4 items-center justify-center w-full px-6 md:px-10"
        >
          {currentStep === 1 && (
            <Step1
              control={control}
              errors={errors}
              watch={watch}
              emailExistError={emailCheckedError?.response?.data?.result}
              totalSteps={totalSteps}
            />
          )}
          {currentStep === 2 && (
            <Step2
              images={images}
              setImages={setImages}
              imageError={imageError}
            />
          )}
          {currentStep === 3 && (
            <Step3 control={control} errors={errors} register={register} />
          )}
          {currentStep === 4 && (
            <StepSocials
              control={control}
              errors={errors}
              register={register}
            />
          )}
          {currentStep === 5 && <Step4 control={control} errors={errors} />}
          {currentStep === 6 && <Step5 control={control} errors={errors} />}
          {currentStep === 7 && (
            <StepPreferences
              control={control}
              errors={errors}
              register={register}
              watch={watch}
              setValue={setValue}
            />
          )}
          {currentStep === 7 ? (
            isRegistering ? (
              <div className="mt-6">
                <LoadingSpinner />
              </div>
            ) : (
              <>
                {registerFailed && (
                  <p className="text-red-600 font-semibold text-center mt-4 p-3 bg-red-50 rounded-lg border border-red-200">
                    An error occurred on register. Please try again later.
                    {registerError?.response.data.result}
                  </p>
                )}

                <div className="flex gap-4 items-center mt-8 justify-between w-full sm:w-3/4 lg:w-1/2">
                  <button
                    onClick={goBack}
                    className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition-all duration-300 shadow-sm"
                    type="button"
                  >
                    <ArrowLeft className="w-5 h-5 text-gray-700" />
                  </button>
                  <button
                    className="bg-rose-500 px-8 py-3 rounded-lg text-white font-semibold hover:bg-rose-600 transition-all duration-300 shadow-sm flex-grow"
                    type="submit"
                  >
                    Complete
                  </button>
                </div>
              </>
            )
          ) : (
            <div className="flex gap-4 items-center mt-2 justify-between w-full sm:w-3/4 lg:w-1/2">
              {currentStep !== 1 && (
                <button
                  onClick={goBack}
                  className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition-all duration-300 shadow-sm"
                  type="button"
                >
                  <ArrowLeft className="w-5 h-5 text-gray-700" />
                </button>
              )}
              {isCheckingEmail ? (
                <div className="flex w-full justify-center">
                  <LoadingSpinner />
                </div>
              ) : (
                <button
                  className={`${
                    currentStep === 1 ? "w-full" : "flex-grow"
                  } bg-rose-500 px-6 py-3 rounded-lg text-white font-semibold hover:bg-rose-600 transition-all duration-300 shadow-sm flex items-center justify-center gap-2`}
                  onClick={goForward}
                  type="button"
                >
                  <span>Continue</span>
                  <MoveRight className="w-6 h-6" />
                </button>
              )}
            </div>
          )}
        </form>
        <div className="flex justify-center gap-2 mt-6 w-full">
          {[1, 2, 3, 4, 5, 6, 7].map((step) => (
            <div
              key={step}
              className={`text-xs font-medium ${
                currentStep === step ? "text-rose-600" : "text-gray-400"
              } transition-colors duration-300`}
            >
              {step === 1 && "Basics"}
              {step === 2 && "Photos"}
              {step === 3 && "Details"}
              {step === 4 && "Socials"}
              {step === 5 && "Personal"}
              {step === 6 && "Relationship"}
              {step === 7 && "Preferences"}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Register;
