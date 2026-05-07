# Week 3 Assignment: User & Product Management Backend

A robust RESTful API backend built with **Node.js**, **Express**, and **MongoDB (Mongoose)**. This project implements secure user authentication using JWT and manages product data with a clean, modular architecture.

## Features

- **User Authentication**: Secure signup and login with password hashing (bcryptjs) and token-based sessions (JWT).
- **Product Management**: CRUD operations for product resources.
- **Middleware Integration**: Includes custom logic for request parsing and error handling.
- **Database Persistence**: MongoDB integration via Mongoose for scalable data storage.
- **ES Modules**: Modern JavaScript syntax (import/export).

## Tech Stack

- **Runtime**: Node.js
- **Framework**: Express.js
- **Database**: MongoDB (Mongoose)
- **Security**: JSON Web Token (JWT), BcryptJS
- **Configuration**: Dotenv

##  Project Structure

```text
WEEK-3/
├── APIs/                # Route handlers for users and products
│   ├── UserAPI.js       # User-related endpoints
│   └── productAPI.js    # Product-related endpoints
├── models/              # Mongoose data models
│   ├── UserModel.js     # User schema definition
│   └── ProductModel.js  # Product schema definition
├── middlewares/         # Custom Express middlewares
├── server.js            # Main entry point and server setup
├── req.http             # API testing requests
└── package.json         # Project dependencies and scripts
```

##  Installation & Setup

1. **Clone the repository** (if applicable) or navigate to the directory.
2. **Install dependencies**:
   ```bash
   npm install
   ```
3. **Database Setup**:
   Ensure MongoDB is running locally at `mongodb://localhost:27017/anurag` (as configured in `server.js`).
4. **Start the server**:
   ```bash
   npm start
   ```
   The server will run on `http://localhost:4000`.

##  API Endpoints

### User API (`/user-api`)
- `POST /register` - Register a new user.
- `POST /login` - Authenticate user and receive a token.
- *(Check UserAPI.js for more detailed routes)*

### Product API (`/product-api`)
- `GET /products` - Fetch all products.
- `POST /add-product` - Add a new product (may require authentication).
- *(Check productAPI.js for more detailed routes)*

## Testing

You can use the provided `req.http` file with a REST Client (like the VS Code REST Client extension) to test the endpoints directly.


