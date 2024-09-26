import jwt from "jsonwebtoken";

export const generateToken = (payload: object) => {
  return jwt.sign({ id: user._id }, "JWT_TOKEN_PASS@123", {
    expiresIn: "1h",
  });
};
