const Post = require('../models').Post;

exports.getPosts = async (req, res) => {
    const posts = await Post.findAll();
    res.render('index.twig', {
        posts: posts,
        title: 'index Page',
    });
}

exports.getPost = async (req, res) => {
    const post = await Post.findByPk(req.params.id);
    res.render('detail.twig', {
        post: post,
        title: 'detail Page',
    });
}