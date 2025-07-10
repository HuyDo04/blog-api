const jwt = require("jsonwebtoken")

const expiresDefault = 30;
const JWT_SECRET = process.env.JWT_SECRET;

const signToken = (payload, expiresIn = expiresDefault) =>  {
    const token = jwt.sign(payload,JWT_SECRET, {expiresIn})
    return token
}

const verifyToken = (token) => {
    const decoded = jwt.verify(token, JWT_SECRET);
    return decoded
}

module.exports = {
    signToken,
    verifyToken
}