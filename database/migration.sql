DROP TABLE IF EXISTS articles;

CREATE TABLE articles (
  id BIGSERIAL PRIMARY KEY,
  title VARCHAR(128) NOT NULL DEFAULT 'untitled',
  img_url VARCHAR(255) NOT NULL DEFAULT 'http://saveabandonedbabies.org/wp-content/uploads/2015/08/default.png',
  content TEXT,
  category VARCHAR(64),
  author VARCHAR(64),
  date_created TIMESTAMP NOT NULL DEFAULT NOW()
);

CREATE INDEX on articles (category);
CREATE INDEX on articles (title);
CREATE INDEX on articles (date_created);
CREATE INDEX on articles (author);
