import * as yup from "yup";

const step1Validation = yup.object({
  registerEmail: yup
    .string()
    .email("E-mail must be a valid email.")
    .required("E-mail is required."),
  registerPassword: yup
    .string()
    .required("Password is required.")
    .min(6, "Password must be at least 6 characters."),
  registerRePassword: yup
    .string()
    .oneOf([yup.ref("registerPassword"), null], "Passwords must match"),
});

export default step1Validation;
