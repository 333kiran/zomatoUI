
import * as actionType from '../constants/restaurantConstant';


export const getRestaurantReducer = (state = {restaurants: []}, action) => {
     switch(action.type) {
        case actionType.GET_RESTAURANTS_SUCCESS:
          return {restaurants: action.payload}
        case actionType.GET_RESTAURANTS_FAIL:  
           return { error: action.payload}
        default:
            return state;
     }
}

export const getRestaurantByLocationReducer = (state = {restaurantByLocations: {}},action) => {
   switch(action.type) {
    //   case actionType.GET_RESTAURANT_BY_LOCATION_REQUEST:
    //      return { loading: true}

       case actionType.GET__RESTAURANT_BY_LOCATION_SUCCESS:
         return {  restaurantByLocations: action.payload}
         
       case actionType.GET_RESTAURANT_BY_LOCATION_FAIL:
         return {  error: action.payload}  

        // case actionType.GET_RESTAURANT_BY_LOCATION_RESET:
        //  return { restaurantByLocation:{}} 
        
         default:
            return state
   }
}



export const getRestaurantDetailsReducer = (state = {restaurant: []},action) => {
   switch(action.type) {
       case actionType.GET_RESTAURANT_DETAILS_REQUEST:
         return { loading: false}

       case actionType.GET_RESTAURANT_DETAILS_SUCCESS:
         return {loading:false,  restaurant: action.payload}
         
       case actionType.GET_RESTAURANT_DETAILS_FAIL:
         return { loading:false, error: action.payload}  

       
        
         default:
            return state
   }
}