import React from 'react';

const FestivalCard = ({ festival }) =>
{
	return (
    <div className='tc grow bg-light-green br3 pa3 ma2 dib bw2 shadow-5 w-30'>
      <img alt='festival' src={require(`../../Images/${Math.floor(Math.random() * 4) + 1}.jpg`)}/> 
      <div>
        <h2>{festival.displayName}</h2>
        <h3>{festival.location.city}</h3>
        <h4>Start: {festival.start.date} | End: {festival.end.date}</h4>
        <p> {Math.round((festival.popularity + Number.EPSILON) * 100) / 10}/10 popularity </p>
      </div>
    </div>
  );
};


export default FestivalCard;