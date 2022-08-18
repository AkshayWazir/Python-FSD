CREATE PROCEDURE `get_client_detail` ()
BEGIN
SELECT 
    c.client_id, c.name, SUM(invoice_total) AS total_sales
FROM
    clients c
        JOIN
    invoices i USING (client_id)
GROUP BY client_id , name;
END
