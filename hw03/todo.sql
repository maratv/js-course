CREATE DATABASE todo_list;

USE todo_list;

CREATE TABLE tasks (
                       id INT PRIMARY KEY AUTO_INCREMENT,
                       task_name VARCHAR(255) NOT NULL,
                       task_description VARCHAR(1000) NOT NULL,
                       due_date DATE,
                       priority ENUM('High', 'Medium', 'Low') DEFAULT 'Medium',
                       completed BOOLEAN DEFAULT false
);