import React from "react";
import { Calendar, User, Mail } from "lucide-react";
import { Feedback, FeedbackCategory } from "../types";

interface FeedbackCardProps {
  feedback: Feedback;
  getCategoryLabel: (category: FeedbackCategory) => string;
  getCategoryColor: (category: FeedbackCategory) => string;
}

const FeedbackCard: React.FC<FeedbackCardProps> = ({
  feedback,
  getCategoryLabel,
  getCategoryColor,
}) => {
  // Format date nicely
  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = {
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  return (
    <div className="overflow-hidden rounded-xl transition-shadow duration-300 border bg-gradient-to-r from-[#02042D] via-[#99999917] to-[#99999917] border-text shadow-sm  hover:shadow-md">
      <div className="p-5">
        <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
          <span
            className={`text-xs font-medium px-2.5 py-0.5 rounded ${getCategoryColor(
              feedback.category
            )}`}
          >
            {getCategoryLabel(feedback.category)}
          </span>
          <div className="flex items-center text-sm text-gray-500">
            <Calendar className="w-4 h-4 mr-1" />
            {formatDate(String(feedback.createdAt))}
          </div>
        </div>

        <p className="mb-4 text-white whitespace-pre-line">
          {feedback.feedbackText}
        </p>

        <div className="flex items-center justify-between pt-4 border-t border-secondary">
          <div className="flex items-center text-sm text-text">
            <User className="w-4 h-4 mr-1" />
            <span>{feedback.userName}</span>
          </div>

          <div className="flex items-center text-sm text-text">
            <Mail className="w-4 h-4 mr-1" />
            <span>{feedback.email}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeedbackCard;
