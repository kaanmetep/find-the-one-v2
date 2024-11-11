import * as yup from "yup";

const step4Validation = yup.object({
  registerRelationshipQ1: yup
    .string()
    .min(20, "Please enter at least 20 characters for 1st question.")
    .required("Please answer 1st question."),
  registerRelationshipQ2: yup
    .string()
    .min(20, "Please enter at least 20 characters for 2nd question.")
    .required("Please answer 2nd question."),
  registerRelationshipQ3: yup
    .string()
    .min(20, "Please enter at least 20 characters for 3rd question.")
    .required("Please answer 3rd question."),
});

export default step4Validation;
