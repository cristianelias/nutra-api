import { Schema } from 'mongoose'

const NutritionInfoSchema = new Schema({
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
}) 

export default NutritionInfoSchema