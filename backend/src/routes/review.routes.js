const express = require('express');
const router = express.Router();
const {
  createReview,
  getReviews,
  getAllReviews,
  updateReviewStatus,
  deleteReview
} = require('../controllers/review.controller');

// Public routes
router.post('/', createReview); // Submit a new review
router.get('/', getReviews); // Get approved reviews for display

// Admin routes (you might want to add authentication middleware later)
router.get('/admin', getAllReviews); // Get all reviews for admin
router.put('/admin/:id/status', updateReviewStatus); // Update review status
router.delete('/admin/:id', deleteReview); // Delete review

module.exports = router;
