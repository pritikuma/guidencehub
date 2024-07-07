const errorMiddleware = (err,req,res,next) => {
    const status = err.status || 500;
    const message = err.message || "bakend error";
    const extraDetails = err.extraDetails || "Error from Bakend";
    return res.status(status).json({message,extraDetails});
};
module.exports = errorMiddleware;