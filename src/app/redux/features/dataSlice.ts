import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CardProps {
    ID: number,
    museum: string,
    thumb: string,
    period: number,
    name: string;
    description: string,
    uuid: string,
};

interface FilterObject {
    id: number,
    title: string,
    items: Array<string|number>
}

interface DataState {
    data: Array<CardProps> | [],
    filterData: Array<CardProps> | [],
    loading: boolean,
    filterOption: Array<FilterObject> | [],
    error: string | null,
    selectedFilter: Array<string> | []
}

const initialState: DataState = {
    data: [],
    loading: false,
    filterData: [],
    error: null,
    filterOption: [],
    selectedFilter: []
}

const dataSlice = createSlice({
    name: 'data',
    initialState,
    reducers: {
        initiateFetchData: (state)=> {
            state.loading = false;
            state.error = null;
        },
        fetchDataSuccess: (state, action: PayloadAction<any[]>) =>{
            state.loading = false;
            state.data = action.payload;
            state.filterData = action.payload
        },
        fetchDataFailure: (state, action: PayloadAction<string>) => {
            state.loading = false;
            state.error = action.payload;
        },
        filterData: (state, action: PayloadAction<string>) => {
            state.error=null;
            const searchText = action.payload.toLowerCase().trim();
            state.filterData = state.data.filter((item) => {
            return (
                item.name.toLowerCase().indexOf(searchText) >= 0 ||
                item.description.toLowerCase().indexOf(searchText) >= 0
            );
            });
            if (state.selectedFilter.length) {
                state.filterData = state.filterData.filter(item=> {
                    return state.selectedFilter.includes(item.period.toLocaleString() as never);
                })
            }
            if (state.filterData.length === 0) {
                state.error='No data found!, Please search for other keys'
            }
            
        },
        fetchFilterOptions: (state, action: PayloadAction<CardProps[]>) => {
            state.filterOption=[
                {
                    id: 1,
                    title: "Select Dynasty",
                    items: ["Nalanda, Bihar, India", "Somnath, Uttar Pradesh, India", "Jagannath Tekri, Pauni, Maharashtra", "Chola Tamilnadu", "Achichchatra"]
                },{
                  id: 2,
                  title: "Select Period",
                  items: Array.from(new Set(action.payload.map(item=> item.period)))
                },
                {
                    id: 3,
                    title: 'Select Material',
                    items: []
                },
                {
                    id: 4,
                    title: "Select Region",
                    items: []
                }
            ]
        },
        selectFilterOption: (state, action:PayloadAction<string>) => {
            state.error = null;
            if (state.selectedFilter.indexOf(action.payload as never) == -1) {
                state.selectedFilter=[...state.selectedFilter, action.payload];
            }
            state.filterData = state.data.filter(item=> {
                return state.selectedFilter.includes(item.period.toLocaleString() as never);
            })
            if (state.filterData.length === 0) {
                state.error='No data found!, Please select other options'
            }

        },
        removeSelectedFilterOption: (state, action: PayloadAction<string>) =>{
            state.error = null;
            state.selectedFilter= state.selectedFilter.filter(item => item!=action.payload);
            if (state.selectedFilter.length) {
                state.filterData = state.data.filter(item=> {
                    return state.selectedFilter.includes(item.period.toLocaleString() as never);
                })
            } else {
                state.filterData = state.data;
            }
            if (state.filterData.length === 0) {
                state.error='No data found!, Please select other filter'
            }
            
        }
    },
});


export const { initiateFetchData, fetchDataSuccess, fetchDataFailure, fetchFilterOptions, selectFilterOption, filterData, removeSelectedFilterOption} = dataSlice.actions;
export default dataSlice.reducer;