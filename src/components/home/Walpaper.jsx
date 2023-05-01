import React,{ useState,useEffect} from 'react';
import { Box,InputBase,styled, Typography } from '@mui/material';
import {FaMapMarkerAlt,FaSearch} from "react-icons/fa";

import { Link } from 'react-router-dom';


import { getRestaurants } from '../../Redux/actions/restaurantAction';

import { useDispatch, useSelector } from 'react-redux';




const Container = styled(Box)`
  background:url("images/Home_Pic.png")   ;
  height:55vh;
  width:100vw;
  text-align:center;
`;

const Logo = styled(Box)`
  padding-top:4rem;
`;

const Text = styled(Typography)`
 color:#fff;
 font-weight:600;
 font-family:sans-sarif;
 font-size:2rem;
 

`;

const InputBox = styled(Box)`
margin-top:2rem;
 display:flex;
 justify-content:center;
 height:3rem;
`;

const SelectBox = styled(Box)`
display:flex;
flex-wrap:wrap;
width:12rem;
background:#fff;
color:black;
padding:3px 15px;
border-radius:3px;
 
`;

const SearchBox = styled(Box)`
 background:#fff;
 color:black;
 margin-left:2rem;
 padding:3px 15px;
 border-radius:6px;

`;

const Search = styled(Box)`
 width:14rem;
 background:rgba(0,0,0,0.4);
 padding:0.5rem 2rem;
 margin-top:0.7rem;
 text-align:left;
 color:#fff;
 cursor:pointer;
`;



const Walpaper = ({citylists}) => {
    const url="https://th.bing.com/th/id/R.b519eccf759554ae2e554f514a75b3a0?rik=jO8AdVILM2xiEg&riu=http%3a%2f%2fstatic.dnaindia.com%2fsites%2fdefault%2ffiles%2f2016%2f01%2f11%2f413434-zomato.jpg&ehk=9eer7PrcbKJt91Zt1CT5bs79dZfqQSmQgr79e83wTrg%3d&risl=&pid=ImgRaw&r=0";
    
  const {restaurants} = useSelector(state => state.getRestaurants);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch( getRestaurants());
  },[dispatch]);


 const [text,setText] = useState("");



 const getText = (text) => {
  setText(text);
}


  return (
    <Container>
       <Logo><img src={url} alt="logo" style={{width:"6rem",height:"6rem",borderRadius:"50%"}}/></Logo>
       <Text>Find the best restaurants, cafes and bars</Text>
       <InputBox>
        <SelectBox>
            <FaMapMarkerAlt style={{color:"green",paddingTop:9,paddingRight:5}}/>
                
            <select style={{outline:"none",border:"none",fontSize:"1rem",width:"10rem"}}
               >
                <option style={{color:"#fff",background:"rgba(0,0,0,0.5)",outline:"none",border:"none"}} >select</option>
                {
                    citylists.map(citylist => {
                      return <option value={citylist.location_id} style={{color:"#fff",background:"rgba(0,0,0,0.5)",outline:"none",border:"none"}} key={citylist.id} >{citylist.name}</option>
                    })
                }
                 </select>
        </SelectBox>
        <SearchBox>
            <FaSearch style={{paddingTop:9,marginRight:5}}/>
            <InputBase placeholder='Search for restaurants'
               onChange={(e) => getText(e.target.value)}
               value = {text}
            />

         {
              text && 
              <Search>
              {
                restaurants.filter((restaurant) => {
                  return restaurant.name.toLowerCase().includes(text.toLocaleLowerCase())
                })
                .map(restaurant => {
                  return <Box key={restaurant.id}>
                 <Link to={`/details`} style={{textDecoration:"none",border:'none',color:"#fff"}}>
                   {restaurant.name}
                    </Link>
                  </Box>
                }).slice(0,5)
              }
              </Search>
            }  
        </SearchBox>

       </InputBox>
       
    </Container>
  )
}

export default Walpaper;