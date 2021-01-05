DROP TABLE IF EXISTS public.courses;
DROP TABLE IF EXISTS public.lessons;
DROP TABLE IF EXISTS public.tasks;
DROP TABLE IF EXISTS public.users;
DROP TABLE IF EXISTS public.progresses;

CREATE TABLE public.courses
(
    course_id integer NOT NULL GENERATED ALWAYS AS IDENTITY ( INCREMENT 1 START 1 ),
    name character(512) NOT NULL,
    PRIMARY KEY (course_id)
);

ALTER TABLE public.courses
    OWNER to "postgres";

CREATE TABLE public.lessons
(
    lesson_id integer NOT NULL GENERATED ALWAYS AS IDENTITY ( INCREMENT 1 START 1 ),
    course_id integer NOT NULL,
    lesson_name character(512) NOT NULL,
    video_name character(256) NOT NULL,
    preview_link character(1024) NOT NULL,
    video_link character(1024) NOT NULL,
    PRIMARY KEY (lesson_id)
);

ALTER TABLE public.lessons
    OWNER to "postgres";

CREATE TABLE public.tasks
(
    task_id integer NOT NULL GENERATED ALWAYS AS IDENTITY ( INCREMENT 1 START 1 ),
    lesson_id integer NOT NULL,
    question character(1024) NOT NULL UNIQUE,
    right_answer character(256) NOT NULL,
    wrong_answer_2 character(256) NOT NULL,
    wrong_answer_1 character(256) NOT NULL,
    wrong_answer_3 character(256) NOT NULL,
    PRIMARY KEY (task_id)
);

ALTER TABLE public.tasks
    OWNER to "postgres";

CREATE TABLE public.users
(
    user_id integer NOT NULL GENERATED ALWAYS AS IDENTITY ( INCREMENT 1 START 1 ),
    login character(64) NOT NULL UNIQUE,
    hashed_password character(64) NOT NULL,
    role character(32) NOT NULL,
    PRIMARY KEY (user_id)
);

ALTER TABLE public.users
    OWNER to "postgres";

CREATE TABLE public.progresses
(
    user_id integer NOT NULL UNIQUE,
    finished_lessons integer[] NOT NULL
);

ALTER TABLE public.progresses
    OWNER to "postgres";
