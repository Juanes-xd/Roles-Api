import { Router } from "express";
import {
  getProduct,
  getProducts,
  createProduct,
  deleteProduct,
  updateProduct,
} from "../controllers/products.controller.js";
import { authJwt } from "../middlewares";
const router = Router();

router.get("/products", getProducts);
router.get("/product/:id", getProduct);
router.post("/product", [authJwt.verifyToken, authJwt.isAdmin], createProduct);
router.delete(
  "/product/:id",
  [authJwt.verifyToken, authJwt.isAdmin],
  deleteProduct
);
router.put(
  "/product/:id",
  [authJwt.verifyToken, authJwt.isAdmin],
  updateProduct
);

export default router;
