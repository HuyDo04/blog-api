const {Topic, Post} = require("@/models")

const getBySlug = async (slug) => {
    const topic = await Topic.findOne({
        include: [
            {
                model: Post,
                as: "posts",
                where: { slug }, 
                attributes: ["id", "title", "content", "slug"]
            }
        ],
        attributes: ["id", "name", "slug"]
    });

    return topic;
};

const getAllTopicPost = async () => {
    const topic = await Topic.findAll({
        include: [
            {
                model: Post,
                as: "posts",
                attributes:["id", "title", "content","slug"]
            }
        ],
        logging: false
    })
    return topic
}

module.exports = {
    getBySlug,
    getAllTopicPost
}