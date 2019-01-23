CREATE TABLE USERS(
user_id SERIAL          PRIMARY KEY,
username                varchar(100),
email                   varchar(100),
password                varchar(100),
creation_date           timestamp,
company_affiliation     varchar(255) NULL,
user_industry           varchar(255) NULL,
real_name               varchar(100) NULL,
activity_count          integer,
active_date             timestamp,
avatar                  text NULL
);

INSERT INTO USERS (username, email, password, creation_date, company_affiliation, user_industry, real_name, activity_count, active_date, avatar)
VALUES
('test', 'test@test.com', 'password', '2019-01-21 13:52:00', 'Redwood Code Academy', 'Technology', 'John Doe', 0, '2019-01-21 13:52:00', 'https://course_report_production.s3.amazonaws.com/rich/rich_files/rich_files/2179/s300/socialmedialogo.png'),
('example', 'example@gmail.com', 'password123', '2019-01-21 13:52:00', 'Redwood Code Academy', 'Technology', 'Jane Doe', 0, '2019-01-21 13:52:00', 'https://s3-media2.fl.yelpcdn.com/bphoto/1ooNmq_crzZcqCyNz81J6A/180s.jpg');

CREATE TABLE ARTICLES(
article_id SERIAL       PRIMARY KEY,
article_link            text,
title                   varchar(255),
summary                 text,
time                    timestamp
);

CREATE TABLE POSTS(
post_id SERIAL          PRIMARY KEY,
user_id                 integer REFERENCES USERS (user_id),
title                   varchar(100),
body                    text,
time                    timestamp
);

CREATE TABLE COMMENTS(
comment_id SERIAL       PRIMARY KEY,
comment                 text,
user_id                 integer REFERENCES USERS (user_id),
post_id                 integer REFERENCES POSTS (post_id) NULL,
article_id              integer REFERENCES ARTICLES (article_id) NULL,
time                    timestamp
);
