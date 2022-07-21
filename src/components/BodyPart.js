import React from 'react'
import {Stack,Typography} from '@mui/material';
import Icon from '../assets/icons/body.png.png'
const BodyPart = ({item,setBodyPart,bodyPart}) => {
  return (
    <Stack
    type="button"
    alignItems="center"
    justifyContent="center"
    className="bodyPart-card"


//items-> ALL,BACK,CARDIO......
//BODYPART->EITHER ONE OF THEM


    //here whatever bodyPart we will click will have a bordert top as red
    //else every other functionalities remains the same
    sx={bodyPart === item ? { borderTop: '4px solid #FF2625', background: '#fff', borderBottomLeftRadius: '20px', width: '270px', height: '282px', cursor: 'pointer', gap: '47px' } : { background: '#fff', borderBottomLeftRadius: '20px', width: '270px', height: '282px', cursor: 'pointer', gap: '47px' }}
    onClick={() => {
      setBodyPart(item);
      window.scrollTo({ top: 1800, left: 100, behavior: 'smooth' });
    }}
  >
    
    <Typography fontSize="24px" fontWeight="bold" fontFamily="Alegreya"  color="#3A1212" textTransform="capitalize"> {item}</Typography>

    </Stack>
  )
}

export default BodyPart