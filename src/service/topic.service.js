// const {Topic} = require("@/models");
const {Topic} = require("@/models");

exports.getAll = async () => {
    
    return await Topic.findAll();
}

exports.getById = async (id) => {
    const comment = await Topic.findByPk(id)
    return comment
}

exports.create = async (data)    => {
    const newTopic = await Topic.create({
        name: data.name,
    })
    return newTopic
}

exports.update = async (id, data) => {
    const comment = await Topic.findByPk(id);
    
    if(!comment) return null
    const newTopic = await comment.update(data)
    return newTopic
}

exports.delete = async (id) => {
    const deleted = await Topic.destroy({
        where: {id}
    })
    return deleted
}
