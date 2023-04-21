const User = require('./user');
const Posts = require('./posts');


User.hasMany(Posts,{
    foreignKey:'user_id',
    
})

Posts.belongsTo(User,{
    foreignKey:'user_id',
});

module.exports = { User,Posts};