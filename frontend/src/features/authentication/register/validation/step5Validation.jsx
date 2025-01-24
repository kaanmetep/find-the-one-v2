import * as yup from "yup";

const step5Validation = yup.object({
  relationshipQ1: yup
    .string()
    .min(20, "Please enter at least 20 characters for 1st question.")
    .required("Please answer 1st question."),
  relationshipQ2: yup
    .string()
    .min(20, "Please enter at least 20 characters for 2nd question.")
    .required("Please answer 2nd question."),
  relationshipQ3: yup
    .string()
    .min(20, "Please enter at least 20 characters for 3rd question.")
    .required("Please answer 3rd question."),
  relationshipQ4: yup
    .string()
    .min(20, "Please enter at least 20 characters for 4th question.")
    .required("Please answer 4th question."),
});

export default step5Validation;
