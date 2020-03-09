import React from 'react';

const FestivalCard = ({ name, date, imgUrl }) =>
{
	return (
    <div className='tc grow bg-light-green br3 pa3 ma2 dib bw2 shadow-5 w-30'>
      <img alt='festival' src={imgUrl} />
      <div>
        <h2>{name}</h2>
        <p>{date}</p>
      </div>
    </div>
  );
};


export default FestivalCard;