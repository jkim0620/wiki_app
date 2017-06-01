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

controller.indexNew = (req, res) => {
  res.render('articles/new.ejs');
}

controller.create = (req, res) => {
  Article
  .save(req.body.article)
  .then(() => {
    res.redirect('/');
  })
  .catch((err) => {
    console.log(err);
  });
}

module.exports = controller;
