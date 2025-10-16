// IMPORTS
import dotenv from "dotenv";
import express, { Express, Request, Response } from "express";
import morgan from "morgan";

// ENV CONFIG
const nodeEnv = process.env.NODE_ENV || "development";
const envFile = nodeEnv === "production" ? ".env.prod" : ".env.local";
dotenv.config({ path: envFile });
console.log(`✅ Loaded envFile`);
console.log("... on " + nodeEnv + " environment 🚀");

const app: Express = express();

// TOP MIDDLEWARES
app.use(morgan("dev"));
app.set("trust proxy", 1);
app.use(express.json());
app.use(express.static("./public"));
app.use(express.urlencoded({ extended: true }));

// ROUTES
app.get("/api/v1/docs", (req: Request, res: Response) => {
  res.send(`
    <h1> 
    API Dcoumentation
    </h1>
    <pre> This route is for the API Documentation...</pre>
    <small>working on it</small>
      <br/>
      <br/>
    <a href="/api/v1">Go to Index</a>
    `);
});
app.get("/api/v1", (req: Request, res: Response) => {
  res.send(`
    <h3>
    Node_Express Server Alive 🛩️, THIS IS FROM INVENTORY 🔥
    
    </h3>
    <a href="/api/v1/docs">Go to Documentation</a>
    `);
});

// BOTTOM MIDDLEWARES
export default app;
