import * as yup from "yup";

const step2Validation = yup.object({
  registerName: yup.string().required("Please enter your name."),
  registerBirthdayDate: yup
    .date()
    .typeError("Please enter a valid date.") // todo: check if user is older than 18
    .required("Please enter your birthday date.")
    .test(
      "is-year-valid",
      "The year must not be greater than 2024.",
      (value) => {
        if (!value) return false; // Eğer tarih boşsa
        return value.getFullYear() <= 2024;
      }
    ),
  registerGender: yup.string().required("Please choose your gender."),
  registerInterestedGender: yup
    .string()
    .required("Please choose your interested gender."),
});

export default step2Validation;
