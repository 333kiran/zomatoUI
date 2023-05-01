import React from 'react';
import Dataprovider from "./Context/DataProvider";
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import {Box} from  "@mui/material";

import Header from './components/Header/Header';
import Home from './components/home/Home';
import RestaurantDetails from './components/Details/RestaurantDetails';
import FilterRestaurant from './components/Filter/FilterRestaurant';


const App = () => {
  return (
    <Dataprovider>
    <BrowserRouter>
    <Header/>
    <Box style={{marginTop:65}}>
     <Routes>
      <Route exact path="/" element={<Home/>}/>
      <Route exact path="/details" element={<RestaurantDetails/>}/>
      <Route exact path="/filter" element={<FilterRestaurant/>}/>
     </Routes>
     </Box>
    </BrowserRouter>
    </Dataprovider>
  )
}

export default App;