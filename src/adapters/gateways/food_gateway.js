class FoodGateway {
  constructor({ dbClient }) {
    Object.assign(
      this,
      {
        dbClient,
        dbName: 'nutra',
        collection: 'foods',
      },
    );
  }

  findByName({ nameRegex }) {
    return this.dbClient
      .db(this.dbName)
      .collection(this.collection)
      .find({
        nameRegex,
      })
      .toArray();
  }
}

export default FoodGateway;
