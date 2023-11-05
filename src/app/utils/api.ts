import { AppDispatch } from "../redux/store";
import { initiateFetchData, fetchDataSuccess, fetchDataFailure, fetchFilterOptions } from "../redux/features/dataSlice";

export const fetchAPIData = async (dispatch: AppDispatch) => {
    dispatch(initiateFetchData());
    try {
        const response = await fetch(process.env.NEXT_PUBLIC_API_KEY as RequestInfo);
        const data = await response.json();
        dispatch(fetchDataSuccess(data));
        dispatch(fetchFilterOptions(data));
    } catch (error) {
        dispatch(fetchDataFailure('Failed to fetch data'));
    }
}