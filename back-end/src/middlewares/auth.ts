import jwt from "jsonwebtoken";
import { Request, Response, NextFunction } from "express";
import { decodeToken } from "../utils/jwt";
interface IMyRequest extends Request {
  user: string | object;
}

declare global {
  namespace Express {}
}

export const auth = (req: IMyRequest, res: Response, next: NextFunction) => {
  //   const token: string | undefined | string[] =
  //     req.headers.authorization || req.headers.Authorization;
  // console.log("nevtersen hereglegch shalgah"
  if (!req.headers.authorization) {
    return res.status(401).json({ message: "nevter" });
  }

  const token = req.headers.authorization.split(" ")[1];
  const user = decodeToken(token);
  req.user = user;
  next();
};
