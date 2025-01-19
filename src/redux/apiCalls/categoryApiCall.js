import { categoryActions } from "../slices/categorySlice";
import request from "../../utils/request";
import {toast} from "react-toastify";

// featch All categories
export function featchCategories(){
    return async (dispatch)=>{
        try {
            const {data} = await request.get("/api/categories");
            dispatch(categoryActions.setCategories(data))
        } catch (error) {
            toast.error(error.response.data.message);
        }
    }
};
// create categories
export function createCategory(newCategory){
    return async (dispatch , getState)=>{
        try {
            const {data} = await request.post(`/api/categories` , newCategory ,{
                headers:{
                    Authorization: "Bearer " + getState().auth.user.token,
                }
            });
            dispatch(categoryActions.addCategory(data));
            toast.success("category created successfully");
        } catch (error) {
            toast.error(error.response.data.message);
        }
    }
};
// delete categories
export function deleteCategory(categoryId){
    return async (dispatch , getState)=>{
        try {
            const {data} = await request.delete(`/api/categories/${categoryId}` ,{
                headers:{
                    Authorization: "Bearer " + getState().auth.user.token,
                }
            });
            dispatch(categoryActions.addCategory(data.categoryId));
            toast.success(data.message);
        } catch (error) {
            toast.error(error.response.data.message);
        }
    }
};