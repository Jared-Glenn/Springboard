-- from the terminal run:
-- psql < music.sql

DROP DATABASE IF EXISTS music;

CREATE DATABASE music;

\c music

CREATE TABLE songs
(
  id SERIAL PRIMARY KEY,
  title TEXT NOT NULL,
  duration_in_seconds INTEGER NOT NULL,
  release_date DATE NOT NULL,
  album TEXT NOT NULL
);

CREATE TABLE artists
(
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL
);

CREATE TABLE songs_artists
(
  songid INTEGER REFERENCES songs,
  artistid INTEGER REFERENCES artists
);

CREATE TABLE producers
(
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL
);

CREATE TABLE songs_producers
(
  songid INTEGER REFERENCES songs,
  producerid INTEGER REFERENCES producers
);

INSERT INTO songs
  (id, title, duration_in_seconds, release_date, album)
VALUES
  (1, 'MMMBop', 238, '04-15-1997', 'Middle of Nowhere'),
  (2, 'Bohemian Rhapsody', 355, '10-31-1975', 'A Night at the Opera'),
  (3, 'One Sweet Day', 282, '11-14-1995', 'Daydream'),
  (4, 'Shallow', 216, '09-27-2018', 'A Star Is Born'),
  (5, 'How You Remind Me', 223, '08-21-2001', 'Silver Side Up'),
  (6, 'New York State of Mind', 276, '10-20-2009', 'The Blueprint 3'),
  (7, 'Dark Horse', 215, '12-17-2013', 'Prism'),
  (8, 'Moves Like Jagger', 201, '06-21-2011', 'Hands All Over'),
  (9, 'Complicated', 244, '05-14-2002', 'Let Go'),
  (10, 'Say My Name', 240, '11-07-1999', 'The Writing''s on the Wall');

INSERT INTO artists
  (id, name)
VALUES
  (1, 'Hanson'),
  (2, 'Queen'),
  (3, 'Mariah Cary'),
  (4, 'Boyz II Men'),
  (5, 'Lady Gaga'),
  (6, 'Bradley Cooper'),
  (7, 'Nickelback'),
  (8, 'Jay Z'),
  (9, 'Alicia Keys'),
  (10, 'Katy Perry'),
  (11, 'Juicy J'),
  (12, 'Maroon 5'),
  (13, 'Christina Aguilera'),
  (14, 'Avril Lavigne'),
  (15, 'Destiny''s Child');

INSERT INTO songs_artists
  (songid, artistid)
VALUES
  (1, 1),
  (2, 2),
  (3, 3),
  (3, 4),
  (4, 5),
  (4, 6),
  (5, 7),
  (6, 8),
  (6, 9),
  (7, 10),
  (7, 11),
  (8, 12),
  (8, 13),
  (9, 14),
  (10, 15);

INSERT INTO producers
  (id, name)
VALUES
  (1, 'Dust Brothers'),
  (2, 'Stephen Lironi'),
  (3, 'Roy Thomas Baker'),
  (4, 'Walter Afanasieff'),
  (5, 'Benjamin Rice'),
  (6, 'Rick Parashar'),
  (7, 'Al Shux'),
  (8, 'Max Martin'),
  (9, 'Cirkut'),
  (10, 'Shellback'),
  (11, 'Benny Blanco'),
  (12, 'The Matrix'),
  (13, 'Darkchild');

INSERT INTO songs_producers
  (songid, producerid)
VALUES
  (1, 1),
  (1, 2),
  (2, 3),
  (3, 4),
  (4, 5),
  (5, 6),
  (6, 7),
  (7, 8),
  (7, 9),
  (8, 10),
  (8, 11),
  (9, 12),
  (10, 13);
