# Ecommerce-Follow-Along
### Milestone 1 - Project Overview :    
The Ecommerce-Follow-Along project aims to build a fully-functional e-commerce application using the MERN stack (MongoDB, Express.js, React.js, and Node.js)

**Key Features :**   
  - User Authentication: Secure user login and registration functionality.  
  - Product Management: Add, update, and retrieve product data.  
  - Order Handling: Manage customer orders with backend integration.  
  - REST API: Build scalable and secure APIs for communication between client and server.  
  - MongoDB Schema Design: Design and implement structured data models for managing users, products, and orders.  
  
**Tech Stack :**   
  1. Frontend        : React.js  
  2. Backend         : Node.js, Express.js  
  3. Database        : MongoDB  
  4. Authentication  : JWT (JSON Web Tokens) for secure login  

**Introduction to MERN Stack :** You gained an understanding of the MERN stack (MongoDB, Express.js, React.js, and Node.js) and its role in building full-stack web applications. The lesson highlighted the advantages of using JavaScript across both the frontend and backend, simplifying development.  

**Project Overview :** You were introduced to the goals and key features of the "Ecommerce-Follow-Along" project, which includes user authentication, product management, and order handling, all built with the MERN stack.

**API Structure and Endpoints :** You learned about REST APIs and how they enable communication between the client and server. Key endpoints will be built for user registration, login, product management, and order handling.

**Database Schema Design :** The importance of schema design in MongoDB was covered, with a focus on creating structured models for data like users, products, and orders.

**Authentication Basics :** You learned the significance of user authentication in web applications, ensuring secure access to sensitive resources like purchases and personal information.

Milestone 2: Project Setup and Login Page

This milestone focuses on setting up the project structure and implementing a basic login page.

Key Features

- Project Setup: Initialized the project with the required dependencies and folder structure.
- Login Page: A simple login page with fields for username and password.

Tech Stack Used

- Frontend: React, Tailwindcss

Milestone 3: Serevr setup and error handling.


Key Features: 

Organized backend code with a clear folder structure.

Configured a Node.js server using Express to handle APIs.

Integrated MongoDB for data storage and management.

Implemented basic error handling for smooth server operations.

Tech Stack 

 Backend: Node.js, Express  
Database: MongoDB, Mongoose

# Milestone 4 User Management System with File Upload

This project is a simple User Management System that allows the creation, retrieval, and management of user data. It also supports file uploads (like profile pictures) using *Multer*.

## Features
- *User Model*: Blueprint for storing user data in the database.
- *User Controller*: Manages operations like adding, retrieving, and updating user information.
- *File Uploads*: Accepts and stores user-uploaded files (e.g., profile images).
- *Documentation*: Well-documented code for ease of

Milestone 5: Project Signup Setup

This milestone focuses on setting up the project structure and implementing a basic signup page.

Key Features

- Project Setup: Initialized the project with the required dependencies and folder structure.
- Signup Page: A simple signup page with fields for Name Email Password User Photo.

Tech Stack Used

- Frontend: React

**Milestone 6:**
  This milestone focus on the password Encryption and User Data Storage

  Key Features

       1:Password Encryption: Used bcrypt to hash passwords.
       2:User Data Storage: Saved user data securely in the user inputs.

 Tech stack used :
   - Backend : node.js

   **Milestone 7:**
  In this milestone we are going to create a backend endpoint for user and  the focus is on validating user credentials and verifying the encrypted password stored in the database.



Key features:
   1) validate user credentials during login:
Protect User Data: Keeps passwords safe even if the database is compromised.
Privacy: Ensures passwords aren't stored in plain text.
Compliance: Meets security standards like GDPR and PCI-DSS.
Prevents Password Theft: Hashed passwords are difficult to decipher, increasing security.

   2) compare the encrypted password with the user’s input:
User Enters Credentials:

The user provides their email/username and password on the login page.

Fetch User Data from Database:

The backend retrieves the user record based on the provided email/username.
If the user is not found, return an error: "User does not exist."

Compare Encrypted Passwords:

Process the user's input password using the same hashing algorithm (e.g., bcrypt).
Compare the resulting hash to the stored hashed password.
If they match, the user is authenticated; if not, send an error.

Tech stalk:
 Backend : bcryptjs.


**Milestone 8:**
In this milestone,  we will create a frontend card component for products and design a homepage to display these cards for each product.

Key features:
  1) create a card component:
Showcase Products Effectively: Presents product details in a clear and visually appealing way.
Reusable Design: Can be used across multiple pages or sections of the app.
Improved User Experience: Makes it easy for users to browse and interact with products.
Organized Layout: Keeps the homepage clean and structured.
  2) display those cards on the products page:
Create a Dynamic Component: Design a single card component that accepts product details as props.
Use Mapping: Use array mapping to iterate over the product list and render a card for each product.
Pass Data Dynamically: Pass unique product information (e.g., name, price, image) to each card.
Maintain Consistency: Ensure the layout remains uniform for all products.



Tech stack :
Frontend: react