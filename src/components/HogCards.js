import React, { useState } from 'react';
import HogDetails from './HogDetails';

function HogCards({hogs}) {
  const [showDetails, setShowDetails] = useState(false);

  function handleHogClick(){
    setShowDetails(showDetails => !showDetails);
  };

  const detailsDisplay = showDetails ? 'block' : 'none'

  const hogCardArray = hogs.map(hog => {
    return (
      <div className='pigTile ui eight wide column' key={hog.name}>
        <p className="largeHeader">{hog.name}</p>
        <img 
          src={hog.image} 
          alt={hog.name} 
          className='minPigTile maxPigTile' 
          onClick={handleHogClick}
        />
        <div style={{display:detailsDisplay}}>
          <HogDetails 
            showDetails={showDetails}
            specialty={hog.specialty}
            greased={hog.greased}
            weight={hog.weight}
            medal={hog['highest medal achieved']}
          />
        </div>
      </div>
    )}
  )

  return (
    <div className= 'ui grid container'>
      {hogCardArray}
    </div>
    
  );
};

export default HogCards;