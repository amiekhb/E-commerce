import { Request, Response } from "express";
import Category from "../models/category.model";

export const getAllCategories = async (req: Request, res: Response) => {
  const categories = await Category.find({});

  res.status(200).json({
    message: "All category is read successfully",
    category: categories,
  });
};

export const createCategory = async (req: Request, res: Response) => {
  const { name, description } = req.body;
  if (!name || !description) {
    res.status(400).json({
      message: "Hooson bj bolohgui",
    });
  }
  const createdCategory = await Category.create({ name, description });
  res.status(200).json({
    message: "New category is created successfully",
    category: createdCategory,
  });
};
