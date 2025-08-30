# Backend API Documentation

A REST API built with Express.js and MongoDB for managing projects and skills data.

## Overview

This is a Node.js backend API that provides endpoints for managing projects and skills information. It uses Express.js as the web framework and MongoDB with Mongoose for data persistence.

## Tech Stack

- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **MongoDB** - Database
- **Mongoose** - ODM for MongoDB
- **CORS** - Cross-origin resource sharing
- **dotenv** - Environment variable management

## Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file in the root directory with the following variables:
   ```
   MONGO_URI=your_mongodb_connection_string
   PORT=5000
   ```

4. Start the server:
   ```bash
   # Development mode
   npm run dev

   # Production mode
   npm start
   ```

The server will run on `http://localhost:5000` by default.

## API Endpoints

### Base URL
```
http://localhost:5000
```

### Health Check
- **GET** `/` - Returns API status message

### Projects

#### Get All Projects
- **GET** `/api/projects`
- **Response**: Array of project objects
- **Status Codes**: 
  - 200: Success
  - 500: Server error

#### Create Project
- **POST** `/api/projects`
- **Request Body**:
  ```json
  {
    "title": "string (required)",
    "description": "string (required)",
    "tech": "string (required)",
    "github": "string (required)",
    "demo": "string (optional)"
  }
  ```
- **Response**: Created project object
- **Status Codes**:
  - 201: Project created successfully
  - 400: Bad request (validation error)

### Skills

#### Get All Skills
- **GET** `/api/skills`
- **Response**: Array of skill objects
- **Status Codes**:
  - 200: Success
  - 500: Server error

#### Create Skill
- **POST** `/api/skills`
- **Request Body**:
  ```json
  {
    "name": "string (required)",
    "description": "string (required)",
    "icon": "string (required)"
  }
  ```
- **Response**: Created skill object
- **Status Codes**:
  - 201: Skill created successfully
  - 400: Bad request (validation error)

## Data Models

### Project Schema
```javascript
{
  title: String (required),
  description: String (required),
  tech: String (required),
  github: String (required),
  demo: String (optional),
  createdAt: Date (auto-generated),
  updatedAt: Date (auto-generated)
}
```

### Skill Schema
```javascript
{
  name: String (required),
  description: String (required),
  icon: String (required)
}
```

## Example Usage

### Creating a Project
```bash
curl -X POST http://localhost:5000/api/projects \
  -H "Content-Type: application/json" \
  -d '{
    "title": "My Portfolio Website",
    "description": "A responsive portfolio website built with React",
    "tech": "React, CSS3, JavaScript",
    "github": "https://github.com/username/portfolio",
    "demo": "https://myportfolio.com"
  }'
```

### Getting All Projects
```bash
curl http://localhost:5000/api/projects
```

### Creating a Skill
```bash
curl -X POST http://localhost:5000/api/skills \
  -H "Content-Type: application/json" \
  -d '{
    "name": "React",
    "description": "JavaScript library for building user interfaces",
    "icon": "react-icon.svg"
  }'
```

### Getting All Skills
```bash
curl http://localhost:5000/api/skills
```

## Error Handling

All endpoints return JSON error responses with the following format:
```json
{
  "message": "Error description"
}
```

Common error status codes:
- **400**: Bad Request - Invalid input data
- **500**: Internal Server Error - Database or server issues

## Project Structure

```
backend/
├── controllers/
│   ├── projectController.js    # Project-related business logic
│   └── skillController.js      # Skill-related business logic
├── models/
│   ├── Project.js             # Project data model
│   └── Skill.js               # Skill data model
├── routes/
│   ├── projectRoutes.js       # Project API routes
│   └── skillRoutes.js         # Skill API routes
├── server.js                  # Main server file
├── package.json              # Dependencies and scripts
└── README.md                 # This documentation
```

## Scripts

- `npm start` - Start the server in production mode
- `npm run dev` - Start the server in development mode with nodemon
- `npm test` - Run tests (not implemented)

## Dependencies

- **axios**: HTTP client for making requests
- **cors**: Enable cross-origin resource sharing
- **dotenv**: Load environment variables from .env file
- **express**: Web application framework
- **mongoose**: MongoDB object modeling tool
- **nodemon**: Development dependency for auto-restarting server
- **react-router-dom**: Client-side routing (development dependency)