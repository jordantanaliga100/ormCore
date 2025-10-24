import express, { Express, Request, Response } from "express";

const app: Express = express();

app.get("/", (req: Request, res: Response) => {
  const viaProxy = req.headers["x-via-proxy"] || "(Docker Node)";

  console.log("=== Incoming Request ===");
  console.log("Via Proxy:", viaProxy);
  console.log("=======================");

  res.send(`
    <code>
Server Running 🔥🔥🔥
Source: ${viaProxy}
    </code>
  `);
});

export default app;
