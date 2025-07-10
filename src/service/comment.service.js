// const {Comment} = require("@/models");
const {Comment} = require("../models");

exports.getAll = async () => {
    console.log(await Comment.findAll());
    
    return await Comment.findAll();
}

exports.getById = async (id) => {
    const comment = await Comment.findByPk(id)
    return comment
}

exports.create = async (data) => {
    const newComment = await Comment.create({
        topicId: data.topicId,
        content: data.content,
    })
    return newComment
}

exports.update = async (id, data) => {
    const comment = await Comment.findByPk(id);
    
    if(!comment) return null
    const newComment = await comment.update(data)
    return newComment
}

exports.delete = async (id) => {
    const deleted = await Comment.destroy({
        where: {id}
    })
    return deleted
}
