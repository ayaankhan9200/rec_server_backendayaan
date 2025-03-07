import cors from "cors";
import express from "express";
import mongoose from "mongoose";
import { recipesRouter } from "./routes/recipes.js";
import { userRouter } from "./routes/user.js";

const app = express();

app.use(express.json());
app.use(cors());

app.use("/auth", userRouter);
app.use("/recipes", recipesRouter);

mongoose.connect(
  "mongodb+srv://ayaankh9200:ayaankhan9200@clusterayaan1.uejwt.mongodb.net/?retryWrites=true&w=majority&appName=Clusterayaan1",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }).then(
    console.log("DB connected...")
  )

app.listen(3000, () => console.log("Server started"));
