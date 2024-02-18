    CREATE TABLE Cart
    (
        cart_id VARCHAR(7) NOT NULL,
        PRIMARY KEY(cart_id)
    );

    CREATE TABLE Customer
    (
        customer_id VARCHAR(7) NOT NULL,
        name VARCHAR(20) NOT NULL,
        email VARCHAR(30) NOT NULL,
        password VARCHAR(20) NOT NULL,
        address TEXT NOT NULL,
        pincode INTEGER NOT NULL,
        phone_number number(10) NOT NULL,
        PRIMARY KEY (customer_id),
        cart_id VARCHAR(7) NOT NULL,
        FOREIGN KEY(cart_id) REFERENCES cart(cart_id)
    );



    CREATE TABLE Payment
    (
        payment_id VARCHAR(10) NOT NULL,
        payment_date DATE NOT NULL,
        payment_type VARCHAR(10) NOT NULL,
        customer_id VARCHAR(6) NOT NULL,
        cart_id VARCHAR(7) NOT NULL,
        PRIMARY KEY (payment_id),
        FOREIGN KEY (customer_id) REFERENCES Customer(customer_id),
        FOREIGN KEY (cart_id) REFERENCES Cart(cart_id),
        total_amount integer
    );

    CREATE TABLE Product
    (
        product_id VARCHAR(10) NOT NULL,
        product_name VARCHAR(20) NOT NULL,
        product_company VARCHAR(20) NOT NULL,
        color VARCHAR(10) NOT NULL,
        size integer NOT NULL,
        gender CHAR(1) NOT NULL,
        cost integer NOT NULL,
        quantity integer NOT NULL,
        PRIMARY KEY (Product_id),
    );

    CREATE TABLE Cart_item
    (
        cart_quantity INTEGER NOT NULL,
        date_added DATE NOT NULL,
        cart_id VARCHAR(7) NOT NULL,
        product_id VARCHAR(10) NOT NULL,
        FOREIGN KEY (cart_id) REFERENCES Cart(cart_id),
        FOREIGN KEY (product_id) REFERENCES Product(product_id),
        Primary key(cart_id,product_id),
        purchased varchar(3) default 'NO';
    );





    alter table Cart_item add purchased varchar(3) default 'NO';





        CREATE TABLE Seller
    (
        Seller_id VARCHAR(6) NOT NULL,
        s_pass VARCHAR(10) NOT NULL,
        Name VARCHAR(20) NOT NULL,
        Address VARCHAR(10) NOT NULL,
        PRIMARY KEY (Seller_id)
    );

    CREATE TABLE Seller_Phone_num
    (
        Phone_num NUMBER(10) NOT NULL,
        Seller_id VARCHAR(6) NOT NULL,
        PRIMARY KEY (Phone_num, Seller_id),
        FOREIGN KEY (Seller_id) REFERENCES Seller(Seller_id)
        ON DELETE CASCADE
    );