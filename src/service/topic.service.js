// const {Topic} = require("@/models");
const {Topic} = require("@/models");

exports.getAll = async () => {
    const topics = await Topic.findAll();
    return topics
}

exports.getById = async (id) => {
    const topic = await Topic.findByPk(id)
    console.log("Service", topic);
    
    return topic
}

exports.create = async (data)    => {
    const newTopic = await Topic.create({
        name: data.name,
    })
    return newTopic
}

exports.update = async (id, data) => {
    const topic = await Topic.findByPk(id);
    
    if(!topic) return null
    const newTopic = await topic.update(data)
    return newTopic
}

exports.delete = async (id) => {
    const deleted = await Topic.destroy({
        where: {id}
    })
    return deleted
}
