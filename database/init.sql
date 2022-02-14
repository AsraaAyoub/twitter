BEGIN;

DROP TABLE IF EXISTS users, tweets CASCADE;

CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    createdAt DATE NOT NULL DEFAULT CURRENT_DATE
);

CREATE TABLE tweets (
    id SERIAL PRIMARY KEY,
    tweet TEXT NOT NULL,
    userId INTEGER REFERENCES users(id),
    createdAt DATE NOT NULL DEFAULT CURRENT_DATE
);

-- TASK: create a simple comments table

CREATE TABLE comments (
    id SERIAL PRIMARY KEY,
    comment TEXT NOT NULL,
    userId INTEGER REFERENCES users(id),
    tweetId INTEGER REFERENCES tweets(id),
    createdAt DATE NOT NULL DEFAULT CURRENT_DATE
);

COMMIT;