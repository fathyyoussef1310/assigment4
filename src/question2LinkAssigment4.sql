TABLE user{
  id int [pk]
  last_name varchar
  first_name varchar
  email varchar [unique]
  password varchar
  role varchar
}

Table UserPhone {
  user_id int
  phone varchar

  indexes {
    (user_id, phone) [pk]
  }
}


Table Product {
  id int [pk]
  name varchar
  stock int
  isDeleted boolean
  price numeric(10,2)
  user_id int
}

Ref: user.id < UserPhone.user_id
Ref: user.id < Product.user_id