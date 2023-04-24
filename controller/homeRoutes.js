const { Posts, User } = require('../models');

const router = require('express').Router();

router.get('/',async (req,res)=>{
    const postData = await Posts.findAll().catch((err)=>{res.status(500).json(err)})
    console.log(postData, 'hiiiiiiiipassword1234Vpassword1234');
    const mutiposts = postData.map((post)=>{
        const formattedPost = post.get({plain:true});
        return formattedPost

    })
    console.log('34343434',mutiposts);
res.render("homepage", { mutiposts, logged_in: req.session.logged_in})
req.session.save(()=>{
        
})
})

router.get('/login', async (req,res)=>{
    res.render('login')
})
router.get('/login', (req, res) => {
    if (req.session.loggedIn) {
        res.redirect('/');
        return;
    }
    res.render('login');
});
router.get('/dashboard', async (req, res) => {
    try {
        // Find the logged in user based on the session ID
        const userData = await User.findByPk(req.session.user_id, {
            attributes: { exclude: ['password'] },
            include: [{ model: Posts }],
        });
        const user = userData.get({ plain: true });
        console.log(user,'hellp matthew');
      res.render('dashboard', {
          ...user,
          logged_in: true
        });
    } catch (err) {
        res.status(500).json(err);
    }
});

// router.get('/dashboard', async (req,res)=>{
//     res.render('dashboard', { logged_in: req.session.logged_in})
//     req.session.save(()=>{

//     })
// })
module.exports = router;