import { Router } from "express";
import { createUser } from "../controllers/user.controller.js";
import { authJwt, verifySignup } from "../middlewares";
const router = Router();

router.post(
  "/users",
  [authJwt.verifyToken, authJwt.isAdmin, verifySignup.checkRolesExisted],
  createUser
);

export default router;
