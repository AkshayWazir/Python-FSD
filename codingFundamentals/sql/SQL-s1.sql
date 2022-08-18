
-- How to use IN keyword to check for multiple Items
SELECT * FROM products WHERE quantity_in_stock IN (49, 38, 72);

SELECT * FROM customers;

-- How to check a range of items using 'BETWEEN'
SELECT * FROM customers WHERE birth_date BETWEEN '1990-01-01' AND '2000-01-01';

-- get all the customers whos points are between 1500 to 4000
SELECT * FROM customers WHERE points BETWEEN 1500 AND 4000;

-- Get all the rows from customers table where last_name starts with brush
SELECT * FROM customers WHERE last_name LIKE 'brush%';
SELECT * FROM customers WHERE last_name LIKE '%se%';
SELECT * FROM customers WHERE last_name LIKE '%ey';


-- Search all customers who have letter 'n' in their first name and points greater than 1500 ?
SELECT * FROM customers WHERE first_name LIKE '%n%' AND points > 1500;


-- Search all the entries which start with first_name 'b' and end with 'y'
SELECT * FROM customers WHERE last_name LIKE 'b%y';


-- '_' is used to check only single characters
SELECT * FROM customers WHERE last_name LIKE 'b____y';


-- Make a query which will get all customers whose City name starts with a and ends with a and has 4 lets in their first name
SELECT * FROM customers WHERE city LIKE 'a%a' AND first_name LIKE '____';
SELECT * FROM customers;

-- GAC with 'ohio' in their address and last name ending with 'ay'
SELECT * FROM customers WHERE address LIKE '%ohio%' AND last_name LIKE '%ay';


-- you want to search all records which contain string == field
SELECT * FROM customers WHERE last_name REGEXP 'field';



SELECT * FROM orders;
SELECT * FROM orders WHERE shipped_date IS NULL OR shipper_id IS null;

-- now get all orders that are not shipped yet - on orders table
-- SELF


SELECT * FROM customers LIMIT 3;

SELECT * FROM customers ORDER BY first_name, last_name, city DESC;

-- WHERE > ORDER > LIMIT


-- 1) Write a query to fetch all the customers whose date of birth lies between 1960 - 1980
-- and have points more than 2000 give top 3 such results and sort them by first_name

SELECT 
    *
FROM
    customers
WHERE
    birth_date BETWEEN '1960-01-01' AND '1980-01-01'
        AND points > 2000
ORDER BY first_name
LIMIT 3;

SELECT * FROM customers;

-- Write a Query to get full name of all the customers whose points are greater 
-- than 1500 and then get their points divided by 10 and multiplied by 5

SELECT 
    CONCAT(first_name, CONCAT(' ', last_name)) AS 'Full Name',
    points / 10 * 5
FROM
    customers;

-- This query is used to. insert multiple columns and rows at once
INSERT INTO customers (first_name, last_name, birth_date, address, city, state, points) 
VALUES ('Akshay', 'Singh', '1982-12-21', 'address', 'Delhi','DL',0),
('Amit', 'Singh', '1982-12-11', 'address', 'Delhi','DL',8),
('Nikhil', 'Singh', '1982-12-01', 'address', 'Nepal','NP',0);



-- To update the values inside of the table we will use UPDATE query
-- and will specify the update command
UPDATE customers 
SET 
    first_name = 'Shubham',
    last_name = 'Kumar'
WHERE
    customer_id = 15;
    
    
    
-- Task-1
-- add 10 customers tp ecom_customers table 
-- and 5 products to ecom products table
-- create a order table with 'id', 'customer_id', 'product_id'
-- add a few orders to orders table with actual customer and product ID

