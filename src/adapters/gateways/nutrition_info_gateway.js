import mongoose from 'mongoose';
import NutritionInfoSchema from '../schemas/nutrition_info_schema';

const NutritionInfoModel = mongoose.model('NutritionInfo', NutritionInfoSchema);

export default NutritionInfoModel;
