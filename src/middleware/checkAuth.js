const { verifyToken } = require("@/utils/jwt");
const userService = require("@/service/user.service")
const checkAuth = async (req, res, next) => {
    try {
        const token = req.headers?.authorization?.replace("Bearer ","");
        if(!token) return res.error(401, "Token does not exist")
        const payload = verifyToken(token)
        const user = await userService.getById(payload.userId);

        req.user = user

        next()
    } catch (error) {
        next(error)
    }
next()
}

module.exports = checkAuth;