import * as yup from "yup";

const step2Validation = yup.object({
  registerName: yup.string().required("Please enter your name."),
  registerBirthdayDate: yup
    .date()
    .typeError("Please enter a valid date.") // check if user is older than 18
    .required("Please enter your birthday date."),
  registerGender: yup.string().required("Please choose your gender."),
  registerInterestedGender: yup
    .string()
    .required("Please choose your interested gender."),
});

export default step2Validation;
