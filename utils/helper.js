import jwt from "jsonwebtoken";

// 1.
export const validateRequest = (data, schema) => {
  const { error, value } = schema.validate(data, { abortEarly: false });

  if (error) {
    const errors = error.details.map((err) => err.message);
    const errorObject = new Error("validation Error");
    errorObject.status = 400;
    errorObject.errors = errors;
    throw errorObject;
  }
  return value;
};
// 2.
export const generateOtp = () => {
  return Math.floor(100000 + Math.random() * 900000).toString();
};
// 3.