/**
 * Data source configuration
 * This file determines whether to use mock data or API calls
 */

export const isUsingMockData = () => {
  return (
    process.env.DATA_SOURCE === "DUMMY" ||
    process.env.NEXT_PUBLIC_DATA_SOURCE === "DUMMY"
  );
};

export const getApiUrl = () => {
  return process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000/api";
};
