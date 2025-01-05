# micro-instagram-backend
Here’s a professional and detailed `README.md` file for your project. You can customize it based on your specific project details.

---

# **Micro Instagram Backend**

This is a backend project for a simplified Instagram-like application. The backend is built using Node.js and MongoDB and implements RESTful APIs to manage users and their posts.

---

## **Features**
- **User Management**:
  - Create a user.
  - Retrieve all users.
- **Post Management**:
  - Create, update, delete, and retrieve posts for users.
- **Relational Data**:
  - Each post is associated with a user using MongoDB references.

---

## **Technologies Used**
- **Backend Framework**: Node.js with Express.js.
- **Database**: MongoDB (via Mongoose ODM).
- **Testing**: Optional testing framework like Jest or Mocha.
- **Environment Configuration**: dotenv.

---

## **API Endpoints**

### **User APIs**
1. **Create User**  
   **POST** `/users`  
   **Request Body**:
   ```json
   {
     "name": "John Doe",
     "mobileNumber": 9876543210,
     "address": "123 Main St, Springfield"
   }
   ```
   **Response**:
   ```json
   {
     "_id": "64b9f0c7f1c1e57ac3f9d873",
     "name": "John Doe",
     "mobileNumber": 9876543210,
     "address": "123 Main St, Springfield",
     "postCount": 0,
     "__v": 0
   }
   ```

2. **Get All Users**  
   **GET** `/users`  
   **Response**:
   ```json
   [
     {
       "_id": "64b9f0c7f1c1e57ac3f9d873",
       "name": "John Doe",
       "mobileNumber": 9876543210,
       "address": "123 Main St, Springfield",
       "postCount": 0
     }
   ]
   ```

### **Post APIs**
1. **Create Post**  
   **POST** `/posts`  
   **Request Body**:
   ```json
   {
     "title": "First Post",
     "description": "This is my first post",
     "userId": "64b9f0c7f1c1e57ac3f9d873",
     "images": ["image1.jpg", "image2.jpg"]
   }
   ```
   **Response**:
   ```json
   {
     "_id": "64b9f0c7f1c1e57ac3f9d874",
     "title": "First Post",
     "description": "This is my first post",
     "userId": "64b9f0c7f1c1e57ac3f9d873",
     "images": ["image1.jpg", "image2.jpg"]
   }
   ```

2. **Get All Posts**  
   **GET** `/posts`  
   **Response**:
   ```json
   [
     {
       "_id": "64b9f0c7f1c1e57ac3f9d874",
       "title": "First Post",
       "description": "This is my first post",
       "userId": "64b9f0c7f1c1e57ac3f9d873",
       "images": ["image1.jpg", "image2.jpg"]
     }
   ]
   ```

3. **Edit Post**  
   **PUT** `/posts/:id`  
   **Request Body**:
   ```json
   {
     "title": "Updated Post",
     "description": "This is an updated description"
   }
   ```

4. **Delete Post**  
   **DELETE** `/posts/:id`  

---

## **Setup Instructions**

### **Prerequisites**
- Node.js and npm installed.
- MongoDB installed and running locally or access to a cloud MongoDB instance (e.g., MongoDB Atlas).

### **Steps to Run**
1. **Clone the Repository**:
   ```bash
   git clone <repository_url>
   cd <repository_folder>
   ```

2. **Install Dependencies**:
   ```bash
   npm install
   ```

3. **Set Up Environment Variables**:
   Create a `.env` file in the root directory and add the following:
   ```
   PORT=3000
   MONGO_URI=mongodb://localhost:27017/micro_instagram
   ```

4. **Run Migrations (if applicable)**:
   If you have any migration scripts, run them to set up the database schema.

5. **Start the Server**:
   ```bash
   npm start
   ```

6. **Run Tests**:
   ```bash
   npm test
   ```

---

## **Folder Structure**
```
micro-instagram-backend/
├── controllers/         # Contains logic for handling requests
│   ├── userController.js
│   ├── postController.js
├── models/              # Mongoose models
│   ├── User.js
│   ├── Post.js
├── routes/              # API routes
│   ├── userRoutes.js
│   ├── postRoutes.js
├── middleware/          # Middleware functions
├── utils/               # Helper functions
├── tests/               # Unit and integration tests
├── .env                 # Environment variables
├── server.js            # Entry point for the application
├── package.json         # Node.js project metadata
```

---

## **Example Usage**
### Using Postman
1. Start the server.
2. Use the following endpoints to interact with the API:
   - `GET /users`
   - `POST /users`
   - `GET /posts`
   - `POST /posts`
3. Refer to the API section for sample payloads.

---

## **Contribution Guidelines**
1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch-name`).
3. Commit your changes (`git commit -m 'Add some feature'`).
4. Push to the branch (`git push origin feature-branch-name`).
5. Open a pull request.

---
