import React,{useEffect} from 'react';
import { Box,styled } from '@mui/material';

import { getMealTypes } from '../../Redux/actions/mealsAction';
import { getCityList } from '../../Redux/actions/cityActions';

import { useDispatch, useSelector } from 'react-redux';


//components
import Walpaper from './Walpaper.jsx';
import QuickSearch from './Quickserach.jsx';

const Container = styled(Box)`
  background:"#878787";
  width:100vw;
  height:100vh;
`;

const Home = () => {

  const {meals} = useSelector(state => state.getMealTypes);
  const {citylists} = useSelector(state => state.getCityList);

   const dispatch = useDispatch();

  useEffect(() => {
    dispatch( getCityList());
  },[dispatch]);

  

  useEffect(() => {
   dispatch( getMealTypes());
  },[dispatch]);


  return (
    <Container>
         <Walpaper citylists={citylists}  />
         <QuickSearch  meals={meals}/>
    </Container>
  )
}

export default Home;