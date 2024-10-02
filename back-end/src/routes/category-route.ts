import { Router } from "express";
import {
  createCategory,
  getAllCategories,
} from "../controllers/category-controller";

const router = Router();

router.route("/category").get(getAllCategories);
router.route("/category").post(createCategory);

export default router;
