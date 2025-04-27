import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import {
  fetchFeedbacks,
  createFeedback,
  FetchFeedbackResponse,
} from "../api/feedbackApi";

interface UseFeedbackListParams {
  category?: string;
  userName?: string;
  sortBy?: "createdAt" | "userName";
  order?: "asc" | "desc";
  feedbackText?: string;
  page?: number;
  limit?: number;
}

export const useFeedbackList = (params?: UseFeedbackListParams) => {
  return useQuery<FetchFeedbackResponse>({
    queryKey: ["feedbacks", params],
    queryFn: () => fetchFeedbacks(params),
  });
};

export const useCreateFeedback = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: createFeedback,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["feedbacks"] });
    },
  });
};
