/* eslint-disable no-underscore-dangle */
class Food {
  constructor(foodData) {
    Object.assign(
      this,
      {
        name: foodData.name,
        nutritionInfo: foodData.nutritionInfo,
        creationDate: foodData.creationDate,
        _id: foodData._id,
      },
    );
  }

  setCreationDate(creationDate) {
    this.creationDate = creationDate;
  }

  asJSON() {
    return {
      name: this.name,
      nutritionInfo: this.nutritionInfo,
      creationDate: this.creationDate,
      _id: this._id,
    };
  }
}

export default Food;
