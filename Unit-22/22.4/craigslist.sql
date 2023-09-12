DROP DATABASE IF EXISTS craigslist;

CREATE DATABASE craigslist;

\c craigslist;

CREATE TABLE users
(
  id SERIAL PRIMARY KEY,
  username TEXT NOT NULL,
  pref_region INTEGER
);

CREATE TABLE posts
(
  id SERIAL PRIMARY KEY,
  title TEXT NOT NULL,
  post_text TEXT,
  posting_user INTEGER,
  post_location TEXT,
  post_region INTEGER,
  post_category INTEGER
);

CREATE TABLE regions
(
  id SERIAL PRIMARY KEY,
  region_name TEXT NOT NULL
);

CREATE TABLE categories
(
  id SERIAL PRIMARY KEY,
  category TEXT NOT NULL
);

-- Fill Data
INSERT INTO users
  (id, username, pref_region)
VALUES
  (1, 'Jason', 1),
  (2, 'Mark', 2),
  (3, 'Ethan', 2),
  (4, 'Chris', 1),
  (5, 'Will', 3),
  (6, 'Mark', 1),
  (7, 'Jared', 3);

INSERT INTO posts
  (id, title, post_text, posting_user, post_location, post_region, post_category)
VALUES
  (1, 'Lamp', 'Awesome lamp for sale!', 2, 'New York', 1, 1),
  (2, 'Desk', 'Awesome desk for sale!', 2, 'San Francisco', 2, 1),
  (3, 'Chair', 'Awesome chair for sale!', 2, 'Houston', 3, 1),
  (4, 'Frame', 'Awesome frame for sale!', 2, 'Austin', 3, 1),
  (5, 'Pie', '... You can''t have my pie.', 2, 'Livermore', 2, 2);

INSERT INTO regions
  (id, region_name)
VALUES
  (1, 'Eastern US'),
  (2, 'Western US'),
  (3, 'Southern US');

INSERT INTO categories
  (id, category)
VALUES
  (1, 'For Sale'),
  (2, 'Bragging');