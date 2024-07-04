import Post from "../models/Post.js";

export const handleAddPost = async (req, res) => {
  try {
    
    console.log("this is add post file", req.file);

    if (req.file) req.body.image = req.file.path;
    console.log("this is add post", req.body);
    const post = await Post.create(req.body);

    console.log("🚀 ~ post:", post);

    res.send({ success: true });
  } catch (error) {
    console.log("🚀 ~ error in add post:", error.message);

    res.status(500).send({ success: false, error: error.message });
  }
};

export const handleGetAllPosts = async (req, res) => {
  try {
    console.log("this is get all posts");

    const posts = await Post.find();
    console.log("🚀 ~ posts:", posts);

    res.send({ success: true, posts });
  } catch (error) {
    console.log("🚀 ~ error in get all posts:", error.message);

    res.status(500).send({ success: false, error: error.message });
  }
};
export const handleGetOnePost = async (req, res) => {
  try {
    console.log("this is get one post", req.query);

    const post = await Post.findById(req.query.id);
    console.log("🚀 ~ post:", post);

    res.send({ success: true, post });
  } catch (error) {
    console.log("🚀 ~ error in get one post:", error.message);

    res.status(500).send({ success: false, error: error.message });
  }
};
