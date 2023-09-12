DROP DATABASE IF EXISTS soccer_league;

CREATE DATABASE soccer_league;

\c soccer_league;

CREATE TABLE seasons
(
    id SERIAL PRIMARY KEY,
    start_date DATE NOT NULL,
    end_date DATE NOT NULL
);

CREATE TABLE teams
(
    id SERIAL PRIMARY KEY,
    team_name TEXT NOT NULL UNIQUE,
    ranking INTEGER NOT NULL UNIQUE
);

CREATE TABLE players
(
    id SERIAL PRIMARY KEY,
    player_name TEXT NOT NULL,
    teamid INTEGER REFERENCES teams
);

CREATE TABLE referees
(
    id SERIAL PRIMARY KEY,
    ref_name TEXT NOT NULL
);

CREATE TABLE games
(
    id SERIAL PRIMARY KEY,
    seasonid INTEGER REFERENCES seasons,
    team_one_id INTEGER REFERENCES teams,
    team_two_id INTEGER REFERENCES teams,
    refid INTEGER REFERENCES referees
);

CREATE TABLE goals
(
    id SERIAL PRIMARY KEY,
    gameid INTEGER REFERENCES games,
    playerid INTEGER REFERENCES players
);

-- Fill tables for testing
INSERT INTO seasons
    (id, start_date, end_date)
VALUES
    (1, '2022-05-14', '2022-09-01'),
    (2, '2023-05-12', '2023-08-30');

INSERT INTO teams
    (id, team_name, ranking)
VALUES
    (1, 'Voldemorts', 1),
    (2, 'Mojo Dojo Casa Houses', 3),
    (3, 'Mugwumps', 2),
    (4, 'Legends of the Rent', 4);

INSERT INTO players
  (id, player_name, teamid)
VALUES
  (1, 'Jason', 1),
  (2, 'Mark', 2),
  (3, 'Ethan', 2),
  (4, 'Chris', 1),
  (5, 'Will', 3),
  (6, 'Mark', 4),
  (7, 'Jared', 3);

INSERT INTO referees
    (id, ref_name)
VALUES
    (1, 'Hammond'),
    (2, 'Locke'),
    (3, 'Felix'),
    (4, 'Wilson');

INSERT INTO games
    (id, seasonid, team_one_id, team_two_id, refid)
VALUES
    (1, 1, 1, 2, 1),
    (2, 1, 3, 4, 2),
    (3, 1, 1, 3, 3),
    (4, 1, 2, 4, 4),
    (5, 1, 1, 4, 1),
    (6, 1, 2, 3, 2),
    (7, 2, 1, 2, 3),
    (8, 2, 3, 4, 4);

INSERT INTO goals
    (id, gameid, playerid)
VALUES
    (1, 1, 1),
    (2, 1, 1),
    (3, 1, 4),
    (4, 2, 2),
    (5, 3, 4),
    (6, 3, 1),
    (7, 4, 6),
    (8, 4, 4),
    (9, 4, 4),
    (10, 5, 1),
    (11, 6, 2),
    (12, 7, 1),
    (13, 8, 4),
    (14, 8, 7),
    (15, 8, 7),
    (16, 8, 7);