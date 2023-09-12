DROP DATABASE IF EXISTS medical_center;

CREATE DATABASE medical_center;

\c medical_center

CREATE TABLE doctors
(
id SERIAL PRIMARY KEY,
name TEXT NOT NULL
);

CREATE TABLE patients
(
id SERIAL PRIMARY KEY,
name TEXT NOT NULL,
doctorid INTEGER
);

CREATE TABLE diseases
(
id SERIAL PRIMARY KEY,
disease TEXT NOT NULL
);

CREATE TABLE diagnosis
(
patientid INTEGER,
diseaseid INTEGER
);


INSERT INTO doctors
  (id, name)
VALUES
  (1, 'Hammond'),
  (2, 'Locke'),
  (3, 'Felix'),
  (4, 'Wilson');

INSERT INTO patients
  (id, name, doctorid)
VALUES
  (1, 'Jason', 1),
  (2, 'Mark', 2),
  (3, 'Ethan', 2),
  (4, 'Chris', 1),
  (5, 'Will', 3),
  (6, 'Mark', 1),
  (7, 'Jared', 3);

INSERT INTO diseases
    (id, disease)
VALUES
  (1, 'Fever'),
  (2, 'Flu'),
  (3, 'Sore Foot');

INSERT INTO diagnosis
  (patientid, diseaseid)
VALUES
  (1, 3),
  (1, 1),
  (3, 2),
  (4, 1),
  (7, 3);