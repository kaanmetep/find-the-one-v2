export const getMatchColor = (percentage) => {
  if (percentage > 90) {
    return {
      bg: "bg-gradient-to-r from-red-600 to-red-700",
      text: "text-red-100",
      border: "border-red-300",
    };
  } else if (percentage >= 70 && percentage <= 90) {
    return {
      bg: "bg-gradient-to-r from-red-400 to-red-500",
      text: "text-red-100",
      border: "border-red-300",
    };
  } else if (percentage >= 50 && percentage < 70) {
    return {
      bg: "bg-gradient-to-r from-yellow-500 to-yellow-700",
      text: "text-yellow-100",
      border: "border-yellow-300",
    };
  } else {
    return {
      bg: "bg-gradient-to-r from-gray-300 to-gray-400",
      text: "text-gray-100",
      border: "border-gray-300",
    };
  }
};
