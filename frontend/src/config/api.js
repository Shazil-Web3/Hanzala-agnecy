// API Configuration
const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || '';

export const API_ENDPOINTS = {
  CONTACT: '/api/contact',
  REVIEWS: `${API_BASE_URL}/api/reviews`,
};

export default API_BASE_URL;

