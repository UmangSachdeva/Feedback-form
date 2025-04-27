export type FeedbackCategory =
  | "suggestion"
  | "bug"
  | "feature"
  | "question"
  | "other";

export interface Feedback {
  _id: string;
  userName: string;
  email: string;
  category: FeedbackCategory;
  feedbackText: string;
  createdAt: Date;
}
