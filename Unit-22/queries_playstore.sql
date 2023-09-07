-- Comments in SQL Start with dash-dash --

-- 1
SELECT app_name FROM analytics WHERE id = 1880;

-- 2
SELECT id, app_name FROM analytics WHERE last_updated = '2018-08-01';

-- 3
SELECT category, COUNT(category) FROM analytics GROUP BY category;

-- 4
SELECT app_name, reviews FROM analytics ORDER BY reviews DESC LIMIT 5;

-- 5
SELECT app_name FROM analytics WHERE rating >= 4.8 ORDER BY reviews DESC LIMIT 1;

-- 6
