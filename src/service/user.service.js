const {User} = require("@/models/");

exports.getById = async (id) => {
    const user = await User.findByPk(id, {
        attributes: ["id", "email", "createdAt", "updatedAt"]
    });
    
    return user
};
  
exports.getByEmail = async (email) => {
    const user = await User.findOne({
        where: {email},
        attributes:["id","email", "password", "createdAt", "updatedAt"]
    });    
    return user
}

exports.createUser = (data) => {
    const newUser = User.create(data);
    return newUser
}