# **E-Commerce Back End**

## **Description**

The **E-Commerce Back End** is a RESTful API application that manages the back-end functionality for an e-commerce platform. Built using **Node.js**, **Express.js**, **Sequelize**, and **PostgreSQL**, this application provides a robust back-end to handle product, category, and tag data.

The application supports CRUD operations for all entities and includes model associations to ensure seamless relationships between products, categories, and tags.

---

## **Table of Contents**
- [Description](#description)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Technologies Used](#technologies-used)
- [Routes](#routes)
- [Database Models](#database-models)
- [Walkthrough Video](#walkthrough-video)
- [Contributing](#contributing)
- [License](#license)

---

## **Features**
- Fully functional API with CRUD operations for:
  - **Categories**
  - **Products**
  - **Tags**
- Relational database using **PostgreSQL**.
- Associations between models for seamless data management.
- Data validation and error handling for robust operations.
- Dynamic seeding of test data.

---

## **Installation**
1. Clone the repository:
   ```bash
   git clone https://github.com/BetsyAssefa/ecommerce-backend.git
   cd ecommerce-backend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up the database:
   - Create a `.env` file in the root directory:
     ```plaintext
     DB_NAME=ecommerce_db
     DB_USER=your_postgres_username
     DB_PASSWORD=your_postgres_password
     DB_HOST=localhost
     DB_PORT=5432
     ```
   - Initialize the database using `schema.sql`:
     ```bash
     psql -U your_postgres_username -d postgres -f db/schema.sql
     ```

4. Seed the database with test data:
   ```bash
   npm run seed
   ```

5. Start the server:
   ```bash
   npm start
   ```

---

## **Usage**
Once the server is running, use tools like **Insomnia** or **Postman** to test the API routes.

### **Base URL**
```
http://localhost:3001/api
```

### **Sample Endpoints**
#### Categories
- **GET** `/categories`: Get all categories.
- **POST** `/categories`: Add a new category.
- **PUT** `/categories/:id`: Update a category by ID.
- **DELETE** `/categories/:id`: Delete a category by ID.

#### Products
- **GET** `/products`: Get all products.
- **POST** `/products`: Add a new product.
- **PUT** `/products/:id`: Update a product by ID.
- **DELETE** `/products/:id`: Delete a product by ID.

#### Tags
- **GET** `/tags`: Get all tags.
- **POST** `/tags`: Add a new tag.
- **PUT** `/tags/:id`: Update a tag by ID.
- **DELETE** `/tags/:id`: Delete a tag by ID.

---

## **Technologies Used**
- **Node.js**: JavaScript runtime for server-side development.
- **Express.js**: Framework for building APIs.
- **Sequelize**: ORM for managing the database.
- **PostgreSQL**: Relational database.
- **dotenv**: Environment variable management.
- **Insomnia/Postman**: API testing tools.

---

## **Database Models**
The database includes the following models:

### **Category**
| Field         | Type     | Description                          |
|---------------|----------|--------------------------------------|
| `id`          | Integer  | Primary key, auto-incremented.       |
| `category_name` | String   | Name of the category (required).    |

### **Product**
| Field         | Type     | Description                          |
|---------------|----------|--------------------------------------|
| `id`          | Integer  | Primary key, auto-incremented.       |
| `product_name` | String   | Name of the product (required).      |
| `price`       | Decimal  | Product price (required).            |
| `stock`       | Integer  | Quantity in stock (default: 10).     |
| `category_id` | Integer  | References `Category.id`.            |

### **Tag**
| Field         | Type     | Description                          |
|---------------|----------|--------------------------------------|
| `id`          | Integer  | Primary key, auto-incremented.       |
| `tag_name`    | String   | Name of the tag.                     |

### **ProductTag**
| Field         | Type     | Description                          |
|---------------|----------|--------------------------------------|
| `id`          | Integer  | Primary key, auto-incremented.       |
| `product_id`  | Integer  | References `Product.id`.             |
| `tag_id`      | Integer  | References `Tag.id`.                 |

---

## **Walkthrough Video**
[Click here to watch the walkthrough video](https://drive.google.com/file/d/15HBeJ9tpYfxuVrWN7vWzrsdyT6cAdTuK/view?usp=sharing)

---

## **Contributing**
Contributions are welcome! Please follow these steps:
1. Fork the repository.
2. Create a feature branch:
   ```bash
   git checkout -b feature/your-feature-name
   ```
3. Commit your changes:
   ```bash
   git commit -m "Add your message here"
   ```
4. Push to your forked repository and create a pull request.

---

## **License**
This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
