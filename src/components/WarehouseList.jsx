import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { filterWarehouses } from '../app/warehouseSlice';

const WarehouseList = () => {
    const dispatch = useDispatch();
    const [search, setSearch] = useState("");
    const warehouses = useSelector(state => state.warehouse.filteredData);

    const handleFilter = () => {
        dispatch(filterWarehouses({ search }));
    };

    return (
        <div className='main-container'>
            <h1>Warehouse List</h1>
            <div className='search-box'>
                <input
                    className='input-box'
                    type="text"
                    placeholder="Search by name, city, cluster, or space"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />
                <button className='search-btn' onClick={handleFilter}>Search</button>
            </div>

            <table>
                <thead>
                    <tr>
                        <th>Warehouse Name</th>
                        <th>Details</th>
                    </tr>
                </thead>
                <tbody>
                    {warehouses.map(warehouse => (
                        <tr key={warehouse.id}>
                            <td><span className="warehouse-name">{warehouse.name}</span></td>
                            <td>
                                <Link className="click-btn" to={`/warehouse/${warehouse.id}`}>
                                    View Details ➜
                                </Link>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

        </div>
    );
};

export default WarehouseList;