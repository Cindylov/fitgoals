const express = require('express');
require('dotenv').config();
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');

const activityRoutes = require('./routes/activities');  
const goalsRouter = require('./routes/goals');  

const app = express();
app.use(cors());
app.use(bodyParser.json());

console.log('MONGODB_URI:', process.env.MONGODB_URI);

mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected'))
.catch((err) => console.log(err));

const PORT = process.env.PORT || 5000;

app.use('/api/activities', activityRoutes);  
app.use('/api/goals', goalsRouter);  


// const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
