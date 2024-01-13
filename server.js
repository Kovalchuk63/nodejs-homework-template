import mongoose from "mongoose";
import app from "./app.js";

const { DB_HOS, PORT = 3000 } = process.env;

mongoose
  .connect(DB_HOST)
  .then(() => {
    app.listen(3000, () => {
      console.log(
        `Database connection successful. Server running on port: ${PORT} `
      );
    });
  })
  .catch((error) => {
    console.log(error.message);
    process.exit(1);
  });
