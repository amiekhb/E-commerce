import { Request, Response } from "express";
import User from "../models/user.model";
import bcrypt from "bcrypt";
import { generateToken } from "../utils/jwt";
import { sendEmail } from "../utils/send-email";
import crypto from "crypto";

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
        const token = generateToken({ id: user._id });
        res.status(200).json({ message: "Amjilttai nevterlee", token });
      }
    }
  } catch (error) {
    res.status(404).json({ message: "Error" });
  }
};

export const currentUser = async (req: Request, res: Response) => {
  const { id } = req.user;
  const findUser = await User.findById(id);
  res.status(200).json({ user: findUser, message: "Success" });
};

export const forgetPassword = async (req: Request, res: Response) => {
  try {
    const { email } = req.body;
    const findUser = await User.findOne({ email: email });
    if (!findUser) {
      return res
        .status(400)
        .json({ message: "Бүртгэлтэй хэрэглэгч олдсонгүй" });
    }
    const otp = Math.floor(Math.random() * 10_000)
      .toString()
      .padStart(4, "0");
    // findUser.otp = otp;
    await findUser.save();
    await sendEmail(email, otp);
    res.status(200).json({ message: "OTP code is sent email successfully" });
  } catch (error) {}
};

export const verifyOtp = async (req: Request, res: Response) => {
  const { email, otpValue } = req.body;

  const findUser = await User.findOne({ email: email, otp: otpValue });
  if (!findUser) {
    return res
      .status(400)
      .json({ message: "Бүртгэлтэй хэрэглэгч эсвэл OTP код олдсонгүй" });
  }

  //sendEmail
  const resetToken = crypto.randomBytes(25).toString("hex");
  const hashedResetToken = crypto
    .createHash("sha256")
    .update(resetToken)
    .digest("hex");
  // findUser.passwordResetToken = hashedResetToken;
  // findUser.passwordResetTokenExpire = new Date(Date.now() + 10 * 60 * 1000);
  await findUser.save();

  console.log("RT", resetToken);
  await sendEmail(
    email,
    `<a href="http://localhost:3000/forgetpass/newpass?resettoken=${resetToken}"&email=${email}>Нууц үг сэргээх холбоос</a>`
  );
  res.status(200).json({ message: "Нууц үг сэргээх имэйл илгээлээ" });
};

export const verifyPassword = async (req: Request, res: Response) => {
  const { password, resetToken } = req.body;

  const hashedResetToken = crypto
    .createHash("sha256")
    .update(resetToken)
    .digest("hex");

  const findUser = await User.findOne({
    passwordResetToken: hashedResetToken,
    passwordResetTokenExpire: { $gt: Date.now() },
  });

  if (!findUser) {
    return res
      .status(400)
      .json({ message: "Таны нууц үг сэргээх хугацаа дууссан байна:" });
  }

  findUser.password = password;
  await findUser.save();
  res.status(200).json({ message: "Нууц үг  амжилттэй сэргээлээ" });
};
export const updateUser = async (req: Request, res: Response) => {
  const { id } = req.params;
  const updatedUser = await User.findByIdAndUpdate(id, req.body, { new: true });
  res.status(200).json({
    message: "Хэрэглэгчийн мэдээлэл амжилттай шинэчлэгдлээ.",
    updatedUser,
  });
};
