import mongoose from 'mongoose';

mongoose.Promise = Promise;

const uri = process.env.MONGODB_URI;

mongoose.connect(uri, { useNewUrlParser: true })
  .then(() => console.log(`Successfully connected to ${uri}`))
  .catch((err) => console.log(`It's been an error while trying to connect to the db. Log: ${err}`));
