class FoodGateway {
  constructor({ dbClient }) {
    Object.assign(
      this,
      {
        dbClient,
        dbName: 'nutra',
      },
    );
  }

  collection() {
    return this.dbClient.db(this.dbName).collection('foods');
  }

  findByName({ nameRegex }) {
    return this.collection().find({ nameRegex }).toArray();
  }

  createFood({ food }) {
    const dateString = new Date(Date.now()).toISOString();
    food.setCreationDate(dateString);

    return this.collection().insertOne(food.asJSON());
  }
}

export default FoodGateway;
