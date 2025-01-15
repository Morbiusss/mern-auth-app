const Resource = require('../models/Resource');

// Create a resource
exports.createResource = async (req, res) => {
    try {
        const { title, description } = req.body;

        const newResource = new Resource({ title, description });
        await newResource.save();
        res.status(201).json({ message: 'Resource created successfully', resource: newResource });
    } catch (error) {
        res.status(500).json({ message: 'Error creating resource', error: error.message });
    }
};

// Get a resource
exports.getResource = async (req, res) => {
    try {
        const { id } = req.params;
        const resource = await Resource.findById(id);
        if (!resource) {
            return res.status(404).json({ message: 'Resource not found' });
        }
        res.status(200).json(resource);
    } catch (error) {
        res.status(500).json({ message: 'Error getting resource', error: error.message });
    }
};

// Get all resources
exports.getAllResources = async (req, res) => {
    try {
        const resources = await Resource.find();
        res.status(200).json(resources);
    } catch (error) {
        res.status(500).json({ message: 'Error getting resources', error: error.message });
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

        await resource.remove();
        res.status(200).json({ message: 'Resource deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error deleting resource', error: error.message });
    }
};