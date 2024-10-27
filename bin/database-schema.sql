CREATE TABLE board(
  id INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  name VARCHAR(50)
);

INSERT INTO board
  (name)
VALUES
  ('Board 1'),
  ('Board 2'),
  ('Board 3'),
  ('Board 4');