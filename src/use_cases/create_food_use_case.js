import Food from '../entities/Food';

class CreateFoodUseCase {
  constructor({
    req,
    res,
    foodGateway,
  }) {
    Object.assign(
      this,
      {
        req,
        res,
        foodGateway,
      },
    );
  }

  execute() {
    // const foodFromRequest = new Food(this.req.body);

    // this.foodGateway.save(foodFromRequest)
    //   .then((foodDataFromGateway) => {
    //     const createdFood = new Food(foodDataFromGateway);
    //     this.res.status(201).json(createdFood.asJSON());
    //   })
    //   .catch((error) => {
    //     this.res.status(400).json({ message: `An error has ocurred when trying to create your food. Error log: ${error}` });
    //   });
  }
}

export default CreateFoodUseCase;
