import express from 'express';
import bodyParser from 'body-parser';
import cors from './middleware/cors';
import requestLogger from './middleware/requestLogger';
import dbClient from './db/db_client';

// adapters
import FoodController from '../adapters/controllers/food_controller';
import FoodGateway from '../adapters/gateways/food_gateway';

const app = express();
const PORT = process.env.PORT || 8080;

app.use(cors);
app.use(bodyParser.json());
app.use(requestLogger);

const foodController = new FoodController({
  gateway: new FoodGateway({ dbClient }),
});

app.get('/foods', (req, res) => foodController.searchFood(req, res));
app.post('/foods', (req, res) => foodController.createFood(req, res));

/* eslint-disable no-console */
app.listen(PORT, () => {
  console.log(`${process.env.npm_package_name} listening on port ${PORT} 🚀`);
});
