const config = require('../config');
const mongoose = require('mongoose');
require('dotenv').config();

const mongoString = process.env.DATABASE_URL

mongoose.connect(mongoString);
const database = mongoose.connection

database.on('error', (error) => {
  console.log(error)
})

database.once('connected', () => {
  console.log('Database Connected');
  console.log(database)
})

module.exports = {
  database
}