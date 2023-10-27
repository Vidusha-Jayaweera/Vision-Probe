import "dotenv/config";
import express from "express";
import cors from "cors";
import logger from "./utils/logger";
import { connect } from "./utils/database.connection";
import resultsRoutes from "./routes/colorblindessRoute";

const http = require('http')
const bodyParser = require('body-parser')
const mongoose = require('mongoose') //mongo db library
 //Cors will let us accept cross origin request from our frontend to backend.
const dotenv = require('dotenv') //for keep secret and non shareable properies
const multer = require('multer') //Multer is a middleware that will let us handle multipart/form data sent from our frontend form.
const morgan = require('morgan') //used to log information of each request that server receives.
var forms = multer();
// const config = require('./config');





// const server = http.createServer(app)

// //api configuration
// app.use(express.json({extended : true}))
// app.use(express.urlencoded({extended : true}))
// app.use(forms.array()); 
// app.use(bodyParser.json({limit : '30mb', extended : true}))
// app.use(bodyParser.urlencoded({limit : '30mb', extended : true}))
// app.use(morgan("common"))
// dotenv.config()

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(function(req, res,next){
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'content-type');
  next();
});
app.use(express.json());

const doctorRoutes = require('./routes/doctor_route.js');
app.use('/api', doctorRoutes);
app.use('/results', resultsRoutes);

// vidusha
//middlewares
app.use(express.json());
// app.use(morgan("dev"));

//routes
app.use("/api/v1/user", require("./routes/userRoutes"));
app.use("/api/v1/admin", require("./routes/adminRoutes"));
app.use("/api/v1/doctor", require("./routes/doctorRoutes"));


//patient
const crypto = require('crypto');
const expressSession = require('express-session');
const userRoutes = require('./routes/patientRoute');


// Generate a random secret key for sessions
const secretKey = crypto.randomBytes(32).toString('hex');

// Configure express-session middleware
app.use(
  expressSession({
    secret: secretKey,
    resave: false,
    saveUninitialized: false,
    cookie: { maxAge: 1000 * 60 * 60 }, // Session duration in milliseconds (1 hour)
  })
);
app.use('/api/patient', userRoutes);



app.listen(PORT, () => {

  // Start the server
  logger.info(`Server started on port ${PORT}`)

  //connect db
  connect();
});

//connect with frontend
// app.get("/getData", (req, res) => {
//   res.send("Hello I'm from backend");
// });

