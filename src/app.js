import express from 'express';
import bodyParser from 'body-parser';

import cors from './middleware/cors';
import requestLogger from './middleware/requestLogger';

import db from './db';

import router from './routes/foods';

const app = express();
const PORT = process.env.PORT || 7070;

app.use(cors);
app.use(bodyParser.json());
app.use(requestLogger);

app.use('/food', router);

app.listen(PORT, () => {
  console.log(`${process.env.npm_package_name} listening on port ${PORT} 🚀`)
});
