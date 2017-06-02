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
      category,
      author
    ) VALUES (
      $/title/,
      $/img_url/,
      $/content/,
      $/category/,
      $/author/
    )
    RETURNING *
    `, article);
}

Article.findById = (id) => {
  return db.one(`
    SELECT *
    FROM articles
    WHERE articles.id = $1
  `, id);
}

Article.update = (article) => {
  return db.one(`
    UPDATE articles
    SET title = $/title/,
        img_url = $/img_url/,
        content = $/content/,
        category = $/category/,
        author = $/author/
    WHERE id = $/id/
    RETURNING *
    `, article);
}

module.exports = Article;
