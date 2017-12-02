import mongoose, { Schema } from 'mongoose';

import { NutritionValuesSchema } from './NutritionValues';

const FoodSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  selectedNutritionalValues: NutritionValuesSchema,
  nutritionalValues: [NutritionValuesSchema],
  creationDate: { 
    type: Date, 
    default: Date.now 
  }
});

const Food = mongoose.model('food', FoodSchema);

export default Food;
