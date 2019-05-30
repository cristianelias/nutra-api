import SearchFoodUseCase from '../../use_cases/search_food_use_case';
import CreateFoodUseCase from '../../use_cases/create_food_use_case';

class FoodController {
  constructor({ gateway }) {
    Object.assign(
      this,
      {
        gateway,
      },
    );
  }

  searchFood(req, res) {
    const searchFoodUseCase = new SearchFoodUseCase({
      req,
      res,
      gateway: this.gateway,
    });

    searchFoodUseCase.execute();
  }

  createFood(req, res) {
    const createFoodUseCase = new CreateFoodUseCase({
      req,
      res,
      gateway: this.gateway,
    });

    createFoodUseCase.execute();
  }
}

export default FoodController;
