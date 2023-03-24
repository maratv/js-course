CREATE
DATABASE online_store;

USE online_store;

CREATE TABLE customers
(
    id         INT PRIMARY KEY AUTO_INCREMENT,
    first_name VARCHAR(50)  NOT NULL,
    last_name  VARCHAR(50)  NOT NULL,
    email      VARCHAR(100) NOT NULL UNIQUE,
    password   VARCHAR(100) NOT NULL
);

CREATE TABLE products
(
    id          INT PRIMARY KEY AUTO_INCREMENT,
    name        VARCHAR(100)   NOT NULL,
    description TEXT,
    price       DECIMAL(10, 2) NOT NULL
);

CREATE TABLE orders
(
    id          INT PRIMARY KEY AUTO_INCREMENT,
    customer_id INT            NOT NULL,
    order_date  DATETIME       NOT NULL,
    total_price DECIMAL(10, 2) NOT NULL,
    FOREIGN KEY (customer_id) REFERENCES customers (id)
);
CREATE TABLE order_items
(
    id         INT PRIMARY KEY AUTO_INCREMENT,
    order_id   INT            NOT NULL,
    product_id INT            NOT NULL,
    quantity   INT            NOT NULL,
    price      DECIMAL(10, 2) NOT NULL,
    FOREIGN KEY (order_id) REFERENCES orders (id),
    FOREIGN KEY (product_id) REFERENCES products (id)
);
