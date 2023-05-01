import axios from 'axios';

import * as actionType from '../constants/restaurantConstant';

const URL = "http://localhost:8087";

export const getRestaurants = () => async (dispatch) => {
    try{
        const {data} = await axios.get(`${URL}/restaurants`);
        dispatch({
            type: actionType.GET_RESTAURANTS_SUCCESS,
            payload: data
        });
    } catch(error) {
        dispatch({
            type: actionType.GET_RESTAURANTS_FAIL,
             payload: error.message      
        })
    }
}

export const getRestaurantByLocation = (locationId) => async (dispatch) => {
    try{
        dispatch({ type: actionType.GET_RESTAURANT_BY_LOCATION_REQUEST});

        const {data} = await axios.get(`${URL}/restaurantByLocationId/${locationId}`);
        dispatch({
            type: actionType.GET__RESTAURANT_BY_LOCATION_SUCCESS,
            payload: data
        });

    } catch(error){
        dispatch({
            type: actionType.GET_RESTAURANT_BY_LOCATION_FAIL,
             payload: error.message      
        })
    }
}


export const getRestaurantDetails = (name) => async (dispatch) => {
    try{
        dispatch({ type: actionType.GET_RESTAURANT_DETAILS_REQUEST});

        const {data} = await axios.get(`${URL}/restaurant/${name}`);
        dispatch({
            type: actionType.GET_RESTAURANT_DETAILS_SUCCESS,
            payload: data
        });

    } catch(error){
        dispatch({
            type: actionType.GET_RESTAURANT_DETAILS_FAIL,
             payload: error.message      
        })
    }
}