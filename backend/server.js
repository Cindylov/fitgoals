const express = require('express');
require('dotenv').config();
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');

const activitiesRouter = require('./routes/activities');  
const goalsRouter = require('./routes/goals');            

const app = express();
app.use(cors({ origin: 'https://fitgoals.onrender.com' }));
app.use(bodyParser.json());

mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected'))
.catch((err) => console.log(err));

const PORT = process.env.PORT || 5000;

app.use('/api/activities', activitiesRouter);
app.use('/api/goals', goalsRouter);

app.use(express.static(path.join(__dirname, '../frontend/build')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../frontend/build', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
