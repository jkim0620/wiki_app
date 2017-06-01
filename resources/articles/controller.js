const Article = require('../../models/article');

let controller = {};

controller.index = (req, res) => {
  Article
  .findAll()
  .then((articles) => {
    res.render('articles/index.ejs', {
      articles: articles
    });
  })
  .catch((err) => {
    console.log(err);
  });
}

module.exports = controller;
