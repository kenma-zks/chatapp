import constants from "../constants.js";

const errorHandler = (err, req, res, next) => {
  console.log("I am in error handler");
  const statusCode = res.statusCode ? res.statusCode : 500;
  switch (statusCode) {
    case constants.VALIDATION_ERROR:
      return res.json({
        title: "Validation Failed",
        message: err.message,
        stackTrace: err.stack,
      });
    case constants.NOT_FOUND:
      return res.json({
        title: "Not Found",
        message: err.message,
        stackTrace: err.stack,
      });
    case constants.UNAUTHORIZED:
      return res.json({
        title: "Un Authorized",
        message: err.message,
        stackTrace: err.stack,
      });
    case constants.FORBIDDEN:
      return res.json({
        title: "Forbidden",
        message: err.message,
        stackTrace: err.stack,
      });
    case constants.SERVER_ERROR:
      return res.json({
        title: "Server Error",
        message: err.message,
        stackTrace: err.stack,
      });

    default:
      return res.json({
        title: "Something went wrong",
        message: err.message,
        stackTrace: err.stack,
      });
  }
};

export default errorHandler;
