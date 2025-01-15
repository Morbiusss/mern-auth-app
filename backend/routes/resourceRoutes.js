const express = require('express');
const router = express.Router();
const { createResource, getResource, getAllResources, updateResource, deleteResource } = require('../controllers/resourceController');

router.post('/', createResource);
router.get('/', getAllResources); // Add this line to handle getting all resources
router.get('/:id', getResource);
router.put('/:id', updateResource);
router.delete('/:id', deleteResource);

module.exports = router;