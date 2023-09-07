import "dotenv/config";
import express from "express";
import cors from "cors";
import logger from "./utils/logger";
import { connect } from "./utils/database.connection";

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.listen(PORT, () => {

  // Start the server
  logger.info(`Server started on port ${PORT}`)

  //connect db
  connect();
});

//connect with frontend
app.get("/getData", (req, res) => {
  res.send("Hello I'm from backend");
});

