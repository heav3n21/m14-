const { Posts } = require('../models');

const router = require('express').Router();

router.get('/',async (req,res)=>{
    const postData = await Posts.findAll().catch((err)=>{res.status(500).json(err)})
    console.log(postData, 'hiiiiiiiipassword1234Vpassword1234');
    const mutiposts = postData.map((post)=>{
        const formattedPost = post.get({plain:true});
        return formattedPost

    })
    console.log('34343434',mutiposts);
res.render("homepage", { mutiposts, loggedIn: req.session.loggedIn})
req.session.save(()=>{
        
})
})

router.get('/login', async (req,res)=>{
    res.render('login')
})
router.get('/dashboard', async (req,res)=>{
    res.render('dashboard')
    req.session.save(()=>{

    })
})
router.get('/login', (req, res) => {
    if (req.session.loggedIn) {
        res.redirect('/');
        return;
    }
    res.render('login');
});


module.exports = router;