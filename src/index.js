import connectDB from "../src/db/index.js";
import dotenv from "dotenv";
import app from "./App.js";

dotenv.config({
  path: "./env",
});

connectDB()
  .then(() => {
    // app.on(`error`, (error) => {
    //   console.log(`error==>${error}`);
    // });
    app.listen(process.env.PORT || 8000, () => {
      console.log(`DB connect successfully at port ${process.env.PORT} `);
    });
  })
  .catch((error) => {
    console.log(`DB connection failed ${error}`);
  });
