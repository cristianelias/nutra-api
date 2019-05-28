import mongoose, { Schema } from 'mongoose';

import NutritionInfoSchema from '../schemas/nutrition_info_schema';

const FoodSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  nutritionInfo: NutritionInfoSchema,
  creationDate: {
    type: Date,
    default: Date.now,
  },
});

const Food = mongoose.model('food', FoodSchema);

export default Food;
