import { useState } from "react";
import { Controller } from "react-hook-form";
import InputElement from "@components/InputElement";
import RegisterValidationError from "../components/RegisterValidationError";
import {
  UserIcon,
  Calendar,
  PersonStanding,
  HeartHandshakeIcon,
  BriefcaseBusiness,
} from "lucide-react";
function Step3({ control, errors, register }) {
  const [inputType, setInputType] = useState("text");
  return (
    <>
      <h2 className="text-center italic font-bold text-black">
        Let's get the important details first.
      </h2>
      <p className="text-gray-500 text-sm mb-4">
        Do not refresh the page before you complete all the steps.
      </p>
      <Controller
        name="firstName"
        control={control}
        render={({ field }) => (
          <div className="flex relative">
            <UserIcon className="absolute left-3 top-1/2 -translate-y-1/2" />
            <InputElement placeholder="First Name" pl={40} py={6} {...field} />
          </div>
        )}
      />
      <Controller
        name="birthdayDate"
        control={control}
        render={({ field }) => (
          <div className="flex relative">
            <Calendar className="absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type={inputType}
              placeholder="Birthday Date"
              onFocus={() => setInputType("date")}
              onBlur={() => setInputType("text")}
              className={"input-element-select"}
              {...field}
            />
          </div>
        )}
      />
      <Controller
        name="occupation"
        control={control}
        render={({ field }) => (
          <div className="flex relative">
            <BriefcaseBusiness className="absolute left-3 top-1/2 -translate-y-1/2" />
            <InputElement
              placeholder="What's your occupation?"
              pl={40}
              py={6}
              {...field}
            />
          </div>
        )}
      />
      <div className="flex relative">
        <PersonStanding className="absolute left-3 top-1/2 -translate-y-1/2 " />
        <select
          className={"input-element-select"}
          required
          {...register("gender")}
        >
          <option value="" disabled selected>
            Gender
          </option>
          <option value="man">Man</option>
          <option value="woman">Woman</option>
        </select>
      </div>
      <div className="flex relative">
        <HeartHandshakeIcon className="absolute left-3 top-1/2 -translate-y-1/2 " />

        <select
          className={"input-element-select"}
          required
          {...register("genderInterest")}
        >
          <option value="" disabled selected>
            Interested Gender
          </option>
          <option value="man">Man</option>
          <option value="woman">Woman</option>
        </select>
      </div>
      <RegisterValidationError>
        {errors.firstName?.message ||
          errors.birthdayDate?.message ||
          errors.occupation?.message ||
          errors.gender?.message ||
          errors.genderInterest?.message}
      </RegisterValidationError>
    </>
  );
}

export default Step3;
