// IMPORTS
import cors from "cors";
import dotenv from "dotenv";

import express, { Express, Request, Response } from "express";
// import morgan from "morgan";
import UserRoutes from "./app/users/user.route";

// ENV CONFIG
const nodeEnv = process.env.NODE_ENV || "development";
const envFile = nodeEnv === "production" ? ".env.prod" : ".env.local";
dotenv.config({ path: envFile });
console.log(`✅ Loaded envFile`);
console.log("... on " + nodeEnv + " environment 🚀");

const app = express() as Express;

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
// app.use(morgan("dev"));

// ROUTES
app.get("/", (req: Request, res: Response) => {
  // throw new Error("Testing gin index");
  res.send(`
    <pre>
    <h3>
    Node_Express Server Alive 🛩️
    </h3>
    <a href="/api-docs">API </a>
    </pre>
    `);
});
// ✅ SWAGGER DOCS
app.get("/api-docs", (req: Request, res: Response) => {
  res.send(`
    <a href="/"> Go back</a>
    <pre>
    API Docs here...
    </pre>
    `);
});

app.use("/api/v1/users", UserRoutes);

export default app;
