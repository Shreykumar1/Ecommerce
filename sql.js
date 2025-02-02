const mysql = require('mysql2');
const fs = require('fs')
const products = fs.readFileSync('products.json','utf-8')
const productArray = JSON.parse(products);
// console.log(products);

// Create connection
const connection = mysql.createConnection({
    host : "junction.proxy.rlwy.net",
    user : "root",
    password : "BgXIoEPDfEIjjSHgTEuHIkIPDJbqDOho",
    database : "railway",
    port : "38945"
});
// mysql://root:BgXIoEPDfEIjjSHgTEuHIkIPDJbqDOho@junction.proxy.rlwy.net:38945/railway
// Fetch all tables

// "CREATE TABLE customer (customer_id VARCHAR(7) NOT NULL, name VARCHAR(20) NOT NULL, email VARCHAR(30) NOT NULL, password VARCHAR(20) NOT NULL, address TEXT NOT NULL, pincode INTEGER NOT NULL, phone_number VARCHAR(12) NOT NULL, PRIMARY KEY (customer_id), cart_id VARCHAR(7) NOT NULL, role VARCHAR(6) DEFAULT 'user', FOREIGN KEY(cart_id) REFERENCES cart(cart_id));"

// "CREATE TABLE payment (payment_id VARCHAR(10) NOT NULL, payment_date DATE NOT NULL, payment_type VARCHAR(10) NOT NULL, customer_id VARCHAR(6) NOT NULL, cart_id VARCHAR(7) NOT NULL, PRIMARY KEY (payment_id), FOREIGN KEY (customer_id) REFERENCES customer(customer_id), FOREIGN KEY (cart_id) REFERENCES cart(cart_id), total_amount INTEGER);"

// "CREATE TABLE product (product_id VARCHAR(10) NOT NULL, product_name VARCHAR(20) NOT NULL, product_company VARCHAR(20) NOT NULL, color VARCHAR(10) NOT NULL, size INTEGER NOT NULL, gender CHAR(1) NOT NULL, cost INTEGER NOT NULL, quantity INTEGER NOT NULL, PRIMARY KEY (product_id), image TEXT NOT NULL);"

// "CREATE TABLE cart_item (cart_quantity INTEGER NOT NULL, date_added DATE NOT NULL, cart_id VARCHAR(7) NOT NULL, product_id VARCHAR(10) NOT NULL, FOREIGN KEY (cart_id) REFERENCES cart(cart_id), FOREIGN KEY (product_id) REFERENCES product(product_id) ON DELETE CASCADE, PRIMARY KEY(cart_id, product_id), purchased VARCHAR(3) DEFAULT 'NO');"

const arr = [
  "    CREATE TABLE cart( cart_id VARCHAR(7) NOT NULL,PRIMARY KEY(cart_id));",
  "CREATE TABLE customer (customer_id VARCHAR(7) NOT NULL, name VARCHAR(20) NOT NULL, email VARCHAR(30) NOT NULL, password VARCHAR(20) NOT NULL, address TEXT NOT NULL, pincode INTEGER NOT NULL, phone_number VARCHAR(12) NOT NULL, PRIMARY KEY (customer_id), cart_id VARCHAR(7) NOT NULL, role VARCHAR(6) DEFAULT 'user', FOREIGN KEY(cart_id) REFERENCES cart(cart_id));"
,
"CREATE TABLE product (product_id VARCHAR(10) NOT NULL, product_name VARCHAR(20) NOT NULL, product_company VARCHAR(20) NOT NULL, color VARCHAR(10) NOT NULL, size INTEGER NOT NULL, gender CHAR(1) NOT NULL, cost INTEGER NOT NULL, quantity INTEGER NOT NULL, PRIMARY KEY (product_id), image TEXT NOT NULL);"
,
"CREATE TABLE cart_item (cart_quantity INTEGER NOT NULL, date_added DATE NOT NULL, cart_id VARCHAR(7) NOT NULL, product_id VARCHAR(10) NOT NULL, FOREIGN KEY (cart_id) REFERENCES cart(cart_id), FOREIGN KEY (product_id) REFERENCES product(product_id) ON DELETE CASCADE, PRIMARY KEY(cart_id, product_id), purchased VARCHAR(3) DEFAULT 'NO');"
,
"CREATE TABLE payment (payment_id VARCHAR(10) NOT NULL, payment_date DATE NOT NULL, payment_type VARCHAR(10) NOT NULL, customer_id VARCHAR(6) NOT NULL, cart_id VARCHAR(7) NOT NULL, PRIMARY KEY (payment_id), FOREIGN KEY (customer_id) REFERENCES customer(customer_id), FOREIGN KEY (cart_id) REFERENCES cart(cart_id), total_amount INTEGER);"
]


connection.connect(err => {
  if (err) throw err;
  console.log("Connected to MySQL");


  // const addTable = "CREATE TABLE customer (customer_id VARCHAR(7) NOT NULL, name VARCHAR(20) NOT NULL, email VARCHAR(30) NOT NULL, password VARCHAR(20) NOT NULL, address TEXT NOT NULL, pincode INTEGER NOT NULL, phone_number VARCHAR(12) NOT NULL, PRIMARY KEY (customer_id), cart_id VARCHAR(7) NOT NULL, role VARCHAR(6) DEFAULT 'user', FOREIGN KEY(cart_id) REFERENCES cart(cart_id));";
  // connection.query(addTable, (err, result) => {
  //   if (err) throw err;
  //   console.log("Table added successfully!");
  //   connection.end();
  // });
  // productArray.map((product)=> {  
  //   const {product_id, product_name, product_company, color, size, gender, cost, quantity, image} = product;
  //   connection.query(`insert into product values('${product_id}','${product_name}','${product_company}','${color}',${size},'${gender}',${cost},${quantity},'${image}');`, (err, result) => {
  //     if (err) throw err;
  //     console.log("Tables in Database:");
  //     console.log(result);
  //     // connection.end();
  //   });  
  // //   // console.log({product_id, product_name, product_company, color, size, gender, cost, quantity, image});
    
  // })

  // connection.query("DROP TABLE customer", (err, result) => {
  //   if (err) throw err;
  //   console.log("Tables in Database:");
  //   console.log(result);
  //   connection.end();
  // });

  connection.query("ALTER TABLE cart_item MODIFY purchased VARCHAR(10);", (err, result) => {
    if (err) throw err;
    console.log(result);
    console.log(result);
    connection.end();
  });

    // connection.query("CREATE TABLE payment (payment_id VARCHAR(10) NOT NULL, payment_date DATE NOT NULL, payment_type VARCHAR(10) NOT NULL, customer_id VARCHAR(6) NOT NULL, cart_id VARCHAR(7) NOT NULL, PRIMARY KEY (payment_id), FOREIGN KEY (customer_id) REFERENCES customer(customer_id), FOREIGN KEY (cart_id) REFERENCES cart(cart_id), total_amount INTEGER);", (err, result) => {
    //   if (err) throw err;
    //   console.log("Tables in Database:");
    //   console.log(result);
    //   connection.end();
    // });
  
});
