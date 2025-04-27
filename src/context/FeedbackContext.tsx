import React, { createContext, useState, useEffect } from "react";
import { Feedback } from "../types";
import { mockFeedbacks } from "../data/mockData";

// Define the context type
interface FeedbackContextType {
  feedbacks: Feedback[];
  addFeedback: (feedback: Feedback) => Promise<void>;
  isLoading: boolean;
  error: string | null;
}

// Create context with default values
export const FeedbackContext = createContext<FeedbackContextType>({
  feedbacks: [],
  addFeedback: async () => {},
  isLoading: false,
  error: null,
});

// Provider component
export const FeedbackProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [feedbacks, setFeedbacks] = useState<Feedback[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Load initial data
  useEffect(() => {
    const fetchFeedbacks = async () => {
      setIsLoading(true);
      try {
        // In a real app, this would be an API call
        // For demo purposes, we'll use mock data
        // await new Promise(resolve => setTimeout(resolve, 500)); // Simulate network delay
        setFeedbacks(mockFeedbacks);
        setError(null);
      } catch (err) {
        console.error("Error fetching feedbacks:", err);
        setError("Failed to load feedbacks");
      } finally {
        setIsLoading(false);
      }
    };

    fetchFeedbacks();
  }, []);

  // Add a new feedback
  const addFeedback = async (feedback: Feedback) => {
    setIsLoading(true);
    try {
      // In a real app, this would be an API call to POST /feedback
      // For demo purposes, we'll just add to state
      await new Promise((resolve) => setTimeout(resolve, 500)); // Simulate network delay

      setFeedbacks((prev) => [feedback, ...prev]);
      setError(null);
    } catch (err) {
      console.error("Error adding feedback:", err);
      setError("Failed to add feedback");
      throw err; // Re-throw to let the component handle the error
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <FeedbackContext.Provider
      value={{ feedbacks, addFeedback, isLoading, error }}
    >
      {children}
    </FeedbackContext.Provider>
  );
};
