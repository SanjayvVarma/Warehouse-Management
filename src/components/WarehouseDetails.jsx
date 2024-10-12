import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { updateWarehouse } from '../app/warehouseSlice';

const WarehouseDetail = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const warehouse = useSelector(state =>
        state.warehouse.data.find(wh => wh.id === parseInt(id))
    );

    const [formData, setFormData] = useState({
        name: '',
        city: '',
        space_available: '',
        type: '',
        cluster: '',
        is_registered: false,
        is_live: false,
    });

    const [editField, setEditField] = useState(null);

    useEffect(() => {
        if (warehouse) {
            setFormData({
                name: warehouse.name,
                city: warehouse.city,
                space_available: warehouse.space_available,
                type: warehouse.type,
                cluster: warehouse.cluster,
                is_registered: warehouse.is_registered,
                is_live: warehouse.is_live,
            });
        }
    }, [warehouse]);

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(updateWarehouse({ id: warehouse.id, updatedData: formData }));
        setEditField(null);
    };

    const handleEditClick = (field) => {
        setEditField(field);
    };

    return (
        <div className='main-container'>
            <h1>Warehouse Detail:</h1>
            <table>
                <tbody>
                    <tr>
                        <th>Name</th>
                        <td>
                            {editField === 'name' ? (
                                <input
                                    className='input-details-box'
                                    type="text"
                                    name="name"
                                    autoFocus
                                    value={formData.name}
                                    onChange={handleChange}
                                />
                            ) : (
                                warehouse.name
                            )}
                        </td>
                        <td>
                            {editField === 'name' ? (
                                <button onClick={handleSubmit}>Save</button>
                            ) : (
                                <button onClick={() => handleEditClick('name')}>Edit</button>
                            )}
                        </td>
                    </tr>
                    <tr>
                        <th>City</th>
                        <td>
                            {editField === 'city' ? (
                                <input
                                 className='input-details-box'
                                    type="text"
                                    name="city"
                                    autoFocus
                                    value={formData.city}
                                    onChange={handleChange}
                                />
                            ) : (
                                warehouse.city
                            )}
                        </td>
                        <td>
                            {editField === 'city' ? (
                                <button onClick={handleSubmit}>Save</button>
                            ) : (
                                <button onClick={() => handleEditClick('city')}>Edit</button>
                            )}
                        </td>
                    </tr>
                    <tr>
                        <th>Space Available</th>
                        <td>
                            {editField === 'space_available' ? (
                                <input
                                 className='input-details-box'
                                    type="text"
                                    name="space_available"
                                    autoFocus
                                    value={formData.space_available}
                                    onChange={handleChange}
                                />
                            ) : (
                                warehouse.space_available
                            )}
                        </td>
                        <td>
                            {editField === 'space_available' ? (
                                <button onClick={handleSubmit}>Save</button>
                            ) : (
                                <button onClick={() => handleEditClick('space_available')}>Edit</button>
                            )}
                        </td>
                    </tr>
                    <tr>
                        <th>Type</th>
                        <td>
                            {editField === 'type' ? (
                                <input
                                 className='input-details-box'
                                    type="text"
                                    name="type"
                                    autoFocus
                                    value={formData.type}
                                    onChange={handleChange}
                                />
                            ) : (
                                warehouse.type
                            )}
                        </td>
                        <td>
                            {editField === 'type' ? (
                                <button onClick={handleSubmit}>Save</button>
                            ) : (
                                <button onClick={() => handleEditClick('type')}>Edit</button>
                            )}
                        </td>
                    </tr>
                    <tr>
                        <th>Cluster</th>
                        <td>
                            {editField === 'cluster' ? (
                                <input
                                 className='input-details-box'
                                    type="text"
                                    name="cluster"
                                    autoFocus
                                    value={formData.cluster}
                                    onChange={handleChange}
                                />
                            ) : (
                                warehouse.cluster
                            )}
                        </td>
                        <td>
                            {editField === 'cluster' ? (
                                <button onClick={handleSubmit}>Save</button>
                            ) : (
                                <button onClick={() => handleEditClick('cluster')}>Edit</button>
                            )}
                        </td>
                    </tr>
                    <tr>
                        <th>Register</th>
                        <td>
                            {editField === 'is_registered' ? (
                                <label>
                                    <input
                                        type="checkbox"
                                        name="is_registered"
                                        checked={formData.is_registered}
                                        onChange={handleChange}
                                    />
                                </label>
                            ) : (
                                (warehouse.is_registered ? 'Registered' : 'Not registered')
                            )}
                        </td>
                        <td>
                            {editField === 'is_registered' ? (
                                <button onClick={handleSubmit}>Save</button>
                            ) : (
                                <button onClick={() => handleEditClick('is_registered')}>Edit</button>
                            )}
                        </td>
                    </tr>
                    <tr>
                        <th>Live Status</th>
                        <td>
                            {editField === 'is_live' ? (
                                <label>
                                    <input
                                        type="checkbox"
                                        name="is_live"
                                        checked={formData.is_live}
                                        onChange={handleChange}
                                    />
                                </label>
                            ) : (
                                (warehouse.is_live ? "Live" : "Not Live")
                            )}
                        </td>
                        <td>
                            {editField === 'is_live' ? (
                                <button onClick={handleSubmit}>Save</button>
                            ) : (
                                <button onClick={() => handleEditClick('is_live')}>Edit</button>
                            )}
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default WarehouseDetail;
