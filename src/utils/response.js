const success = (res, status, data, message) => {
  res.status(status).json({
    success: true,
    data,
    message,
  });
};

const error = (res, status, message, errors) => {
  if (status === 204) return res.status(204).send();
  res.status(status).json({
    success: false,
    message,
    errors,
  });
};

function paginate(res, items, total, page, limit) {
  success(res, 200, {
    items,
    pagination: {
      current_page: page,
      per_page: limit,
      total,
      last_page: Math.ceil(total / limit),
    },
  });
}

const response = {
  success,
  error,
  paginate,
};

module.exports = {
  response,
};
