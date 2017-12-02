const requestLogger = (req, res, next) => {  
  console.log(`HTTP Method: /${req.method}`);
  console.log(`Time: ${Date.now()}`);

  next();
};

export default requestLogger;

