# Node.js Backend – JWT Authentication

This project implements secure authentication and authorization using JSON Web Tokens (JWT) in Node.js.

## Features
- User Signup & Signin
- Password hashing using bcrypt
- JWT token generation and verification
- Protected APIs
- Centralized error handling
- Morgan logging
- Error logs stored in MongoDB
- Tested using Postman

## Technologies
- Node.js
- Express.js
- MongoDB
- JWT
- bcrypt
- Morgan

## Authentication APIs

### Signup
POST /api/auth/signup

### Signin
POST /api/auth/signin

## Protected Routes
- POST /api/students
- PUT /api/students/:id
- DELETE /api/students/:id

## Error Logging
All errors are handled using a centralized middleware and stored in MongoDB.
