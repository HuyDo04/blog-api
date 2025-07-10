const topicService = require("@/service/topic.service");
const topicPostsService = require("@/service/topic_comment.service");
const { response } = require("@/utils/response");

exports.index = async (req, res) => {
    const topics = await topicService.getAll();
    response.success(res, 200, topics)
}

exports.show = async (req, res) => {
    const {id} = req.params;
    const topic = await topicService.getById(id);
    response.success(res, 200, topic)
}

exports.getBySlug = async (req, res) => {
    const {slug} = req.params;
    
    const topic = await topicPostsService.getBySlug(slug);

    if(!topic) return response.error(res, 404, "Notfound")
    
    return response.success(res,200,topic)
}

exports.getAllTopicPost = async (req, res) => {
    const data = await topicPostsService.getAllTopicPost();
    
    response.success(res,200,data)
}

exports.store = async (req, res) => {
    const data = req.body
    const newTopic =  topicService.create(data);
    response.success(res,201, newTopic);
}

exports.update = async (req, res) => {
    const {id} = req.params;
    const data = req.body;
    
    const newTopic = await topicService.update(id, data);
    response.success(res, 200, newTopic)
}

exports.destroy = async (req, res) => {
    const {id} = req.params
    const topic = topicService.delete(id);
    response.success(res, 204, topic)
}

