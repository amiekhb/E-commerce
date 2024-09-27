import { Request, Response } from "express";
import Category from "../models/category.model";

export const getAllCategories = (req: Request, res: Response) => {
  Category.create(req.body);
  res.status(200).json({
    message: "All category is read successfully",
  });
};

export const createCategory = (req: Request, res: Response) => {
  res.status(200).json({
    message: "New category is created successfully",
  });
};
