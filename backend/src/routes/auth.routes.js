import { Router } from "express";
import {
  resgister,
  login,
  logout,
  profile
} from "../controllers/auth.controller.js";
import { authRequired} from "../middlewares/validateToken.js";
import { validateSchema } from "../middlewares/validator.middleware.js";
import { registerSchema, LoginSchema } from "../schemas/auth.schema.js";

const router = Router();

router.post("/register", validateSchema(registerSchema), resgister);

router.post("/login", validateSchema(LoginSchema), login);

router.post("/logout", logout);

router.get("/profile", authRequired, profile);



export default router;
