const express = require('express');
const session = require('express-session')
const routes = require('./controller/index');
const sequelize = require('./config/connection');
const exphbs = require('express-handlebars');
const SequelizeStore = require("connect-session-sequelize")(session.Store);

const hbs = exphbs.create({});
const path = require('path');



const app = express();
const PORT = process.env.PORT || 3001;

const sess = {
  secret:" process.env.DB_secret",
  cookie: {
    maxAge: 42 * 60 * 60 * 1000,
  },
  resave: false,
  saveUnitialized: true,
  store: new SequelizeStore({
    db: sequelize,
  }),
};

app.use(session(sess));
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// turn on routes
app.use(routes);

// turn on connection to db and server
//force is to drop DB
sequelize.sync({ force: true}).then(() => {
  app.listen(PORT, () => console.log(`Now listening${PORT}`));
});
