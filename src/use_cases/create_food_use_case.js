import Food from '../entities/Food';

class CreateFoodUseCase {
  constructor({
    req,
    res,
    gateway,
  }) {
    Object.assign(
      this,
      {
        req,
        res,
        gateway,
      },
    );
  }

  execute() {
    const foodFromRequest = new Food(this.req.body);

    this.gateway.createFood({ food: foodFromRequest })
      .then((resulFromGateway) => {
        // would this code benefit from using an interpreter ?
        // it might know gateway's specifics like "results.ops[0]"
        const foodFromGateway = new Food(resulFromGateway.ops[0]);
        this.res.status(201).json(foodFromGateway.asJSON());
      })
      .catch((error) => {
        this.res.status(400).json({ message: `An error has ocurred when trying to create your food. Error log: ${error}` });
      });
  }
}

export default CreateFoodUseCase;
