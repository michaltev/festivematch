import React from 'react';
import Rating from '@material-ui/lab/Rating';

const FestivalCard = ({ festival }) =>
{
	return (
    <div className='tc grow bg-light-green br3 pa3 ma2 dib bw2 shadow-5 w-30'>
      <img alt='festival' src={require(`../../Images/${Math.floor(Math.random() * 4) + 1}.jpg`)}/> 
      <div>
        <h2 className={festival.status !== "ok" ? "red" : "black"}>{festival.displayName}</h2>
        <h3>{festival.location.city}</h3>
        <h4>Start: {festival.start.date} | End: {festival.end.date}</h4>
        <Rating name="popularity" 
                value={(Math.round(festival.popularity * 10 * 2) / 2).toFixed(1)}
                max={10}
                precision={0.5}
                readOnly />
      </div>
    </div>
  );
};


export default FestivalCard;