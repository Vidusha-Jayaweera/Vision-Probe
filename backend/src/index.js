import "dotenv/config";
import express from "express";
import cors from "cors";
import logger from "./utils/logger";
import { connect } from "./utils/database.connection";
const bodyParser = require('body-parser');
const app = express();
const PORT = process.env.PORT || 5000;

app.use(bodyParser.json({limit: "50mb"}));
app.use(bodyParser.urlencoded({limit: "50mb", extended: true, parameterLimit:50000}));
app.use(express.json());
app.use(cors());

//importing the products route
const ProductRoute = require('./routes/Products')
app.use('/marketplace', ProductRoute)

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

