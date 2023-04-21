const router = require('express').Router();
const userRoute = require('./userRoute');
const postsRoute = require('./postsRoute');


router.use('/post',postsRoute)
router.use('/user',userRoute);


module.exports = router;