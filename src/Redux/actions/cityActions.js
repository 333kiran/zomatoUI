import axios from 'axios';

import * as actionType from '../constants/cityConstant';

const URL = "http://localhost:8087";

export const getCityList = () => async (dispatch) => {
    try{
        const {data} = await axios.get(`${URL}/citylist`);
        dispatch({
            type: actionType.GET_CITYLIST_SUCCESS,
            payload: data
        });
    } catch(error) {
        dispatch({
            type: actionType.GET_CITYLIST_FAIL,
             payload: error.message      
        })
    }
}

