require('dotenv').config();
const express = require('express');
// const logger = require('morgan');
const path = require('path');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const articleRouter = require('./resources/articles');

const app = express();

const PORT = process.argv[2] || process.env.PORT || 3000;

app.set('view engine', 'ejs');

const dir = {
  public: path.join(__dirname, 'public'),
  jquery: path.join(__dirname, 'node_modules/jqeury/dist'),
  materialize: path.join(__dirname, 'node_modules/materialize/dist'),
};

// app.use(logger());

// Use body-parser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Use method-override
app.use(methodOverride("_method"));

app.use(express.static(dir.public));
app.use('/vendor/jquery', express.static(dir.jquery));
app.use('vendor/materialize', express.static(dir.materialize));

app.use('/articles', articleRouter);

app.get('/', (req, res) => {
  res.redirect(301, '/articles');
});

app.use((err, req, res, next) => {
  console.error(err.stack, next);
  return res.sendStatus(500);
});


app.listen(PORT, () => console.log('Server running!'));
