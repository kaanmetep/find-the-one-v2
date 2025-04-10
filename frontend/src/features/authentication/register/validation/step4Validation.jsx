import * as yup from "yup";

const step4Validation = yup.object({
  personelQ1: yup
    .string()
    .required("Please select an option for the 1st question."),
  personelQ2: yup
    .string()
    .required("Please select an option for the 2nd question."),
  personelQ3: yup
    .string()
    .required("Please select an option for the 3rd question."),
  personelQ4: yup
    .string()
    .required("Please select an option for the 4th question."),
  personelQ5: yup
    .string()
    .required("Please select an option for the 5th question."),
  personelQ6: yup
    .string()
    .required("Please select an option for the 6th question."),
  personelQ7: yup
    .string()
    .min(
      20,
      "Please enter at least 20 characters for your open-ended response."
    )
    .max(100, "Please keep your response under 100 characters.")
    .required("Please answer the open-ended question."),
});

export default step4Validation;
