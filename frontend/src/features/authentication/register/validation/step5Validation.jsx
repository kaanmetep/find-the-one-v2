import * as yup from "yup";

const step5Validation = yup.object({
  relationshipQ1: yup
    .string()
    .required("Please select an option for the 1st question."),
  relationshipQ2: yup
    .string()
    .required("Please select an option for the 2nd question."),
  relationshipQ3: yup
    .string()
    .required("Please select an option for the 3rd question."),
  relationshipQ4: yup
    .string()
    .required("Please select an option for the 4th question."),
  relationshipQ5: yup
    .string()
    .required("Please select an option for the 5th question."),
  relationshipQ6: yup
    .string()
    .required("Please select an option for the 6th question."),
  relationshipQ7: yup
    .string()
    .min(
      20,
      "Please enter at least 20 characters for your open-ended response."
    )
    .max(100, "Please keep your response under 100 characters.")
    .required("Please answer the open-ended question."),
});

export default step5Validation;
