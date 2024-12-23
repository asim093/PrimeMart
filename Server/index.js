import express from "express";
import cors from "cors";
import Userroutes from "./src/routes/UserRoutes.js";
import dotenv from "dotenv";
import connectDb from "./src/db/Index.js";
dotenv.config();

const app = express();
const PORT = 3000;
app.use(cors());

app.use(express.json());
app.use("/user", Userroutes);



connectDb()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server listening on PORT http://localhost:${PORT}`);
    });
  })
  .catch(() => {
    console.error("Failed to connect to the database.");
    process.exit(1); 
  });
