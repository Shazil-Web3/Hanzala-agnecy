"use client";

import { useState, useEffect } from "react";
import { ReviewForm } from "./ReviewForm";

const GlobalReviewForm = () => {
  const [isReviewFormOpen, setIsReviewFormOpen] = useState(false);

  const openReviewForm = () => {
    setIsReviewFormOpen(true);
  };

  const closeReviewForm = () => {
    setIsReviewFormOpen(false);
  };

  // Set up global function for opening review form
  useEffect(() => {
    if (typeof window !== "undefined") {
      window.openReviewForm = openReviewForm;
    }
  }, []);

  return (
    <ReviewForm 
      isOpen={isReviewFormOpen} 
      onClose={closeReviewForm} 
    />
  );
};

export default GlobalReviewForm;
