import React, { useState } from 'react';
import { Box } from '@mui/material';
import Exercises from '../Exercises';
import SearchExercises from '../SearchExercises';
import HeroBanner from '../HeroBanner';



//the reason we need these exercises and bodyPart in home and not in searchexercises is
//because these states are going to be reflected all across our application
//not just in searchexercises
const Home= () => {



const [exercises, setExercises] = useState([]);
  const [bodyPart, setBodyPart] = useState('all');
  return (
    <Box>
      <HeroBanner />
      <SearchExercises 
      setExercises={setExercises} 
      bodyPart={bodyPart} 
      setBodyPart={setBodyPart} 
      />
      <Exercises 
      setExercises={setExercises}
       exercises={exercises} 
       bodyPart={bodyPart} />
    </Box>
  );
};


export default Home