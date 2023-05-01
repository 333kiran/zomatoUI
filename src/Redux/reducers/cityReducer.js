
import * as actionType from "../constants/cityConstant";

export const getCityListReducer = (state = {citylists: []}, action) => {
    switch(action.type) {
       case actionType.GET_CITYLIST_SUCCESS:
         return {citylists: action.payload}
       case actionType.GET_CITYLIST_FAIL:  
          return { error: action.payload}
       default:
           return state;
    }
}
