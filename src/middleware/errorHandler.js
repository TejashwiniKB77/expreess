import ErrorLog from "../models/ErrorLog.js";

const errorHandler = async (err, req, res, next) => {
  const statusCode = err.statusCode || 500;

  // Categorize error
  let category = "runtime";
  if (statusCode === 400) category = "validation";
  else if (statusCode === 401) category = "auth";
  else if (statusCode === 404) category = "not_found";
  else if (statusCode >= 500) category = "database";

  // Save error to DB
  await ErrorLog.create({
    message: err.message,
    endpoint: req.originalUrl,
    method: req.method,
    statusCode,
    category
  });

  // Send clean response
  res.status(statusCode).json({
    success: false,
    message: err.message
  });
};

export default errorHandler;
