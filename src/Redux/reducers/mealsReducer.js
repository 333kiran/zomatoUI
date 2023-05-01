
import * as actionType from '../constants/mealsConstant';

export const getMealsTypeReducer = (state = {meals: []}, action) => {
    switch(action.type) {
        case actionType.GET_MEALS_SUCCESS:
          return {meals: action.payload}
        case actionType.GET_MEALS_FAIL:  
           return { error: action.payload}
        default:
            return state;
     }
}

export const getRestaurantByMealReducer = (state = {mealType: []}, action)  => {
  switch(action.type) {
    case actionType.GET_MEALTYPE_REQUEST:
       return { loading: true}

     case actionType.GET_MEALTYPE_SUCCESS:
       return { loading:false, mealType: action.payload}
       
     case actionType.GET_MEALTYPE_Fail:
       return {  loading:false ,error: action.payload}  

       default:
          return state
 }
}