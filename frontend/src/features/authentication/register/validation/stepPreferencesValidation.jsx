import * as yup from "yup";

const stepPreferencesValidation = yup.object({
  genderInterest: yup
    .string()
    .required("Please choose your interested gender."),
  relationshipType: yup
    .string()
    .required("Please choose what you're looking for."),
});

export default stepPreferencesValidation;
