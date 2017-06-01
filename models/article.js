const db = require('../config/database');

let Article = {};

Article.findAll = () => {
  return db.any(`
    SELECT * FROM articles
  `);
}

Article.save = (article) => {
  return db.one(`
    INSERT INTO articles (
      title,
      img_url,
      content,
      author
    ) VALUES (
      $/title/,
      $/img_url/,
      $/content/,
      $/author/
    )
    RETURNING *
    `, article);
}

module.exports = Article;
