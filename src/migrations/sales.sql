CREATE TABLE sales(
    id SERIAL PRIMARY KEY NOT NULL  ,
    product_id INT NOT NULL,
    quantity_sold INT NOT NULL ,
    sale_date DATE,
    CONSTRAINT fk_sale_product
    FOREIGN KEY (product_id)
    REFERENCES products(id)
);