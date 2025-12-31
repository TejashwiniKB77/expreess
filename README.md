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

