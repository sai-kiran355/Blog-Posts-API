"# Blog-Posts-API" 
 RESTful API with Node.js, Express & MongoDB

A simple RESTful API built with **Node.js**, **Express**, and **MongoDB**.  
This project demonstrates CRUD operations (Create, Read, Update, Delete) using RESTful principles.

---

🚀 Features
- Create, Read, Update, Delete (CRUD) operations
- MongoDB for database
- Express.js for server & routing
- Mongoose for data modeling
- Postman (or Thunder Client) for API testing
- Error handling with proper status codes

---

## 📂 Project Structure
RESTFUL-API/
│-- config/ # Database connection
│-- models/ # Mongoose models (schemas)
│-- routes/ # Express routes (if added later)
│-- index.js # Main entry point
│-- package.json
│-- .gitignore

-

🛠️ Technologies Used
Node.js
Express.js
MongoDB (Mongoose)
Postman (for testing)

 ⚙️ Installation & Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/<your-username>/<your-repo>.git
   cd RESTFUL-API
2.Install dependencies:
   npm install
3.Setup environment variables:
Create a .env file in the root directory and add:

PORT=5000
MONGO_URI=mongodb://127.0.0.1:27017/restfulapi
4.Run the server:
npm start

