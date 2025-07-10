const { where } = require("sequelize");
const {Post} = require("../models");
const { faker } = require("@faker-js/faker");
const { response } = require("@/utils/response");

exports.getAll = async (page = 1, limit = 10) => {
    const offset = (page - 1) * limit;
    
    const {count, rows} = await Post.findAndCountAll({
        offset,
        limit,
        order:[["id","DESC"]],
        attributes:["id", "title", "content", "slug"]
    })    

    return {
        items: rows,
        total: count
    }
}

exports.getBySlug = async (slug) => {
    const post = await Post.findOne({ 
        where: { slug: slug } 
    });
    
    return post
}; 

exports.getById = async (id) => {
    const post = await Post.findByPk(id)
    console.log("Post ở service:", post);
    
    return post
}

exports.updateById = async (id, data) => {
    const post = await Post.findByPk(id);
    if (!post) {
      throw new Error('Post not found');
    }
    await post.update(data);
    return post;
};

exports.create = async (data) => {
    try {
        let slug = "";
    if (data.title) {
      slug = data.title
        .toLowerCase()
        .replace(/\s+/g, "-") // thay khoảng trắng thành dấu -
        .replace(/[^\w\-]+/g, ""); // bỏ ký tự đặc biệt
    } else {
      // Nếu không có title, tạo slug random
      slug = faker.helpers.slugify(faker.lorem.words(5)).toLowerCase();
    }
    const newPost = await Post.create({
        title: data.title,
        content: data.content,
        topicId: data.topicId,
        slug: slug
    })

    return newPost
    } catch (error) {
        throw new Error(error.message)
    }

}

exports.delete = async (id) => {
    const deleted = await Post.destroy({
        where: {id}
    })
    return deleted
}
