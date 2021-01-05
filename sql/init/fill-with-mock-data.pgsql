INSERT INTO public.users (login, hashed_password, role) 
VALUES
  ('elonmusk@gmail.com', 'spaceoddity', 'student'),
  ('sam@gmail.com', 'serious', 'student'),
  ('iroh@gmail.com', 'greentea', 'teacher'),
  ('a@a.a', '12345', 'admin'),
  ('nixel@gmail.com', 'pixel', 'student');

INSERT INTO public.courses (name)
VALUES
  ('C'),
  ('Python'),
  ('Java'),
  ('TypeScript'),
  ('VueJS'),
  ('Webpack');

INSERT INTO public.lessons (course_id, lesson_name, video_name, preview_link, video_link)
VALUES
  (5, 'Lesson 1: What is Vue?', 'VueJS 2 – 2020 course', 'https://i.ytimg.com/vi/OlnwgS-gk8Y/hq720.jpg?sqp=-oaymwEZCNAFEJQDSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLB0w1XSKIFGobHG5CxkbiITFXVFPg', 'https://www.youtube.com/embed/OlnwgS-gk8Y'),
  (3, 'Lesson 1: What is Java?', 'Java – 2020 course', 'https://i.ytimg.com/vi/X81MWzN3j8Q/hq720.jpg?sqp=-oaymwEZCNAFEJQDSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLCrRxGdC8mWJwdOJ6Sk6YBn3SW3UQ', 'https://www.youtube.com/embed/X81MWzN3j8Q'),
  (4, 'Lesson 1: What is TypeScript?', 'TypeScript – 2020 course', 'https://i.ytimg.com/vi/nyIpDs2DJ_c/hq720.jpg?sqp=-oaymwEZCNAFEJQDSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLDhehvePIrG5MLEnmt-yd3U-5g7IQ', 'https://www.youtube.com/embed/nyIpDs2DJ_c'),
  (2, 'Lesson 1: What is Python?', 'Python 3 – 2020 course', 'https://i.ytimg.com/vi/fp5-XQFr_nk/hq720.jpg?sqp=-oaymwEZCNAFEJQDSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLDBliUTuCu43NcBHL8X3uViTQMT0g', 'https://www.youtube.com/embed/fp5-XQFr_nk'),
  (4, 'Lesson 2: Interfaces in TypeScript.', 'TypeScript Interfaces', 'https://i.ytimg.com/vi/7NU6K4170As/hq720.jpg?sqp=-oaymwEZCNAFEJQDSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLDByBvZ04qfdVgL6NOaJgQlKi0wPw', 'https://www.youtube.com/embed/7NU6K4170As'),
  (1, 'Lesson 1: What is C language?', 'C Programming Tutorial for Beginners', 'https://i.ytimg.com/vi/KJgsSFOSQv0/hq720.jpg?sqp=-oaymwEZCNAFEJQDSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLAgigijAsb6bq2hrilo8-wb5TPssQ','https://www.youtube.com/embed/KJgsSFOSQv0'),
  (6, 'Lesson 1: What is Webpack?', 'Webpack 4 – Full course 2020', 'https://i.ytimg.com/vi/eSaF8NXeNsA/hq720.jpg?sqp=-oaymwEZCNAFEJQDSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLAygK35k3iVKcyrkwgZNmS6_zXJUw', 'https://www.youtube.com/embed/eSaF8NXeNsA');
  
INSERT INTO public.tasks (lesson_id, question, right_answer, wrong_answer_1, wrong_answer_2, wrong_answer_3)
VALUES
  (1, 'When VueJS was first released', '2013', '2010', '2008', '2015'),
  (2, 'Key principles of OOP', 'Inheritance, Incapsulation, Polymorphism', 'Agregation, Composition, Objectiveness', 'Composition, Incapsulation, Agregation', 'Inheritance, Polymorphism, Objectiveness'),
  (3, 'Correct type definition in TypeScript', 'const a: string', 'string: const a', 'string a: const', 'a: const string'),
  (4, 'Keyword for link to actual environment', 'self', 'this', 'that', 'actenv'),
  (5, 'Cases you can export interface', 'Always', 'When its not extended from another interface', 'When its extended from another interface', 'Never'),
  (6, 'What is Webpack', 'Developing tool for project building', 'Matlab framework for analysis and statistics', 'Backend tool for REST API', 'Yet another markup language');
