import { Router } from "express";
import {
  getProduct,
  getProducts,
  createProduct,
  deleteProduct,
  updateProduct,
} from "../controllers/products.controller.js";
import { verifyToken, isAdmin } from "../middlewares/authJwt.js";
const router = Router();

router.get("/products", getProducts);
router.get("/product/:id", getProduct);
router.post("/product", [verifyToken, isAdmin], createProduct);
router.delete("/product/:id", [verifyToken, isAdmin], deleteProduct);
router.put("/product/:id", [verifyToken, isAdmin], updateProduct);

export default router;
