function handleResponse(req, res, next) {
    res.success = (status, data, message) => {
        return res.status(status).json({
          success: true,
          data,
          message,
        });
    };
    
    res.error = (status, message, errors) => {
        if (status === 204) return res.status(204).send();
        return res.status(status).json({
          success: false,
          message,
          errors,
        });
    };
    
    next()
}

module.exports = handleResponse