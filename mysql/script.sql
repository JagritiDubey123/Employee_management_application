CREATE MYSQL DATABASE AND TABLE
CREATE DATABASE employees_db;
 USE employees_db;
 CREATE TABLE EMPLOYEES (emp_id INT, emp_name VARCHAR(200),
emp_contact VARCHAR(11), emp_add VARCHAR(250));
 INSERT INTO EMPLOYEES (emp_id, emp_name, emp_contact,
emp_add) VALUES (1, “Jagriti”, "1234567890", “Gorakhpur”);
 SELECT * FROM EMPLOYEES;
