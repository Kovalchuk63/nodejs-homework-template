import mongoose from "mongoose";
import app from "./app.js";

const DB_HOST =
  "mongodb+srv://Mushka4763:Mushka4763@cluster0.wkadonx.mongodb.net/db-contacts?retryWrites=true&w=majority";

mongoose
  .connect(DB_HOST)
  .then(() => {
    app.listen(3000, () => {
      console.log(
        `Database connection successful. Server running on port: 3000 `
      );
    });
  })
  .catch((error) => {
    console.log(error.message);
    process.exit(1);
  });
