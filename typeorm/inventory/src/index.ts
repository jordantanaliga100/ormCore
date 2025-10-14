import app from "./app";
import { connectDataSource } from "./config/data-source";

// SERVER INSTANCE
const port = process.env.PORT || 5000;

const start = async () => {
  try {
    await connectDataSource();
    app.listen(port, () => {
      console.log("Server started at " + port + " and connected to DB !!");
    });
  } catch (error) {
    console.log(error);
  }
};
start();
console.log("... on " + process.env.NODE_ENV + " environment 🚀");
