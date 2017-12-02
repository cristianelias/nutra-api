import mongoose, { Schema } from 'mongoose';

export const NutritionValuesSchema = new Schema({
  unit: {
    type: String,
    required: true
  },
  type: {
    type: String,
    required: true
  },
  quantity: {
    type: Number,
    required: true
  },
  nutrition: {
    kcal: {
      type: Number,
      required: true
    },
    proteins: {
      type: Number,
      required: true
    },
    carbs: {
      type: Number,
      required: true
    },
    fats: {
      type: Number,
      required: true
    },
  }
},
{
  _id: false
});

export const NutritionValueModel = mongoose.model('NutritionValue', NutritionValuesSchema);
