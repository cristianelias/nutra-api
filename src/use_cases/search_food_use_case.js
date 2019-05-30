import Food from '../entities/Food';

class SearchFoodUseCase {
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
    const foodName = this.req.query.name;

    if (!foodName) {
      this.res.status(422).json({ message: 'Missing parameter [name] in request.' });
    }

    this.gateway.findByName({ name: new RegExp(foodName, 'i') })
      .then((foodsFromGateway) => {
        if (foodsFromGateway.length === 0) {
          this.res.status(404).json({ message: `Unable to find a food matching ${foodName}` });
        } else {
          const foodList = foodsFromGateway.map(foodData => new Food(foodData));
          const serializedFood = foodList.map(food => food.asJSON());

          this.res.status(200).json(serializedFood);
        }
      })
      .catch(err => this.res.status(500).json({ message: `An error has ocurred when trying to retrieve your food. Error log: ${err}` }));
  }
}

export default SearchFoodUseCase;
