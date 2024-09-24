import { Request, Response } from "express";
import User from "../models/user.model";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const signup = async (req: Request, res: Response) => {
  try {
    const { firstname, lastname, email, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);

    if (!firstname || !lastname || !email || !password) {
      res.status(400).json({ message: "Hooson utga bj bolohgui" });
    }

    const createUser = await User.create({
      firstname,
      lastname,
      email,
      password,
      phoneNumber: "",
    });
    res.status(201).json({ message: "Success", user: createUser });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server error" });
  }
};

export const login = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      res.status(404).json({ message: "Hooson utga bj bolohgui" });
    }

    const user = await User.findOne({ email });
    if (!user) {
      res.status(400).json({ message: "Burtgel bhgui bn" });
    } else {
      const isCheck =
        user && bcrypt.compareSync(password, user.password.toString());
      if (!isCheck) {
        res.status(400).json({ message: "Nuuts ug buruu" });
      } else {
        const token = jwt.sign({ id: user._id }, "JWT_TOKEN_PASS@123", {
          expiresIn: "1h",
        });
        res.status(200).json({ message: "Amjilttai nevterlee", token });
      }
    }
  } catch (error) {
    res.status(404).json({ message: "Error" });
  }
};
