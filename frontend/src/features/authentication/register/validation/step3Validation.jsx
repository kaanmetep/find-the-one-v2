import * as yup from "yup";

const step3Validation = yup.object({
  personelQ1: yup
    .string()
    .min(20, "Please enter at least 20 characters for 1st question.")
    .required("Please answer 1st question."),
  personelQ2: yup
    .string()
    .min(20, "Please enter at least 20 characters for 2nd question.")
    .required("Please answer 2nd question."),
  personelQ3: yup
    .string()
    .min(20, "Please enter at least 20 characters for 3rd question.")
    .required("Please answer 3rd question."),
  personelQ4: yup
    .string()
    .min(20, "Please enter at least 20 characters for 4th question.")
    .required("Please answer 4th question."),
});

export default step3Validation;
