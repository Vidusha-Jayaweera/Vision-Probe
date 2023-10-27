import Doctor from "../models/doctor_model";

const addDoctor = async (req, res) => {
    try {
      // Extract doctor data from the request body
      const { name, nic, experience, emailAddress } = req.body;
  
      // Create a new doctor instance and save it to the database
      const newDoctor = new Doctor({ name, nic, experience, emailAddress });
      await newDoctor.save();
      console.log('Doctor added successfully:', newDoctor);

      // Send a success response with a custom message and the created doctor data
      res.status(201).json({ message: 'Doctor added successfully', data: newDoctor });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
};

module.exports = {
  addDoctor,
  // Define more controller functions as needed
};
