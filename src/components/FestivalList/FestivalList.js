import React from 'react';
import FestivalCard from '../FestivalCard/FestivalCard';

const FestivalList = ({festivals}) =>
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
};


export default FestivalList;