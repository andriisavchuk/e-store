const mongoose = require('mongoose');
const DB_URL = process.env.MONGO_URI;

const connectDB = async () => {
  mongoose.Promise = global.Promise;
  let dbStatus = '';
  try {
    const connectionObject = await mongoose.connect(process.env.MONGO_URI, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
      useCreateIndex: true,
    });

    dbStatus = `*    DB Connection: OK\n****************************\n`;

    console.log(`*    Database: MongoDB`);
    console.log(`*    DB Host: ${connectionObject.connection.host}`);
    console.log(dbStatus);
  } catch (error) {
    dbStatus = `*    Error connecting to DB: ${error.message}\n****************************\n`;

    console.log(`*    DB Host: ${connectionObject.connection.host}`);
    console.log(dbStatus);
    process.exit(1);
  }
};

module.exports = connectDB;
