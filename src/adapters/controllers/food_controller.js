import FoodSearchUseCase from '../../use_cases/search_food_use_case'
import FoodGateway from '../gateways/food_gateway'

class FoodController {
  static handle(req, res) {
    const foodSearchUseCase = new FoodSearchUseCase({
      req,
      res,
      foodGateway: FoodGateway
    })
  
    foodSearchUseCase.execute()
  }
}

export default FoodController