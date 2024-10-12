import { createSlice } from "@reduxjs/toolkit";
import warehousesData from "../data/data";

const initialState = {
    data: warehousesData,
    filteredData: warehousesData,
}

export const warehouseSlice = createSlice({
    name: 'warehouse',
    initialState,
    reducers: {
        filterWarehouses: (state, action) => {
            const { search } = action.payload;
        
            const searchTerms = search.toLowerCase().split(' ');
        
            state.filteredData = state.data.filter((warehouse) => {
                const nameMatch = searchTerms.some(term => warehouse.name.toLowerCase().includes(term));
                const cityMatch = searchTerms.some(term => warehouse.city.toLowerCase().includes(term));
                const clusterMatch = searchTerms.some(term => warehouse.cluster.toLowerCase().includes(term));
                const spaceAvailableMatch = searchTerms.some(term => {
                    const termNumber = parseFloat(term);
                    return !isNaN(termNumber) && warehouse.space_available <= termNumber;
                });
        
                return nameMatch || cityMatch || clusterMatch || spaceAvailableMatch;
            });
        },
        
        updateWarehouse: (state, action) => {
            const { id, updatedData } = action.payload;
            const index = state.data.findIndex(warehouse => warehouse.id === id);
            if (index !== -1) {
                state.data[index] = { ...state.data[index], ...updatedData };
            }
        }
    }
})

export const { filterWarehouses, resetFilters, updateWarehouse } = warehouseSlice.actions

export default warehouseSlice.reducer; 