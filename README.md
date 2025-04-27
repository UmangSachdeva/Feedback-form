# User Feedback System

A comprehensive feedback collection and management system built with React and Node.js.

---

## Features

- **Frontend**:

  - User-friendly feedback submission form.
  - Dashboard for viewing and analyzing feedback.
  - Filter and sort feedback by various criteria.
  - Categorize feedback (suggestion, bug report, feature request, etc.).
  - Responsive design for all devices.

- **Backend**:
  - RESTful API for managing feedback.
  - MongoDB for data storage.
  - Feedback analytics grouped by categories.

---

## Tech Stack

### Frontend

- **React.js**: Component-based UI library.
- **TypeScript**: Strongly typed JavaScript.
- **React Router**: Navigation and routing.
- **Framer Motion**: Animations and transitions.
- **Tailwind CSS**: Utility-first CSS framework.

### Backend

- **Node.js**: JavaScript runtime.
- **Express.js**: Web framework for building APIs.
- **MongoDB**: NoSQL database for storing feedback.

---

## API Endpoints

### 1. **POST /api/feedback**

- **Description**: Submit a new feedback entry.
- **Request Body**:
  ```json
  {
    "userName": "John Doe",
    "email": "john.doe@example.com",
    "feedbackText": "I think it would be great if you could add dark mode.",
    "category": "suggestion"
  }
  ```
- **Response**:
  - **201 Created**:
    ```json
    {
      "_id": "64b8f8e2f1a2c8d1e4b8f8e2",
      "userName": "John Doe",
      "email": "john.doe@example.com",
      "feedbackText": "I think it would be great if you could add dark mode.",
      "category": "suggestion",
      "createdAt": "2023-04-27T10:30:00Z",
      "updatedAt": "2023-04-27T10:30:00Z"
    }
    ```

---

## Local Setup Instructions

### Prerequisites

- **Node.js**: Ensure you have Node.js (v14 or later) installed.
- **MongoDB**: Set up a local or cloud MongoDB instance.
- **npm**: Comes with Node.js.

### Steps to Set Up the Application Locally

1. **Clone the Repository**:

   ```bash
   git clone <repository-url>
   cd Feedback-form
   ```

2. **Set Up the Backend**:

   - Navigate to the `server` directory:
     ```bash
     cd server
     ```
   - Install backend dependencies:
     ```bash
     npm install
     ```
   - Create a `.env` file in the `server` directory based on the `.env.sample` file:
     ```env
     MONGO_URI=<your-mongodb-connection-string>
     PORT=5000
     ```
   - Start the backend server:
     ```bash
     npm run dev
     ```

3. **Set Up the Frontend**:

   - Navigate back to the root directory:
     ```bash
     cd ..
     ```
   - Install frontend dependencies:
     ```bash
     npm install
     ```
   - Start the frontend development server:
     ```bash
     npm run dev
     ```

4. **Access the Application**:
   - Open your browser and navigate to `http://localhost:3000`.

---

## Project Structure

```
├── server/                 # Backend code
│   ├── app.js              # Express server setup
│   ├── config/             # Database configuration
│   ├── controllers/        # API controllers
│   ├── models/             # Mongoose models
│   ├── routes/             # API routes
│   └── .env                # Environment variables
│
└── src/                    # Frontend code
    ├── components/         # Reusable UI components
    ├── context/            # React Context for state management
    ├── data/               # Mock data for development
    ├── hooks/              # Custom React hooks
    ├── pages/              # Main page components
    ├── types/              # TypeScript type definitions
    ├── App.tsx             # Main application component
    └── main.tsx            # Application entry point
```

---

## Future Enhancements

- **Authentication**: Add user authentication for admin access.
- **Notifications**: Email notifications for new feedback submissions.
- **Analytics**: Add charts and graphs for feedback analysis.
- **Integrations**: Connect with project management tools like Jira or Trello.

---
