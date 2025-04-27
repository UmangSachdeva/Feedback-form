import React, { useEffect, useState } from "react";
import { Send, CheckCircle } from "lucide-react";
import { FeedbackCategory } from "../types";
import Input from "../components/Input";
import Label from "../components/Label";
import { useCreateFeedback } from "../hooks/useFeedback";
import { CreateFeedbackPayload } from "../api/feedbackApi";

const FeedbackForm: React.FC = () => {
  const {
    mutate: addFeedback,
    isSuccess: formSuccess,
    isPending: isSubmitting,
  } = useCreateFeedback();

  const [formData, setFormData] = useState<CreateFeedbackPayload>({
    userName: "",
    email: "",
    category: "suggestion" as FeedbackCategory,
    feedbackText: "",
  });
  const [errors, setErrors] = useState<
    Partial<Record<keyof typeof formData, string>>
  >({});
  // const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validateForm = () => {
    const newErrors: Partial<Record<keyof typeof formData, string>> = {};

    if (!formData.feedbackText.trim()) {
      newErrors.feedbackText = "Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }

    if (!formData.feedbackText.trim()) {
      newErrors.feedbackText = "Feedback is required";
    } else if (formData.feedbackText.trim().length < 10) {
      newErrors.feedbackText = "Feedback must be at least 10 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    // Clear error when user types
    if (errors[name as keyof typeof formData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    try {
      // Create feedback
      const newFeedback: CreateFeedbackPayload = {
        ...formData,
      };

      // Hit the API and submit the form !!
      addFeedback(newFeedback);
    } catch (error) {
      console.error("Error submitting feedback:", error);
      alert("Failed to submit feedback. Please try again.");
    }
  };

  useEffect(() => {
    if (formSuccess) {
      // Reset form and show success message
      setFormData({
        userName: "",
        email: "",
        category: "suggestion",
        feedbackText: "",
      });

      setIsSubmitted(true);
      setTimeout(() => setIsSubmitted(false), 3000);
    }
  }, [formSuccess]);

  return (
    <div className="max-w-2xl rounded-3xl mx-auto bg-gradient-to-r from-[#02042D] via-[#99999917] to-[#99999917]">
      <div className="overflow-hidden text-white transition-all bg-transparent border shadow-md rounded-3xl border-text">
        <div className="px-8 py-6 bg-gradient-to-r from-1fb4c06 to-f50fea6 via-941cbe0">
          <h1 className="text-2xl font-bold text-white">Share Your Feedback</h1>
          <p className="mt-2 text-blue-100">
            We value your input to help us improve our services
          </p>
        </div>

        {isSubmitted ? (
          <div className="flex flex-col items-center justify-center p-8 text-center">
            <div className="flex items-center justify-center w-16 h-16 mb-4 bg-green-100 rounded-full">
              <CheckCircle className="w-8 h-8 text-green-600" />
            </div>
            <h2 className="text-2xl text-white font-ae8ccaf semibold text-">
              Thank You!
            </h2>
            <p className="mt-2 mb-4 text-text">
              Your feedback has been submitted successfully.
            </p>
            <button
              onClick={() => setIsSubmitted(false)}
              className="px-4 py-2 text-white transition-colors rounded-md bg-1fb4c06 hover:941cbe0"
            >
              Submit Another Feedback
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-8">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <div>
                <Label htmlFor="name">Full Name</Label>
                <Input
                  id="name"
                  name="userName"
                  type="text"
                  value={formData.userName}
                  onChange={handleChange}
                  className={`w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-300 outline-none transition-all ${
                    errors.userName ? "border-red-500" : "border-gray-300"
                  }`}
                  placeholder="Your name"
                />
                {errors.userName && (
                  <p className="mt-1 text-sm text-red-500">{errors.userName}</p>
                )}
              </div>

              <div>
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-300 outline-none transition-all ${
                    errors.email ? "border-red-500" : "border-gray-300"
                  }`}
                  placeholder="Your email"
                />
                {errors.email && (
                  <p className="mt-1 text-sm text-red-500">{errors.email}</p>
                )}
              </div>
            </div>

            <div className="mt-6">
              <Label htmlFor="category">Feedback Category</Label>
              <select
                title="category"
                id="category"
                name="category"
                value={formData.category}
                onChange={handleChange}
                className="w-full px-4 py-2 text-white transition-all bg-transparent border rounded-lg outline-none border-text focus:ring-2 focus:ring-blue-300"
              >
                <option value="suggestion">Suggestion</option>
                <option value="bug">Bug Report</option>
                <option value="feature">Feature Request</option>
                <option value="question">Question</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div className="mt-6">
              <Label htmlFor="text">Your Feedback</Label>
              <textarea
                id="text"
                name="feedbackText"
                rows={5}
                value={formData.feedbackText}
                onChange={handleChange}
                className={`w-full bg-transparent border-text px-4 py-2 border focus:ring-2 focus:ring-blue-300 rounded-xl outline-none transition-all ${
                  errors.feedbackText ? "border-red-500" : "border-gray-300"
                }`}
                placeholder="Please share your thoughts, ideas, or concerns..."
              ></textarea>
              {errors.feedbackText && (
                <p className="mt-1 text-sm text-red-500">
                  {errors.feedbackText}
                </p>
              )}
            </div>

            <div className="mt-8">
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full px-6 py-3 flex items-center justify-center rounded-md text-white font-medium transition-all ${
                  isSubmitting
                    ? "bg-gray-400 cursor-not-allowed"
                    : "bg-1fb4c06 hover:941cbe0"
                }`}
              >
                {isSubmitting ? (
                  <>
                    <svg
                      className="w-5 h-5 mr-3 -ml-1 text-white animate-spin"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    Submitting...
                  </>
                ) : (
                  <>
                    Submit Feedback
                    <Send className="w-4 h-4 ml-2" />
                  </>
                )}
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default FeedbackForm;
