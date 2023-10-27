const express =require("express")
const router = express.Router()
const {addDoctor} = require('../controllers/doctor_cont')
router.post("/insert",addDoctor);

module.exports =router;