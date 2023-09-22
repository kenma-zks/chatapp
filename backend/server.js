import express from "express";
import connectDb from "./config/dbConnection.js";
import dotenv from "dotenv";
import userRoutes from "./routes/userRoutes.js";
import cors from "cors";

dotenv.config();
connectDb();
const app = express();

app.use(express.json());
app.use(cors());
app.use("/api/users", userRoutes);
const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
