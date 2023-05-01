import axios from 'axios';

import * as actionType from '../constants/mealsConstant';

const URL = "http://localhost:8087";

export const getMealTypes = () => async (dispatch) => {
    try{
         const {data} = await axios.get(`${URL}/meals`);
         dispatch({
            type: actionType.GET_MEALS_SUCCESS,
            payload: data
        });
    }catch(error) {
        dispatch({
            type: actionType.GET_MEALS_FAIL,
             payload: error.message      
        })
    }
}

export const getRestaurantByMeal = (mealType) => async(dispatch) => {
    try{
        const {data} = await axios.get(`${URL}/restaurantByMeal/${mealType}`)
        dispatch({
            type: actionType.GET_MEALTYPE_SUCCESS,
            payload: data
        });
    }catch(error){
        dispatch({
            type: actionType.GET_MEALS_FAIL,
             payload: error.message      
        })
    }
}
