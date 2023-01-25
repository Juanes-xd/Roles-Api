import { Router } from "express";
import { createUser, getUsers } from "../controllers/user.controller.js";
import { isAdmin, verifyToken } from "../middlewares/authJwt.js";
import { checkDuplicateUser } from "../middlewares/verifySignup.js";
const router = Router();

router.post("/user", [verifyToken, isAdmin, checkDuplicateUser], createUser);

router.get("/users", getUsers);

export default router;
