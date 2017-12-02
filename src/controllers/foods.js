import Food from '../models/Food';

const sendJSON = (res, status, content) => {
  res.status(status);
  res.json(content);
};

export const search = (req, res) => {
  const query = req.query.name;

  if (!query) {
    sendJSON(res, 422, { 'message': 'Missing parameter [name] in request.' });
  }

  Food.find({
      name: new RegExp(query, 'i')
    })
    .then((result) => {
      if (result.length === 0) {
        sendJSON(res, 404, { 'message': `Unable to find a food matching ${query}` });
      } else {
        sendJSON(res, 200, result);
      }
    })
    .catch(err => sendJSON(res, 500, { 'message': `An error has ocurred when trying to retrieve your food. Error log: ${err}` }));
};

export const create = (req, res) => {
  const foodModel = new Food(req.body);

  foodModel.save((error, foodInstance) => {
      if(error) {
        sendJSON(res, 400, { 'message': `An error has ocurred when trying to create your food. Error log: ${error}` });
      } else {
        sendJSON(res, 201, foodInstance);
      }
  });
};

export const read = (req, res) => {  
  Food.findById(req.params.id)
    .then((food) => {
      if (food) {
        sendJSON(res, 200, food);
      } else {
        sendJSON(res, 404, { 'message': `Unable to find a food with id: ${req.params.id}` });
      }
    })
    .catch((error) => sendJSON(res, 500, { 'message': `An error has ocurred when trying to obtain your food: ${error}` }));
};

export const update = (req, res) => {
  Food.findByIdAndUpdate(req.params.id, { $set: req.body })
    .then((food) => {
      res.sendStatus(204);
    })
    .catch((error) => sendJSON(res, 404, { 'message': `An error has ocurred when trying to update your food: ${error}` }));
};

export const destroy = (req, res) => {
  Food.findByIdAndRemove(req.params.id)
    .then((deletedFood) => {
      if (deletedFood) {
        res.sendStatus(204);
      } else {
        sendJSON(res, 404, { 'message': `Unable to find a food with id: ${req.params.id}` });
      }
    })
    .catch(error => sendJSON(res, 500, { 'message': `An error has ocurred when trying to delete your food: ${error}` }));
};
