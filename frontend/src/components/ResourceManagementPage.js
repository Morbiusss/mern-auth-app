import React, { useEffect, useState, useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { getResources, createResource, updateResource, deleteResource } from '../services/resourceService';
import { Container, TextField, Button, Typography, Box, List, ListItem, ListItemText, IconButton } from '@mui/material';
import { Edit, Delete } from '@mui/icons-material';

const ResourceManagementPage = () => {
    const { user } = useContext(AuthContext);
    const [resources, setResources] = useState([]);
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [editingResourceId, setEditingResourceId] = useState(null);

    useEffect(() => {
        fetchResources();
    }, []);

    const fetchResources = async () => {
        const data = await getResources();
        setResources(data);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (editingResourceId) {
            await updateResource(editingResourceId, { title, description });
        } else {
            await createResource({ title, description });
        }
        setTitle('');
        setDescription('');
        setEditingResourceId(null);
        fetchResources();
    };

    const handleEdit = (resource) => {
        setTitle(resource.title);
        setDescription(resource.description);
        setEditingResourceId(resource._id);
    };

    const handleDelete = async (id) => {
        await deleteResource(id);
        fetchResources();
    };

    return (
        <Container maxWidth="md" sx={{ mt: 4 }}>
            <Typography variant="h4" gutterBottom>
                Resource Management
            </Typography>
            <Box component="form" onSubmit={handleSubmit} sx={{ mb: 4 }}>
                <TextField
                    label="Title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    fullWidth
                    margin="normal"
                    required
                />
                <TextField
                    label="Description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    fullWidth
                    margin="normal"
                    required
                />
                <Button type="submit" variant="contained" color="primary" sx={{ mt: 2 }}>
                    {editingResourceId ? 'Update Resource' : 'Create Resource'}
                </Button>
            </Box>
            <List>
                {resources.map((resource) => (
                    <ListItem key={resource._id} sx={{ borderBottom: '1px solid #ddd' }}>
                        <ListItemText
                            primary={resource.title}
                            secondary={resource.description}
                        />
                        <IconButton edge="end" aria-label="edit" onClick={() => handleEdit(resource)}>
                            <Edit />
                        </IconButton>
                        <IconButton edge="end" aria-label="delete" onClick={() => handleDelete(resource._id)}>
                            <Delete />
                        </IconButton>
                    </ListItem>
                ))}
            </List>
        </Container>
    );
};

export default ResourceManagementPage;