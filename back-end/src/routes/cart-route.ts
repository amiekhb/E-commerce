import { Router } from "express";
import { createCart, getUserCart } from "../controllers/cart-controller";
import { auth } from "../middlewares/authorization";

const router = Router();

router.route("/create-cart").post(createCart);
router.route("/get-cart").get(auth, getUserCart);

export default router;
