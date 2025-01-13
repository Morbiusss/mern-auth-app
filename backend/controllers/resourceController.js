const Resource = require('../models/Resource');
const User = require('../models/User');

// Create a new resource
exports.createResource = async (req, res) => {
    try {
        const { title, description } = req.body;
        const resource = new Resource({
            title,
            description,
            owner: req.user.id
        });
        await resource.save();
        res.status(201).json({ message: 'Resource created successfully', resource });
    } catch (error) {
        res.status(500).json({ message: 'Error creating resource', error: error.message });
    }
};

// Get all resources
exports.getResources = async (req, res) => {
    try {
        const resources = await Resource.find().populate('owner', 'username email');
        res.status(200).json(resources);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching resources', error: error.message });
    }
};

// Update a resource
exports.updateResource = async (req, res) => {
    try {
        const { id } = req.params;
        const resource = await Resource.findById(id);

        if (!resource) {
            return res.status(404).json({ message: 'Resource not found' });
        }

        if (resource.owner.toString() !== req.user.id) {
            return res.status(403).json({ message: 'Unauthorized to update this resource' });
        }

        resource.title = req.body.title || resource.title;
        resource.description = req.body.description || resource.description;
        await resource.save();

        res.status(200).json({ message: 'Resource updated successfully', resource });
    } catch (error) {
        res.status(500).json({ message: 'Error updating resource', error: error.message });
    }
};

// Delete a resource
exports.deleteResource = async (req, res) => {
    try {
        const { id } = req.params;
        const resource = await Resource.findById(id);

        if (!resource) {
            return res.status(404).json({ message: 'Resource not found' });
        }

        if (resource.owner.toString() !== req.user.id) {
            return res.status(403).json({ message: 'Unauthorized to delete this resource' });
        }

        await resource.remove();
        res.status(200).json({ message: 'Resource deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error deleting resource', error: error.message });
    }
};