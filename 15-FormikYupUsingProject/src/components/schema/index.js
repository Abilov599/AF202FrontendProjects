import * as Yup from "yup";

export const userValidationSchema = Yup.object().shape({
  // userName: Yup.string("")
  //   .required("this field can not be empty")
  //   .min(5, "min 5 character is required")
  //   .max(15, "max 15 character is required"),

  email: Yup.string("")
    .required("this field can not be empty")
    .min(5, "min 5 character is required")
    .max(25, "max 25 character is required"),

  password: Yup.string("")
    .required("this field can not be empty")
    .min(5, "min 5 character is required")
    .max(20, "max 20 character is required"),

  password2: Yup.string("")
    .required("this field can not be empty")
    .min(5, "min 5 character is required")
    .max(20, "max 20 character is required"),

  country: Yup.string(""),
});
