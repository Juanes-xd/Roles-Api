import express from "express";
import morgan from "morgan";
import productsRoutes from "./routes/products.routes.js";
import authRoutes from "./routes/auth.routes.js";
import { createRole } from "./libs/initialSetup.js";

const app = express();
createRole();

app.use(morgan("dev"));
app.use(express.json());
app.get("/", (req, res) => {
  res.json("welcome");
});

app.use(productsRoutes);
app.use(authRoutes);

export default app;
