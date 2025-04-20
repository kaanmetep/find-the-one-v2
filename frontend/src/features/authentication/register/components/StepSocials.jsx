import { Controller } from "react-hook-form";
import InputElement from "@components/InputElement";
import RegisterValidationError from "../components/RegisterValidationError";
import {
  FaSnapchat,
  FaInstagram,
  FaXTwitter,
  FaBluesky,
} from "react-icons/fa6";

function StepSocials({ control, errors, register }) {
  console.log(errors);
  return (
    <>
      <h2 className="text-center italic font-bold text-black">
        Please share{" "}
        <span className="underline font-extrabold">at least one</span> of your
        social media accounts with us so people can connect with you.
      </h2>
      <p className="text-gray-500 text-sm mb-4 text-center">
        Do not refresh the page before you complete all the steps.
      </p>

      <Controller
        name="instagram"
        control={control}
        render={({ field }) => (
          <div className="flex relative">
            <FaInstagram className="absolute left-3 top-1/2 -translate-y-1/2" />
            <InputElement
              placeholder="Instagram Username"
              pl={40}
              py={6}
              {...field}
              maxLength="20"
            />
          </div>
        )}
      />

      <Controller
        name="twitter"
        control={control}
        render={({ field }) => (
          <div className="flex relative">
            <FaXTwitter className="absolute left-3 top-1/2 -translate-y-1/2" />
            <InputElement
              placeholder="Twitter/X Username"
              pl={40}
              py={6}
              {...field}
              maxLength="20"
            />
          </div>
        )}
      />

      <Controller
        name="snapchat"
        control={control}
        render={({ field }) => (
          <div className="flex relative">
            <FaSnapchat className="absolute left-3 top-1/2 -translate-y-1/2" />
            <InputElement
              placeholder="Snapchat Username"
              pl={40}
              py={6}
              {...field}
              maxLength="20"
            />
          </div>
        )}
      />

      <Controller
        name="bluesky"
        control={control}
        render={({ field }) => (
          <div className="flex relative">
            <FaBluesky className="absolute left-3 top-1/2 -translate-y-1/2" />
            <InputElement
              placeholder="Bluesky Username"
              pl={40}
              py={6}
              {...field}
              maxLength="20"
            />
          </div>
        )}
      />

      <RegisterValidationError>
        {errors?.socialMedia?.message}
      </RegisterValidationError>
    </>
  );
}

export default StepSocials;
