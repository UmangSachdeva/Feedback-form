import { Feedback } from '../types';

export const mockFeedbacks: Feedback[] = [
  {
    id: '1',
    name: 'John Doe',
    email: 'john.doe@example.com',
    category: 'suggestion',
    text: 'I think it would be great if you could add dark mode to the application. It would be easier on the eyes, especially when using the app at night.',
    timestamp: '2023-03-15T10:30:00Z'
  },
  {
    id: '2',
    name: 'Jane Smith',
    email: 'jane.smith@example.com',
    category: 'bug',
    text: 'I noticed that when I try to submit a form with special characters, I get an error message. This happens consistently on Chrome and Firefox.',
    timestamp: '2023-03-14T14:45:00Z'
  },
  {
    id: '3',
    name: 'Alex Johnson',
    email: 'alex@example.com',
    category: 'feature',
    text: 'It would be really helpful to have an export to PDF option for reports. This would make it easier to share information with team members who don\'t have access to the system.',
    timestamp: '2023-03-13T09:15:00Z'
  },
  {
    id: '4',
    name: 'Sarah Williams',
    email: 'sarah@example.com',
    category: 'question',
    text: 'Is there a way to change notification settings? I\'m getting too many emails and would like to customize which alerts I receive.',
    timestamp: '2023-03-12T16:20:00Z'
  },
  {
    id: '5',
    name: 'Michael Brown',
    email: 'michael@example.com',
    category: 'suggestion',
    text: 'The dashboard would be more useful if it showed weekly trends instead of just daily data. This would help with identifying patterns over time.',
    timestamp: '2023-03-11T11:10:00Z'
  },
  {
    id: '6',
    name: 'Emily Davis',
    email: 'emily@example.com',
    category: 'bug',
    text: 'The search function doesn\'t seem to be working properly when I include numbers in my search query. It works fine with text only.',
    timestamp: '2023-03-10T13:25:00Z'
  },
  {
    id: '7',
    name: 'David Wilson',
    email: 'david@example.com',
    category: 'feature',
    text: 'I would love to see integration with Google Calendar. This would make scheduling much more efficient for our team.',
    timestamp: '2023-03-09T15:40:00Z'
  },
  {
    id: '8',
    name: 'Olivia Thompson',
    email: 'olivia@example.com',
    category: 'other',
    text: 'The colors used in the charts are too similar and hard to distinguish for someone with color blindness like me. Please consider using more accessible color schemes.',
    timestamp: '2023-03-08T10:05:00Z'
  }
];