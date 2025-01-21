import { Controller } from "react-hook-form";
import InputElement from "../../../../components/InputElement";
import RegisterValidationError from "../components/RegisterValidationError";
import { Mail, KeyRound } from "lucide-react";
import { PlusIcon } from "lucide-react";
const Step1 = ({ control, errors, images, handleImageUpload }) => {
  return (
    <>
      <h2 className="text-center  italic font-bold text-black px-4">
        Registration consists of 4 steps. You must fill out all steps
        completely.
      </h2>
      <p className="text-gray-500 text-sm mb-4">
        Do not refresh the page before you complete all the steps.
      </p>
      <Controller
        name="email"
        control={control}
        render={({ field }) => (
          <div className="flex relative">
            <Mail className="absolute left-3 top-1/2 -translate-y-1/2" />
            <InputElement placeholder="E-mail" pl={40} py={6} {...field} />
          </div>
        )}
      />
      <Controller
        name="password"
        control={control}
        render={({ field }) => (
          <div className="flex relative">
            <KeyRound className="absolute left-3 top-1/2 -translate-y-1/2" />
            <InputElement
              placeholder="Password"
              pl={40}
              py={6}
              type="password"
              {...field}
            />
          </div>
        )}
      />
      <Controller
        name="rePassword"
        control={control}
        render={({ field }) => (
          <div className="flex relative">
            <KeyRound className="absolute left-3 top-1/2 -translate-y-1/2" />
            <InputElement
              placeholder="Re-Enter Password"
              pl={40}
              py={6}
              type="password"
              {...field}
            />
          </div>
        )}
      />
      <label htmlFor="image1" className="cursor-pointer">
        {images.image1 ? (
          <img
            src={URL.createObjectURL(images.image1)}
            alt="upload_image"
            className="w-20"
          />
        ) : (
          <div className="flex flex-col items-center">
            <PlusIcon />
            <p>Add a photo</p>
          </div>
        )}

        <input
          type="file"
          id="image1"
          className="hidden"
          onChange={handleImageUpload}
          name="image1"
        />
      </label>
      <label htmlFor="image2" className="cursor-pointer">
        {images.image2 ? (
          <img
            src={URL.createObjectURL(images.image2)}
            alt="upload_image"
            className="w-20"
          />
        ) : (
          <div className="flex flex-col items-center">
            <PlusIcon />
            <p>Add a photo</p>
          </div>
        )}

        <input
          type="file"
          id="image2"
          className="hidden"
          onChange={handleImageUpload}
          name="image2"
        />
      </label>
      <label htmlFor="image3" className="cursor-pointer">
        {images.image3 ? (
          <img
            src={URL.createObjectURL(images.image3)}
            alt="upload_image"
            className="w-20"
          />
        ) : (
          <div className="flex flex-col items-center">
            <PlusIcon />
            <p>Add a photo</p>
          </div>
        )}

        <input
          type="file"
          id="image3"
          className="hidden"
          onChange={handleImageUpload}
          name="image3"
        />
      </label>
      <RegisterValidationError>
        {errors.email?.message ||
          errors.password?.message ||
          errors.rePassword?.message}
      </RegisterValidationError>
    </>
  );
};

export default Step1;
