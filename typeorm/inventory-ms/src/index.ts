import app from "./app";
import { connectDataSource } from "./config/data-source";

// SERVER INSTANCE
const port = Number(process.env.PORT) || 5000;

const start = async () => {
  try {
    await connectDataSource();
    app.listen({ port: port, host: "0.0.0.0" }, () => {
      console.log("Server started at " + port + " and connected to DB !!");
    });
  } catch (error) {
    console.log(error);
  }
};
start();
console.log("... on " + process.env.NODE_ENV + " environment 🚀");
