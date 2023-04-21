const sequelize = require("../config/connection");
const User = require("../models/user");
const userData = require("./userTest.json");
const Posts = require('../models/posts');
const postData = require('./posts.json')
const { v4: uuidv4 } = require("uuid");

const seedDatabase = async () => {
  try {
    
    await sequelize.sync({ force: true });
    const usersWithUuid = userData.map((user) => ({
      ...user,
      id: uuidv4(),
    }));
    
    const users = await User.bulkCreate(usersWithUuid);
    for(const post of postData){
      await Posts.create({
        ...post,
        user_id: users[Math.floor(math.random()*empolyers.length)].id
      });
    }
    
    process.exit(0);
  } catch (error) {
    console.log(error)
  }
};

seedDatabase();