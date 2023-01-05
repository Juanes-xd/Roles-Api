import express from "express";
import morgan from "morgan";
import productsRoutes from "./routes/products.routes.js";

const app = express();

app.use(morgan("dev"));
app.use(express.json());
app.get("/", (req, res) => {
  res.json("welcome");
});

app.use(productsRoutes);

export default app;
