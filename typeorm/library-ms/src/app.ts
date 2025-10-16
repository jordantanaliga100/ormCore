// IMPORTS
import cors from "cors";
import dotenv from "dotenv";
import express, { Express, Request, Response } from "express";

// ENV CONFIG
const nodeEnv = process.env.NODE_ENV || "development";
const envFile = nodeEnv === "production" ? ".env.prod" : ".env.local";
dotenv.config({ path: envFile });
console.log(`✅ Loaded envFile`);
console.log("... on " + nodeEnv + " environment 🚀");

const app: Express = express();

// TOP MIDDLEWARES
app.use(
  cors({
    origin: "*",
    methods: ["GET", "POST", "PATCH", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true,
  })
);
app.use(express.json());
app.use(express.static("./public"));
app.use(express.urlencoded({ extended: true }));

// ROUTES
app.get("/", (req: Request, res: Response) => {
  // throw new Error("Testing gin index");
  res.send("Node_Express Server Alive 🛩️, THIS IS FROM LIBRARY 🔥");
});

export default app;
