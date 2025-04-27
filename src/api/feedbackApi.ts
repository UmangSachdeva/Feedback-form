import axios from "axios";
import { Feedback, FeedbackCategory } from "../types";

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000/api";

interface FetchFeedbackParams {
  category?: string;
  userName?: string;
  sortBy?: "createdAt" | "userName";
  order?: "asc" | "desc";
}

interface CategoryCountType {
  _id: FeedbackCategory;
  count: number;
}

export interface FetchFeedbackResponse {
  feedbacks: Feedback[];
  totalCount: number;
  categoryCounts: CategoryCountType[];
}

export const fetchFeedbacks = async (
  params?: FetchFeedbackParams
): Promise<FetchFeedbackResponse> => {
  const response = await axios.get(`${API_URL}/feedback`, { params });
  return response.data;
};

export interface CreateFeedbackPayload {
  userName: string;
  email: string;
  feedbackText: string;
  category?: string;
}

export const createFeedback = async (
  data: CreateFeedbackPayload
): Promise<Feedback> => {
  const response = await axios.post(`${API_URL}/feedback`, data);
  return response.data;
};
