import React from 'react';
import { ScrollMenu } from 'react-horizontal-scrolling-menu';
import { Box } from '@mui/material';
import ExerciseCard from './ExerciseCard';
 
import BodyPart from './BodyPart';


const HorizontalScrollbar = ({ data, bodyParts, setBodyPart, bodyPart }) => (
  <ScrollMenu >
    {data.map((item) => (
      <Box
        key={item}
        itemId={item}
        title={item}
        m="0 40px"
      >
        {bodyParts ? <BodyPart item={item} setBodyPart={setBodyPart} bodyPart={bodyPart} /> : <ExerciseCard exercise={item} /> }
      </Box>
    ))}
  </ScrollMenu>
);

export default HorizontalScrollbar;