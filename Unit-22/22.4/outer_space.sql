-- from the terminal run:
-- psql < outer_space.sql

DROP DATABASE IF EXISTS outer_space;

CREATE DATABASE outer_space;

\c outer_space

CREATE TABLE galaxies
(
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL
);

CREATE TABLE planets
(
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  orbital_period_in_years FLOAT NOT NULL,
  orbits_around TEXT NOT NULL,
  galaxy INTEGER REFERENCES galaxies
);

CREATE TABLE moons
(
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  planetid INTEGER REFERENCES planets
);

INSERT INTO galaxies
  (id, name)
VALUES
  (1, 'Milky Way'),
  (2, 'Andromeda');

INSERT INTO planets
  (id, name, orbital_period_in_years, orbits_around, galaxy)
VALUES
  (1, 'Earth', 1.00, 'The Sun', 1),
  (2, 'Mars', 1.88, 'The Sun', 1),
  (3, 'Venus', 0.62, 'The Sun', 1),
  (4, 'Neptune', 164.8, 'The Sun', 1),
  (5, 'Proxima Centauri b', 0.03, 'Proxima Centauri', 1),
  (6, 'Gliese 876 b', 0.23, 'Gliese 876', 1);

INSERT INTO moons
  (id, name, planetid)
VALUES
  (1, 'The Moon', 1),
  (2, 'Phobos', 2),
  (3, 'Deimos', 2),
  (4, 'Naiad', 4),
  (5, 'Thalassa', 4),
  (6, 'Despina', 4),
  (7, 'Galatea', 4),
  (8, 'Larissa', 4),
  (9, 'S/2004 N 1', 4),
  (10, 'Proteus', 4),
  (11, 'Triton', 4),
  (12, 'Nereid', 4),
  (13, 'Halimede', 4),
  (14, 'Sao', 4),
  (15, 'Laomedeia', 4),
  (16, 'Neso', 4);

