-- from the terminal run:
-- psql < air_traffic.sql

DROP DATABASE IF EXISTS air_traffic;

CREATE DATABASE air_traffic;

\c air_traffic

CREATE TABLE countries
(
  id SERIAL PRIMARY KEY,
  country TEXT NOT NULL
);

CREATE TABLE locations
(
  id SERIAL PRIMARY KEY,
  city TEXT NOT NULL,
  country INTEGER REFERENCES countries
);

CREATE TABLE airlines
(
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL
);

CREATE TABLE flights
(
  id SERIAL PRIMARY KEY,
  airline INTEGER REFERENCES airlines,
  departure TIMESTAMP NOT NULL,
  arrival TIMESTAMP NOT NULL,
  origin INTEGER REFERENCES locations,
  destination INTEGER REFERENCES locations
);

CREATE TABLE tickets
(
  id SERIAL PRIMARY KEY,
  first_name TEXT NOT NULL,
  last_name TEXT NOT NULL,
  seat TEXT NOT NULL,
  flight INTEGER REFERENCES flights
);

INSERT INTO countries
  (id, country)
VALUES
  (1, 'United States'),
  (2, 'Japan'),
  (3, 'United Kingdom'),
  (4, 'Mexico'),
  (5, 'France'),
  (6, 'Morocco'),
  (7, 'UAE'),
  (8, 'China'),
  (9, 'Brazil'),
  (10, 'Chile');

INSERT INTO locations
  (id, city, country)
VALUES
  (1, 'Washington DC', 1),
  (2, 'Seattle', 1),
  (3, 'Tokyo', 2),
  (4, 'London', 3),
  (5, 'Los Angeles', 1),
  (6, 'Las Vegas', 1),
  (7, 'Mexico City', 4),
  (8, 'Paris', 5),
  (9, 'Casablanca', 6),
  (10, 'Dubai', 7),
  (11, 'Beijing', 8),
  (12, 'New York', 1),
  (13, 'Charlotte', 1),
  (14, 'Cedar Rapids', 1),
  (15, 'Chicago', 1),
  (16, 'New Orleans', 1),
  (17, 'Sao Paolo', 9),
  (18, 'Santiago', 10);

INSERT INTO airlines
  (id, name)
VALUES
  (1, 'United'),
  (2, 'British Airways'),
  (3, 'Delta'),
  (4, 'TUI Fly Belgium'),
  (5, 'Air China'),
  (6, 'American Airlines'),
  (7, 'Avianca Brasil');

INSERT INTO flights
  (id, airline, departure, arrival, origin, destination)
VALUES
  (1, 1, '2018-04-08 09:00:00', '2018-04-08 12:00:00', 1, 2),
  (2, 2, '2018-12-19 12:45:00', '2018-12-19 16:15:00', 3, 4),
  (3, 3, '2018-01-02 07:00:00', '2018-01-02 08:03:00', 5, 6),
  (4, 3, '2018-04-15 16:50:00', '2018-04-15 21:00:00', 2, 7),
  (5, 4, '2018-08-01 18:30:00', '2018-08-01 21:50:00', 8, 9),
  (6, 5, '2018-10-31 01:15:00', '2018-10-31 12:55:00', 10, 11),
  (7, 1, '2019-02-06 06:00:00', '2019-02-06 07:47:00', 12, 13),
  (8, 6, '2018-12-22 14:42:00', '2018-12-22 15:56:00', 14, 15),
  (9, 6, '2019-02-06 16:28:00', '2019-02-06 19:18:00', 13, 16),
  (10, 7, '2019-01-20 19:30:00', '2019-01-20 22:45:00', 17, 18);


INSERT INTO tickets
  (first_name, last_name, seat, flight)
VALUES
  ('Jennifer', 'Finch', '33B', 1),
  ('Thadeus', 'Gathercoal', '8A', 2),
  ('Sonja', 'Pauley', '12F', 3),
  ('Jennifer', 'Finch', '20A', 4),
  ('Waneta', 'Skeleton', '23D', 5),
  ('Thadeus', 'Gathercoal', '18C', 6),
  ('Berkie', 'Wycliff', '9E', 7),
  ('Alvin', 'Leathes', '1A', 8),
  ('Berkie', 'Wycliff', '32B', 9),
  ('Cory', 'Squibbes', '10D', 10);