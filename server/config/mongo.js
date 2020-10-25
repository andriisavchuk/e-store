const mongoose = require('mongoose');
const DB_URL = process.env.MONGO_URI;

const connectDB = async () => {
  mongoose.Promise = global.Promise;
  let dbStatus = '';
  let dbHost = '';
  try {
    const connectionObject = await mongoose.connect(process.env.MONGO_URI, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
      useCreateIndex: true,
    });

    dbHost = `${connectionObject.connection.host}`.cyan.underline;
    dbStatus =
      `*    DB Connection: ` + `OK`.green + `\n****************************\n`;

    console.log(`*    Database: ` + `MongoDB`.yellow);
    console.log(`*    DB Host: ${dbHost}`);
    console.log(dbStatus);
  } catch (error) {
    dbStatus =
      `*    Error connecting to DB: ` +
      `${error.message}`.red +
      `\n****************************\n`;
    console.log(`*    Database: ` + `MongoDB`.yellow);
    console.log(dbStatus);
    process.exit(1);
  }
};

module.exports = connectDB;
