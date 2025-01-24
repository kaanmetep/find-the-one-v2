import * as yup from "yup";

const step3Validation = yup.object({
  firstName: yup.string().required("Please enter your name."),
  birthdayDate: yup
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
  gender: yup.string().required("Please choose your gender."),
  genderInterest: yup
    .string()
    .required("Please choose your interested gender."),
});

export default step3Validation;
