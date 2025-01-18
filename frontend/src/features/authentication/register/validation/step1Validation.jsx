import * as yup from "yup";

const step1Validation = yup.object({
  email: yup
    .string()
    .email("E-mail must be a valid email.")
    .required("E-mail is required."),
  password: yup
    .string()
    .required("Password is required.")
    .min(6, "Password must be at least 6 characters."),
  rePassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "Passwords must match"),
});

export default step1Validation;
