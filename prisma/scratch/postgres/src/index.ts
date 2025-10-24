import "dotenv/config";
import app from "./app";

const PORT = Number(process.env.APP_PORT) || 5000;
const start = async () => {
  try {
    app.listen(PORT, "0.0.0.0", () => {
      console.log(`Server Alive 🚀 on http://0.0.0.0:${PORT}`);
    });
  } catch (error) {
    console.log(`ERROR`, error);
  }
};

start();
