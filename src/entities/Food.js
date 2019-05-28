class Food {
  constructor(foodData) {
    Object.assign(
      this,
      {
        name: foodData.name,
        nutritionInfo: foodData.nutritionInfo,
        creationDate: foodData.creationDate,
      },
    );
  }

  asJSON() {
    return {
      name: this.name,
      nutritionInfo: this.nutritionInfo,
      creationDate: this.creationDate,
    };
  }
}

export default Food;
