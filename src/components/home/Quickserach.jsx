import React from 'react';
import { Box,Typography,styled } from '@mui/material';
import { Link } from 'react-router-dom';



const Container = styled(Box)`
 width:100vw;
`;

const QuickText = styled(Box)`
  padding-left:4rem;
  padding-top:2rem;
`;

const MainBox = styled(Box)`
  display:flex;
  flex-wrap: wrap;
`;

const Heading = styled(Typography)`
 color:maroon;
 font-weight:600;
 font-size:2rem;
 font-family:sans-sarif;
`;

const SubHeading = styled(Typography)`
opacity:0.7;
`;
const MealBox = styled(Box)`
  display:flex;
  margin:2rem 3rem;
  box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.30);
  
`;

const ImageBox = styled(Box)`
`;

const TextBox = styled(Box)`
  padding:1.5rem 1rem;
  width:10rem;
  height:8rem;
  background:maroon;
`;



const QuickSearch = ({meals}) => {
  return (
    <Container>
     <QuickText>
        <Heading>Quick Searches</Heading>
        <SubHeading>Discover restaurants by type of meal</SubHeading>
     </QuickText>

     <MainBox>

     {
      meals.map(meal => {

    return <Link to="/filter" style={{textDecoration:"none",border:'none',color:"#fff"}}  key={meal.id}>  <MealBox >
        <ImageBox><img src={meal.image} alt="thumbnail" style={{width:"12rem",height:"11rem"}}/></ImageBox>
        <TextBox>
            <Box style={{fontWeight:"bold",color:"#fff"}}>{meal.name}</Box>
            <Box style={{color:"#fff",opacity:0.7,paddingTop:5,textAlign:"left"}}>{meal.content}</Box>
        </TextBox>
     </MealBox>
     </Link>
     })
}
</MainBox>

    </Container>
  )
}

export default QuickSearch;