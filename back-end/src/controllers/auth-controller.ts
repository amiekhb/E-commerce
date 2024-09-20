import { Request, Response } from "express";
import User from "../models/user.model";

export const login = (req: Request, res: Response) => {
  res.status(200).json({ message: "Login success" });
};
export const signup = async (req: Request, res: Response) => {
  try {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      res.status(400).json({ message: "Hooson utga bj bolohgui" });
    }

    const createUser = await User.create({
      name,
      email,
      password,
      phoneNumber: "",
    });
    res.status(201).json({ message: "Success", user: createUser });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};
