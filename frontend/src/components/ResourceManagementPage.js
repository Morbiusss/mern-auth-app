import React, { useEffect, useState, useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { getResources, createResource, updateResource, deleteResource } from '../services/resourceService';

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
        <div>
            <h1>Resource Management</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required
                />
                <textarea
                    placeholder="Description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    required
                />
                <button type="submit">{editingResourceId ? 'Update' : 'Create'} Resource</button>
            </form>
            <ul>
                {resources.map(resource => (
                    <li key={resource._id}>
                        <h3>{resource.title}</h3>
                        <p>{resource.description}</p>
                        <button onClick={() => handleEdit(resource)}>Edit</button>
                        <button onClick={() => handleDelete(resource._id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ResourceManagementPage;