const express = require('express');
const { createResource, getResources, updateResource, deleteResource } = require('../controllers/resourceController');
const { protect, authorize } = require('../middleware/authMiddleware');

const router = express.Router();

// Protect all routes
router.use(protect);

// Resource routes
router.route('/')
    .post(authorize('user', 'admin'), createResource) // Create Resource
    .get(getResources); // Read Resources

router.route('/:id')
    .put(authorize('user', 'admin'), updateResource) // Update Resource
    .delete(authorize('admin'), deleteResource); // Delete Resource

module.exports = router;