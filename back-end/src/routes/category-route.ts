import { Router } from "express";
import {
  createCategory,
  getAllCategories,
} from "../controllers/category-controller";

const router = Router();

router.route("/").get(getAllCategories);
router.route("/").post(createCategory);

export default router;
