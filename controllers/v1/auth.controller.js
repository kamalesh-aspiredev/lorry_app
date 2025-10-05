import express from "express";
import { StatusCodes } from "http-status-codes";
import { signupSchema } from "../../validations/validator.js";

export const signup = async (req, res) => {
  try {
    const value = validateRequest(req.body, signupSchema);
    const {
      user_name,
      role,
      mobile,
      device_id,
      device_token,
      device_type,
      password,
    } = value;

    //
    const hashedPassword = await bcrypt.hash(password, 10);
  } catch (err) {}
};
