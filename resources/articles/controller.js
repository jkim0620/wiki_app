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

controller.show = (req, res) => {
  Article
  .findById(req.params.id)
  .then((article) => {
    res.render('articles/show.ejs', {
      article: article
    });
  })
  .catch((err) => {
    console.log(err);
  });
}

controller.update = (req, res) => {
  Article
  .findById(req.params.id)
  .then((article) => {
    res.render('articles/edit.ejs', {
      article: article
    })
  })
  .catch((err) => {
    console.log(err);
  });
}

controller.showUpdate = (req, res) => {
  Article
  .update(req.body.article)
  .then(() => {
    res.redirect(`/articles/${req.params.id}`);
  })
  .catch((err) => {
    console.log(err);
  });
}

controller.destroy = (req, res) => {
  Article
  .destroy(req.params.id)
  .then(data => res.json(data))
  .catch((err) => {
    res.status(400).send(err);
  });
}

module.exports = controller;
