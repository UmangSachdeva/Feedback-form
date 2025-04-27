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