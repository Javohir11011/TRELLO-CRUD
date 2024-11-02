INSERT INTO users (name, email, password) VALUES
('John Doe', 'john.doe@example.com', 'password123'),
('Jane Smith', 'jane.smith@example.com', 'password456'),
('Michael Brown', 'michael.brown@example.com', 'password789'),
('Sarah Johnson', 'sarah.johnson@example.com', 'passwordabc'),
('Chris Lee', 'chris.lee@example.com', 'passworddef');

INSERT INTO columns (title) VALUES
('To Do'),
('In Progress'),
('Review'),
('Done'),
('Backlog');

INSERT INTO boards (title, columns) VALUES
('Project A', 1),
('Project B', 2),
('Project C', 3),
('Project D', 4),
('Project E', 5);

INSERT INTO tasks (title, orders, description, userId, boardId, columnId) VALUES
('Task 1', 'Order 1', 'Description for task 1', 1, 1, 1),
('Task 2', 'Order 2', 'Description for task 2', 2, 1, 2),
('Task 3', 'Order 3', 'Description for task 3', 3, 2, 3),
('Task 4', 'Order 4', 'Description for task 4', 4, 3, 4),
('Task 5', 'Order 5', 'Description for task 5', 5, 4, 5);



insert into boards(title , columns)
values($1, $2)
