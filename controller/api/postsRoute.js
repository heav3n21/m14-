const router = require('express').Router();
const Posts = require('../../models/posts')
// const moment = require('moment');



router.get('/results', (req, res) => {
    try {
        Posts.findAll().then((userData) => {
            res.json(userData);
        })
    } catch (error) {
        res.status(400).json({
            status: 'error',
            error: error.message,
        });

    }
});
router.get('/', async (req, res) => {
    const postData = await Posts.findAll().catch((err) => {
        res.status(500).json(err);
    });


    const mutiPosts = postData.map((post) => {
        const formattedPost = post.get({ plain: true });
        return formattedPost
    })

    res.render('homepage', { mutiPosts, loggedIn: req.session.loggedIn })
    req.session.save(() => {

    })


    
})
router.post('/create', async (req,res) =>{
    console.log('hi');
    try {
        const newPost = await Posts.create(req.body);
        res.status(200).json(newPost);

    } catch (error) {
        res.status(400).json(error)
    }
})

module.exports = router;


