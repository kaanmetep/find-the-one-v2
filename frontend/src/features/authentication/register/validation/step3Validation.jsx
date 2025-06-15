import * as yup from "yup";

const step3Validation = yup.object({
  firstName: yup.string().required("Please enter your name."),
  birthdayDate: yup
    .date()
    .typeError("Please enter a valid date.")
    .required("Please enter your birthday date.")
    .test(
      "is-year-valid",
      "The year must not be greater than 2024.",
      (value) => {
        if (!value) return false;
        return value.getFullYear() <= 2024;
      }
    )
    .test("is-18-or-older", "You must be at least 18 years old.", (value) => {
      if (!value) return false;
      const today = new Date();
      const birthDate = new Date(value);
      let age = today.getFullYear() - birthDate.getFullYear();
      const m = today.getMonth() - birthDate.getMonth();
      if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
      }
      return age >= 18;
    }),
  gender: yup.string().required("Please choose your gender."),

  occupation: yup.string().required("Please enter your occupation."),
});

export default step3Validation;
