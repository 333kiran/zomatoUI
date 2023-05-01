import { createStore, combineReducers, applyMiddleware} from 'redux';

import {composeWithDevTools} from 'redux-devtools-extension';
import  thunk from 'redux-thunk';
 import { getCityListReducer } from './reducers/cityReducer';
 import {getMealsTypeReducer,getRestaurantByMealReducer} from './reducers/mealsReducer';
 import { getRestaurantReducer,getRestaurantDetailsReducer } from './reducers/restaurantReducer';

const reducer = combineReducers({
    getMealTypes:getMealsTypeReducer,
    getRestaurantByMeal:getRestaurantByMealReducer,
     getCityList: getCityListReducer,
     getRestaurants:getRestaurantReducer,
     getRestaurantDetails:getRestaurantDetailsReducer
   //  getRestaurantByLocation:getRestaurantByLocationReducer,

});

const middleware = [thunk];

const Store = createStore (
    reducer,
    composeWithDevTools(applyMiddleware(...middleware))
)

export default Store;