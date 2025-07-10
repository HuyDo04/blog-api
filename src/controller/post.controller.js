const postService = require("@/service/post.service");
const { response } = require("@/utils/response");

exports.index = async (req, res) => {
    const {items, total} = await postService.getAll(req.page,req.limit);
    return res.paginate({items, total});
}

// get by slug
exports.show = async (req, res) => {
    const {slug} = req.params;
    const post = await postService.getBySlug(slug);
    res.success(200, post)
}

// getById
exports.getById = async (req, res) => {
    try {
        const {id} = req.params;
        const post = await postService.getById(id)
        res.success(200, post)
    } catch (error) {
        res.error(401, error)
    }
}

exports.store = async (req, res) => {
    try {
    const data = req.body
    console.log("data nhập vào:", data);
    const newPost =await  postService.create(data);
    response.success(res,201, newPost);
    } catch (error) {
        res.error(401,error.message)
    }
}

// get by id update
exports.update = async (req, res) => {
    const { id } = req.params;
    const data = req.body;
    const updatedPost = await postService.updateById(id, data);
    res.success(201, updatedPost)
  };

exports.destroy = async (req, res) => {
    const {id} = req.params
    const post = postService.delete(id);
    res.success(204, post)
}

