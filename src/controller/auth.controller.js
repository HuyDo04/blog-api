const refreshTokenService = require("@/service/refreshToken.service")

const { response } = require("@/utils/response");
const { hash, compare } = require("@/utils/bcrypt");
const jwt = require("jsonwebtoken");

const userService = require("@/service/user.service")
const {signToken} = require("@/utils/jwt");
const generateToken = require("@/utils/generateToken");
const expiresIn = 30;

exports.register = async (req, res) => {
    const user = await userService.createUser({
        email: req.body.email,
        password:await hash(req.body.password)
    })
    
    const token = signToken({userId: user.id})

    response.success(res,200, {
        access_token: token,
        token_type:'Bearer',
        expries_in: expiresIn
    })
}

exports.login = async (req, res) => {
    
    const user = await userService.getByEmail(req.body.email)
    
    if (!user) {
        return res.error(401,"Invalid")
    }

    const isValid = await compare(req.body.password, user.password)
    
    if(!isValid) {
        return res.error(401,"Invalid")
    }

    const token = signToken({userId: user.id})
    const refreshToken = await refreshTokenService.createRefreshToken(user.id);

    res.success(200, {
        access_token: token,
        refresh_token: refreshToken.token,
        token_type: "Bearer",
        expires_in: expiresIn,
    }
    )
}

exports.me = async (req, res) => {
    res.success(200, req.user)
}

exports.refreshToken = async (req, res) => {
    try {
      // Lấy refresh token từ DB
      const oldToken = req.body.refresh_token
      const refreshToken = await refreshTokenService.getByToken(oldToken);
        
      console.log(refreshToken.user_id);
              
      if (!refreshToken) {
        return res.error(403, "Refresh token invalid");
      }
  
      // Lấy user từ DB
      const user = await userService.getById(refreshToken.user_id);
      
  
      if (!user) {
        return res.error(401, "Invalid email");
      }
  
      // Tạo access token mới
      const token = signToken({ userId: refreshToken.user_id });
  
      await refreshToken.destroy({
        where: { token: oldToken }
      });
      // Tạo refresh token mới
      const newRefreshToken = await refreshTokenService.createRefreshToken(user.id);
  
      // Trả về kết quả
      return res.success(200, {
        access_token: token,
        refresh_token: newRefreshToken.token,
        token_type: "Bearer",
        expires_in: 60 * 60,
      });
    } catch (error) {
      console.error(error);
      return res.error(500, "Internal server error");
    }
  };
  