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
              key={i}
              name={festival.name}
              date={festival.date}
              imgUrl={festival.imgUrl}
              />
          );
        })
      }
    </div>
	)
};


export default FestivalList;