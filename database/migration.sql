DROP TABLE IF EXISTS articles;

CREATE TABLE articles (
  id BIGSERIAL PRIMARY KEY,
  title VARCHAR(128) DEFAULT 'untitled',
  img_url VARCHAR(255) DEFAULT 'http://saveabandonedbabies.org/wp-content/uploads/2015/08/default.png',
  content TEXT NOT NULL,
  category VARCHAR(64) NOT NULL,
  author VARCHAR(64) NOT NULL,
  date_created TIMESTAMP DEFAULT NOW()
);

CREATE INDEX on articles (category);
CREATE INDEX on articles (title);
CREATE INDEX on articles (date_created);
CREATE INDEX on articles (author);
