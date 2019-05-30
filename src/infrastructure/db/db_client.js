import { MongoClient } from 'mongodb';

const uri = process.env.NUTRA_MONGO_URI;
const dbClient = new MongoClient(uri, { useNewUrlParser: true });

/* eslint-disable no-console */
dbClient.connect()
  .then(() => console.log(`Successfully connected to ${uri}`))
  .catch(err => console.log(`It's been an error while trying to connect to the db. Log: ${err}`));

export default dbClient;
