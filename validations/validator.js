import Joi from "joi";

export const signupSchema = Joi.object({
  role: Joi.string().valid("0", "1").required().messages({
    "string.empty": "User role is required",
  }),
  user_name: Joi.string().min(3).required().messages({
    "string.empty": "Username is required!",
    "string.min": "Username atleaset 3 characters!",
  }),
  mobile: Joi.string()
    .length(10)
    .pattern(/^[6-9][0-9]{9}$/)
    .required()
    .messages({
      "string.empty": "Phone number is required!",
      "string.length": "Phone number must be 10 digits",
      "string.pattern.base": "Phone number must start with 6 to 9",
    }),
  password: Joi.string().min(6).required().messages({
    "string.empty": "Password is required!",
    "string.min": "Password must be 6 characters",
  }),
  device_id: Joi.string().required().messages({
    "string.empty": "Device Id is required!",
  }),
  device_token: Joi.string().required().messages({
    "string.empty": "Device Token is required!",
  }),
  device_type: Joi.string().valid("android", "ios").required().messages({
    "any.only": "Device type must be either android or ios",
    "string.empty": "Device Type is required!",
  }),
});
