import React, { useEffect, useMemo, useState } from "react";
import { BarChart3, Search, SlidersHorizontal, Filter } from "lucide-react";
import { FeedbackCategory } from "../types";
import FeedbackCard from "../components/FeedbackCard";
import StatsBox from "../components/StatsBox";
import Label from "../components/Label";
import { useFeedbackList } from "../hooks/useFeedback";
import { debounce } from "lodash";

const Dashboard: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [debouncedSearch, setDebouncedSearch] = useState<string>("");
  const [selectedCategory, setSelectedCategory] = useState<
    FeedbackCategory | "all"
  >("all");
  const [sortBy, setSortBy] = useState<"newest" | "oldest">("newest");
  const [showFilters, setShowFilters] = useState(false);
  const [page, setPage] = useState<number>(1);
  const limit = 10;

  const getCategoryLabel = (category: FeedbackCategory): string => {
    const labels: Record<FeedbackCategory, string> = {
      suggestion: "Suggestion",
      bug: "Bug Report",
      feature: "Feature Request",
      question: "Question",
      other: "Other",
    };
    return labels[category] || "Unknown";
  };

  const getCategoryColor = (category: FeedbackCategory): string => {
    const colors: Record<FeedbackCategory, string> = {
      suggestion: "bg-blue-100 text-blue-800",
      bug: "bg-red-100 text-red-800",
      feature: "bg-purple-100 text-purple-800",
      question: "bg-yellow-100 text-yellow-800",
      other: "bg-gray-100 text-gray-800",
    };
    return colors[category] || "bg-gray-100 text-gray-800";
  };

  const debouncedUpdateSearch = useMemo(
    () =>
      debounce((value: string) => {
        setDebouncedSearch(value);
      }, 500),
    []
  );

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
    debouncedUpdateSearch(e.target.value);
  };

  const { data: feedbacks, isLoading } = useFeedbackList({
    category: selectedCategory == "all" ? "" : selectedCategory,
    sortBy: "createdAt",
    order: sortBy == "newest" ? "desc" : "asc",
    userName: debouncedSearch,
    page,
    limit,
  });

  const totalPages = Math.ceil((feedbacks?.totalCount || 0) / limit);

  useEffect(() => {
    return () => {
      debouncedUpdateSearch.cancel();
    };
  }, [debouncedUpdateSearch]);

  return (
    <div className="max-w-6xl mx-auto">
      <div className="overflow-hidden border shadow-md border-text rounded-3xl bg-747254e">
        <div className="px-8 py-6 bg-gradient-to-r from-1fb4c06 to-f50fea6 via-941cbe0">
          <h1 className="flex items-center text-2xl font-bold text-white">
            <BarChart3 className="mr-2" />
            Feedback Dashboard
          </h1>
          <p className="mt-2 text-blue-100">
            Browse, filter, and analyze user feedback
          </p>
        </div>

        {/* Stats section */}
        <div className="grid grid-cols-1 gap-4 p-6 bg-transparent border-b md:grid-cols-5 border-secondary">
          {isLoading ? (
            Array.from({ length: 5 }).map((_, index) => (
              <div
                key={index}
                className="h-16 bg-gray-300 rounded-lg animate-pulse"
              ></div>
            ))
          ) : (
            <>
              <StatsBox
                heading="Total Feedback"
                text={String(feedbacks?.feedbacks?.length)}
              />
              {feedbacks?.categoryCounts.map((value) => (
                <StatsBox
                  key={value._id}
                  heading={getCategoryLabel(value._id as FeedbackCategory)}
                  text={String(value.count)}
                />
              ))}
            </>
          )}
        </div>

        {/* Search and filters */}
        <div className="p-6 border-b border-secondary">
          <div className="flex flex-col gap-4 md:flex-row">
            <div className="relative flex-grow">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <Search className="w-5 h-5 text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="Search feedback..."
                value={searchTerm}
                onChange={handleSearchChange}
                className="block w-full py-2 pl-10 pr-3 text-white bg-transparent border rounded-lg outline-none border-secondary focus:ring-2 focus:ring-blue-300 focus:border-blue-300"
              />
              {isLoading && (
                <div className="absolute right-3 top-2">
                  <div className="w-5 h-5 border-2 border-blue-500 rounded-full border-t-transparent animate-spin"></div>
                </div>
              )}
            </div>

            <button
              onClick={() => setShowFilters(!showFilters)}
              className="px-4 py-2 flex items-center justify-center transition-colors bg-1fb4c06 rounded-lg hover:bg-941cbe0 md:max-w-[150px] text-white"
            >
              <SlidersHorizontal className="w-5 h-5 mr-2" />
              Filters
            </button>
          </div>

          {showFilters && (
            <div className="grid grid-cols-1 gap-4 p-4 mt-4 border rounded-lg border-secondary md:grid-cols-2">
              <div>
                <Label>
                  <Filter className="inline-block w-4 h-4 mr-1" />
                  Category
                </Label>
                <select
                  title="category"
                  value={selectedCategory}
                  onChange={(e) =>
                    setSelectedCategory(
                      e.target.value as FeedbackCategory | "all"
                    )
                  }
                  className="block w-full px-3 py-2 border rounded-md outline-none border-secondary bg-transaparent focus:ring-2 focus:ring-blue-300 focus:border-blue-300"
                >
                  <option value="all">All Categories</option>
                  <option value="suggestion">Suggestion</option>
                  <option value="bug">Bug Report</option>
                  <option value="feature">Feature Request</option>
                  <option value="question">Question</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <Label>Sort By</Label>
                <select
                  title="sort by"
                  value={sortBy}
                  onChange={(e) =>
                    setSortBy(e.target.value as "newest" | "oldest")
                  }
                  className="block w-full px-3 py-2 border border-gray-300 rounded-md outline-none focus:ring-2 focus:ring-blue-300 focus:border-blue-300"
                >
                  <option value="newest">Newest First</option>
                  <option value="oldest">Oldest First</option>
                </select>
              </div>
            </div>
          )}
        </div>

        {/* Feedback list */}
        <div className="p-6">
          {isLoading ? (
            <div className="space-y-6">
              {Array.from({ length: 5 }).map((_, index) => (
                <div
                  key={index}
                  className="h-16 bg-gray-300 rounded-lg animate-pulse"
                ></div>
              ))}
            </div>
          ) : feedbacks?.feedbacks?.length === 0 ? (
            <div className="py-12 text-center">
              <div className="w-12 h-12 mx-auto text-gray-400">
                <svg
                  className="w-full h-full"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                  />
                </svg>
              </div>
              <h3 className="mt-2 text-sm font-medium text-gray-900">
                No results found
              </h3>
              <p className="mt-1 text-sm text-gray-500">
                No feedback matching your current filters. Try changing your
                search or filters.
              </p>
            </div>
          ) : (
            <div className="space-y-6">
              {feedbacks?.feedbacks?.map((feedback) => (
                <FeedbackCard
                  key={feedback._id}
                  feedback={feedback}
                  getCategoryColor={getCategoryColor}
                  getCategoryLabel={getCategoryLabel}
                />
              ))}
            </div>
          )}
        </div>

        {/* Pagination */}
        <div className="flex justify-center gap-2 my-6">
          <button
            disabled={page <= 1}
            onClick={() => setPage(page - 1)}
            className="px-4 py-2 text-white border border-white rounded disabled:opacity-50"
          >
            Previous
          </button>
          <span className="flex items-center px-4 text-white">
            {page} / {totalPages}
          </span>
          <button
            disabled={page >= totalPages}
            onClick={() => setPage(page + 1)}
            className="px-4 py-2 text-white border border-white rounded disabled:opacity-50"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
