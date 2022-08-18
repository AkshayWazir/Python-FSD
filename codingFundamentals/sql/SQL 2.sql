USE sql_store;
-- Inner join : simply connecting common columns
-- Here we get all the orders corresponding to all the customers
SELECT 
    o.order_id AS 'Order ID',
    CONCAT(c.first_name, CONCAT(' ', c.last_name)) AS 'Full Name'
FROM
    orders o
        JOIN
    customers c ON o.customer_id = c.customer_id;
    
-- Another example to show inner join
SELECT 
    o.order_id, o.status, oi.product_id, oi.quantity
FROM
    orders o
        JOIN
    order_items oi ON o.order_id = oi.order_id;


-- Complex query with multiple joins
SELECT 
    o.order_id, os.name, oi.product_id, oi.quantity
FROM
    orders o
        JOIN
    order_items oi ON o.order_id = oi.order_id
        JOIN
    order_statuses os ON o.status = os.order_status_id;

-- 1st you must complete yesterdays task if you have not
-- 2nd Make a join between customers , orders and Products 
-- table and give all the entries as response


-- Accessing tables accross different databases
USE sql_store;
SELECT 
    *
FROM
    order_items oi
        JOIN
    sql_inventory.products p ON oi.product_id = p.product_id;
    
    


-- to make a self join 
USE sql_hr;
SELECT 
    e.first_name , m.first_name
FROM
    employees e
        JOIN
    employees m ON e.reports_to = m.employee_id;



-- compound join
USE sql_store;
SELECT 
    *
FROM
    order_items oi
        JOIN
    order_item_notes oin ON oi.order_id = oin.order_Id
        AND oi.product_id = oin.product_id;



-- Implicit Joins
USE sql_store;
SELECT 
    *
FROM
    orders o
        JOIN
    customers c ON o.customer_id = c.customer_id;
    
-- implicit way of writing inner join 
-- not Recommended 
SELECT 
    *
FROM
    orders o,
    customers c
WHERE
    o.customer_id = c.customer_id;



-- Outer Join LEFT & right Joins
SELECT 
    *
FROM
    customers c
        RIGHT JOIN
    orders o ON c.customer_id = o.customer_id
ORDER BY c.customer_id;
-- TODO : Outer joins between multiple tables 



-- 1st I want all the customers who have made the orders or not.
-- 2nd I want all the products with their product ids that have an order corresponding to 

-- Excersise 2 
USE sql_store;

SELECT 
    o.order_id AS 'Order ID', o.order_date, c.first_name AS 'Customer', sh.name AS 'Shipper', os.name AS 'Status'
FROM
    orders o
        JOIN
    customers c ON o.customer_id = c.customer_id
        LEFT JOIN
    shippers sh ON sh.shipper_id = o.shipper_id
        JOIN
    order_statuses os ON os.order_status_id = o.status;


-- Aggregate Functions
-- MAX(), MIN(), AVG(), SUM(), COUNT()

USE sql_invoicing;

SELECT * FROM invoices;

SELECT COUNT(invoice_total) FROM invoices;
SELECT MIN(invoice_total) FROM invoices;
SELECT MAX(invoice_total) FROM invoices;
SELECT SUM(invoice_total) FROM invoices;


-- Unions

SELECT 
    COUNT(invoice_total) AS 'Aggregate Func'
FROM
    invoices 
UNION SELECT 
    MIN(invoice_total)
FROM
    invoices;
SELECT * FROM invoices;
    
-- Return a table / query with first row telling us first half of 2019 total_sales also Total payments and difference of those two
-- Return a table / query with second row telling us first half of 2019 total_sales also Total payments and difference of those two
-- do the sum of all the total sales and total payments and net profits.

SELECT 
    'First half of 2019' AS 'Date Range',
    SUM(invoice_total),
    SUM(payment_total),
    SUM(invoice_total - payment_total)
FROM
    invoices
WHERE
    invoice_date BETWEEN '2019-01-01' AND '2019-06-30' 
UNION SELECT 
    'Second half of 2019' AS 'Date Range',
    SUM(invoice_total),
    SUM(payment_total),
    SUM(invoice_total - payment_total)
FROM
    invoices
WHERE
    invoice_date BETWEEN '2019-07-01' AND '2019-012-31' 
UNION SELECT 
    'Total' AS 'Date Range',
    SUM(invoice_total),
    SUM(payment_total),
    SUM(invoice_total - payment_total)
FROM
    invoices;


-- Group By clause
SELECT 
    client_id, SUM(invoice_total)
FROM
    invoices
GROUP BY client_id;


-- Group By for multiple columns
SELECT 
    city, state, SUM(invoice_total) AS 'Total'
FROM
    invoices i
        JOIN
    clients c ON c.client_id = i.client_id
GROUP BY state , city;

-- Excersise
SELECT 
    p.date,
    pm.name AS 'Payment Methods',
    SUM(amount) AS 'Total Payments'
FROM
    payments p
        JOIN
    payment_methods pm ON p.payment_method = pm.payment_method_id
GROUP BY p.date, payment_method
ORDER BY date;

-- how to create a view
CREATE VIEW sales_by_client AS
SELECT 
    c.client_id, c.name, SUM(invoice_total) AS total_sales
FROM
    clients c
        JOIN
    invoices i USING (client_id)
GROUP BY client_id , name;


-- how to call a view
SELECT * FROM sales_by_client;



-- stored procedure
DELIMITER //
CREATE PROCEDURE sp_sales_by_client()
BEGIN

END;







