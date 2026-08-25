CREATE TABLE products (
     id SERIAL PRIMARY KEY,
     name VARCHAR(255),
     price NUMERIC(10,2),
     stock INT,
     supplier_id INT NOT NULL,
     CONSTRAINT fk_product_supplier
     FOREIGN KEY (supplier_id)
     REFERENCES suppliers(id)
);


ALTER TABLE products ALTER COLUMN name SET NOT NULL ,
