const db = require('../config/database');

let Article = {};

Article.findAll = () => {
  return db.any(`SELECT * FROM articles`);
}

module.exports = Article;
