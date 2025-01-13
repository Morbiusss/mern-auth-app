# MERN Authentication and Authorization Module

This project is a comprehensive user authentication and authorization module built using the MERN stack (MongoDB, Express.js, React.js, Node.js). It allows users to register, log in, view a protected profile page, and perform CRUD operations on resources with role-based access control.

## Project Description

The application provides a secure environment for users to manage their accounts and resources. It implements secure coding practices, including password hashing, JWT authentication, and role-based access control (RBAC).

## Setup Instructions

### Prerequisites

- Node.js
- MongoDB
- npm or yarn

### Backend Setup

1. Navigate to the `backend` directory:
   ```
   cd backend
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Create a `.env` file in the `backend` directory and add your MongoDB connection string and JWT secret:
   ```
   MONGODB_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret
   ```

4. Start the backend server:
   ```
   node server.js
   ```

### Frontend Setup

1. Navigate to the `frontend` directory:
   ```
   cd frontend
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Start the frontend application:
   ```
   npm start
   ```

## Project Structure Explanation

- **backend/**: Contains the server-side code.
  - **controllers/**: Logic for handling requests.
  - **models/**: Mongoose models for MongoDB.
  - **routes/**: API routes for authentication and resource management.
  - **middleware/**: Middleware for authentication and authorization.
  - **config/**: Database configuration.
  - **.env**: Environment variables.
  - **server.js**: Entry point for the backend application.

- **frontend/**: Contains the client-side code.
  - **src/components/**: React components for different pages.
  - **src/context/**: Context for managing authentication state.
  - **src/services/**: Functions for making API calls.
  - **App.js**: Main application component.
  - **index.js**: Entry point for the frontend application.
  - **public/**: Static files, including the main HTML file.

## API Endpoints Documentation

### Authentication Routes

- **POST /api/auth/register**: Register a new user.
- **POST /api/auth/login**: Log in a user.

### Resource Management Routes

- **POST /api/resources**: Create a new resource (Admin and User).
- **GET /api/resources**: Retrieve all resources (Admin and User).
- **PUT /api/resources/:id**: Update a resource (Admin and User can update their own).
- **DELETE /api/resources/:id**: Delete a resource (Admin only).

## Security Best Practices

- Passwords are hashed using bcrypt before storage.
- JWT is used for secure user authentication.
- Input validation is implemented to prevent SQL injection and XSS attacks.
- API routes are secured with authentication and authorization checks.

## Conclusion

This project serves as a robust foundation for building applications that require user authentication and authorization. It can be extended with additional features such as password recovery, state management with Redux, and pagination for resources.