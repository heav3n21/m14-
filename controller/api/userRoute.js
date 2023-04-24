const router = require('express').Router();
const User = require('../../models/user');


router.get("/", (req, res) => {
    try {
      User.findAll().then((userData) => {
        res.json(userData);
      });
    } catch (error) {
      res.status(400).json({
        status: "error",
        error: error.message,
      });
    }
  });
  router.post("/", async (req, res) => {
    try {
      const userData = await User.create(req.body,);
  
      req.session.save(() => {
        req.session.user_id = userData.id;
      req.session.logged_in = true;
      });
      res.status(200).json(userData);
    } catch (error) {
      res.status(400).json(error);
    }
  });
  router.post("/login", async (req, res) => {
    try {
      const UserData = await User.findOne({
        where: {
          username: req.body.username
        },
      });
  
      if (!UserData) {
        res
          .status(400)
          .json({ message: "Incorrect email or password. Please try again!" });
        return;
      }
      const validPassword = await UserData.checkPassword(req.body.password);
  
      if (!validPassword) {
        res
          .status(400)
          .json({ message: "Incorrect email or password. Please try again!" });
        return;
      }
  
      req.session.save(() => {
        req.session.logged_in = true;
        req.session.user_id = UserData.id;
  
        res
          .status(200)
          .json({ user: UserData, message: "You are now logged in!" });
      });
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  });
  router.post('/logout', (req, res) => {
    if (req.session.logged_in) {
      req.session.destroy(() => {
        res.status(204).end();
      });
    } else {
      res.status(404).end();
    }
  });



  
module.exports = router;