import { Router } from "express";
import { login, signup, currentUser } from "../controllers/auth-controller";
import { auth } from "../middlewares/auth";

const router = Router();

router.route("/current-user").get(auth, currentUser);
router.route("/signup").post(signup);
router.route("/login").post(login);

export default router;
