import React from 'react';
import FestivalCard from '../FestivalCard/FestivalCard';

const FestivalList = ({festivals}) =>
{
  if(festivals.length < 1)
  {
    return (
      <div>
        <h4> No festivals found, try to change the artists... </h4> 
      </div>
    )
  }
  else 
  {
  	return(
        <div>
        {
          festivals.map((festival, i) => {
            return (
              <FestivalCard
                key={i} festival={festival}
                />
            );
          })
        }
      </div>
  	)
  }
};


export default FestivalList;