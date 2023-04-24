const sequelize = require("../config/connection");
const User = require("../models/user");
const userData = require("./userTest.json");
const Posts = require('../models/posts');
const postData = require('./posts.json')
const { v4: uuidv4 } = require("uuid");

const seedDatabase = async () => {
  try {
    
    await sequelize.sync({ force: true });
    // const usersWithUuid = userData.map((user) => ({
    //   ...user,
    //   // id: uuidv4(),
    // }));
    
    await User.bulkCreate(userData)
    // });
    // for(const {id} of user){
    //   const newUser = await Posts.create(postData,{
    //   user_id: id,
    //   });
    // }
    
    process.exit(0);
  } catch (error) {
    console.log(error)
  }
};

seedDatabase();