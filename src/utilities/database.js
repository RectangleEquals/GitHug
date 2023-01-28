const mongoose = require('mongoose');

const connect = async function(resolve, reject)
{
  const uri = `mongodb+srv://${process.env.MONGODB_USER}:${process.env.MONGODB_PASS}@${process.env.MONGODB_URL}/${process.env.MONGODB_DB}?retryWrites=true&w=majority&compressors=snappy`;
  mongoose.set('strictQuery', true);
  const options = {
    auth: {
      authdb: process.env.MONGODB_DB,
      username: process.env.MONGODB_USER,
      password: process.env.MONGODB_PASS
    },
    authSource: "admin",
    useNewUrlParser: true,
    useUnifiedTopology: true
  };

  this.connection = mongoose.connect(uri, options, (error) => {
    if(error !== undefined && error !== null) {
      reject(error);
      return;
    }
    resolve();
  });
}

module.exports = { connect };