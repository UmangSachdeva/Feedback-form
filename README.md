# User Feedback System

A comprehensive feedback collection and management system built with React and Node.js.

## Features

- User-friendly feedback submission form
- Dashboard for viewing and analyzing feedback
- Filter and sort feedback by various criteria
- Categorize feedback (suggestion, bug report, feature request, etc.)
- Responsive design for all devices

## Tech Stack

### Frontend
- React.js
- TypeScript
- React Router for navigation
- Context API for state management
- Tailwind CSS for styling

### Backend
- Node.js
- Express.js
- RESTful API architecture

## Project Structure

```
├── server/                 # Backend code
│   ├── index.js            # Express server setup and API routes
│   └── package.json        # Backend dependencies
│
└── src/                    # Frontend code
    ├── components/         # Reusable UI components
    ├── context/            # React Context for state management
    ├── data/               # Mock data for development
    ├── pages/              # Main page components
    ├── types/              # TypeScript type definitions
    ├── App.tsx             # Main application component
    └── main.tsx            # Application entry point
```

## Getting Started

### Prerequisites

- Node.js (v14 or later)
- npm or yarn

### Installation

1. Clone the repository
```
git clone [repository-url]
cd user-feedback-system
```

2. Install frontend dependencies
```
npm install
```

3. Install backend dependencies
```
cd server
npm install
cd ..
```

### Running the Application

1. Start the backend server
```
cd server
npm run dev
```

2. In a new terminal, start the frontend development server
```
npm run dev
```

3. Open your browser and navigate to `http://localhost:3000`

## API Endpoints

- `GET /api/feedback` - Retrieve all feedback entries
- `POST /api/feedback` - Submit a new feedback entry
- `GET /api/feedback/:id` - Retrieve a specific feedback entry
- `DELETE /api/feedback/:id` - Delete a specific feedback entry

## Data Model

Each feedback entry contains:
- `id` - Unique identifier
- `name` - User's name
- `email` - User's email address
- `category` - Type of feedback (suggestion, bug, feature, question, other)
- `text` - The feedback content
- `timestamp` - When the feedback was submitted

## Future Enhancements

- User authentication for admin access
- Email notifications for new feedback
- Rich text formatting for feedback content
- Analytics dashboard with charts and graphs
- Integration with project management tools

## License

This project is licensed under the MIT License - see the LICENSE file for details.