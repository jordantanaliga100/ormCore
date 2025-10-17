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
app.get("/api/v1/docs", (req: Request, res: Response) => {
  res.send(`
    <h3> 
    API Dcoumentation
    </h3>
    <p> This route is for the API Documentation...</p>
    <small>working on it...</small>
      <br/>
      <br/>
    <a href="/api/v1">Go to Index</a>
    `);
});
app.get("/api/v1", (req: Request, res: Response) => {
  res.send(`
    <h3>
    Node_Express Server Alive 🛩️
    
    </h3>
    <h6>
    THIS IS FROM LIBRARY 🔥
    </h6>
    <a href="/api/v1/docs">Go to Documentation</a>
    `);
});

export default app;
