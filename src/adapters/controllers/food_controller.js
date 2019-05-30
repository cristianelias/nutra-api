import FoodSearchUseCase from '../../use_cases/search_food_use_case';

class FoodController {
  constructor({ gateway }) {
    Object.assign(
      this,
      {
        gateway,
      },
    );
  }

  handle(req, res) {
    const foodSearchUseCase = new FoodSearchUseCase({
      req,
      res,
      gateway: this.gateway,
    });

    foodSearchUseCase.execute();
  }
}

export default FoodController;
