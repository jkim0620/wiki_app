const Article = require('../../models/article');

let controller = {};

//ORIGINAL

// controller.index = (req, res) => {
//   if (req.query.category) {
//     Article
//     .sort({
//       category: req.query.category
//     })
//     .then((articles) => {
//       res.render('articles/index.ejs', {
//         articles: articles,
//         category: req.query.category
//       })
//     })
//     .catch((err) => {
//       console.log(err);
//     });
//   } else {
//     Article
//     .findAll()
//     .then((articles) => {
//       res.render('articles/index.ejs', {
//         articles: articles,
//         category: req.query.category
//       })
//     })
//     .catch((err) => {
//       console.log(err);
//     });
//   }
// }

controller.index = (req, res) => {
  let articlePromise;

  if (req.query.category) {
    articlePromise = Article
      .sort({
        category: req.query.category
      });
    } else {
      articlePromise = Article
        .findAll();
    }

  articlePromise
  .then((articles) => {
    Article
    .getCategories()
    .then((categories) => {
      res.render('articles/index.ejs', {
        articles: articles,
        category: req.query.category,
        categories: categories
      });
    })
    .catch((err) => {
      console.log(err);
    });
  })
  .catch((err) => {
    console.log(err);
  });
} // End of controller.index

controller.indexNew = (req, res) => {
  res.render('articles/new.ejs');
}

controller.create = (req, res) => {
  if (req.body.article.title === "") {
    req.body.article.title = "untitled";
  }

  if (req.body.article.img_url === "") {
    req.body.article.img_url = "http://saveabandonedbabies.org/wp-content/uploads/2015/08/default.png";
  }

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
