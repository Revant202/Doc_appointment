const express = require('express');
const { categoryList } = require('./dummyData/categoryData.js');
const { doctorList } = require('./dummyData/doctorData');
const app = express();
const PORT = 3001;
const cors = require('cors');
app.use(cors());

app.use(express.json());
app.get('/api/categories', (req, res) => {
  res.json(categoryList);
});

app.get('/api/doctors/:category', (req, res) => {
  const category = req.params.category;
  const doctorsInCategory = doctorList.filter((doctor) => doctor.doctorType.toLowerCase() === category.toLowerCase());
  res.json(doctorsInCategory);
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
