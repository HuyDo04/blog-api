const commentService = require("@/service/comment.service");
const { response } = require("@/utils/response");

exports.index = async (req, res) => {
    const comments = await commentService.getAll();
    response.success(res, 200, comments)
}

exports.show = async (req, res) => {
    const {id} = req.params;
    const comment = await commentService.getById(id);
    response.success(res, 200, comment)
}

exports.store = async (req, res) => {
    const data = req.body
    const newComment = await  commentService.create(data);
    response.success(res,201, newComment);
}

exports.update = async (req, res) => {
    const {id} = req.params;
    const data = req.body;
    console.log(id, "data:", data);
    
    const newComment = await commentService.update(id, data);
    console.log("New Comment:",newComment)
    response.success(res, 200, newComment)
}

exports.destroy = async (req, res) => {
    const {id} = req.params
    const comment = await commentService.delete(id);
    response.success(res, 204, comment)
}

