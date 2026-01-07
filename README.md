<<<<<<< HEAD
# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is enabled on this template. See [this documentation](https://react.dev/learn/react-compiler) for more information.

Note: This will impact Vite dev & build performances.

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
=======
Node.js Backend – JWT Authentication
This project upgrades an existing Node.js backend by implementing secure authentication and authorization using JSON Web Tokens (JWT).
Features
•	User Signup & Signin APIs
•	Password hashing using bcrypt
•	JWT token generation & validation
•	Protected APIs (Create, Update, Delete, Image retrieval)
•	Proper error handling
•	Tested using Postman
•	
Technologies Used
•	Node.js
•	Express.js
•	MongoDB
•	JWT (jsonwebtoken)
•	bcrypt
•	Postman

Authentication APIs
🔹 Signup API
POST /api/auth/signup
Request Body
{
  "name": "Tejashwini",
  "email": "test@gmail.com",
  "password": "password123"
}
Response
{
  "message": "User registered successfully"
}
 Signin API
POST /api/auth/signin
Request Body
{
  "email": "test@gmail.com",
  "password": "password123"
}
Response
{
  "token": "JWT_TOKEN_HERE"
}

 JWT Usage Instructions
•	JWT must be sent in Authorization Header
Authorization: Bearer <JWT_TOKEN>
•	Backend verifies token before allowing access to protected APIs

 Protected Routes
Method	API	Access
POST	/api/students	Protected
PUT	/api/students/:id	Protected
DELETE	/api/students/:id	Protected
GET	/api/images/:name	Protected

Unauthorized Access
•	Missing Token → 403 Forbidden
•	Invalid Token → 401 Unauthorized
•	Expired Token → 401 Unauthorized
 API Testing
All APIs were tested using Postman:
•	Successful signup
•	Successful signin with token generation
•	Access to protected APIs using JWT
•	Access denied without token
(Screenshots included in submission)

 Project Structure
backend/
│── controllers/
│── routes/
│── middleware/
│── models/
│── app.js
│── server.js

>>>>>>> 5a43212c39ddd4c266f5c6097189aaf66e80fb61
