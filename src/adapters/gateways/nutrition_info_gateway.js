import mongoose from 'mongoose' 
import NutritionInfoSchema from '../schemas/nutrition_info_schema'

export const NutritionInfoModel = mongoose.model('NutritionInfo', NutritionInfoSchema) 
