import React from 'react'
export default function Home() {
  const percentage = 80;
  return (
    <div >
      <div className='headContainer'>
        <div className='mediumHeading'>
          <span >Welcome Sarah, </span>
        </div>
        <div className='smallHeading'>
          <span >Explore, engage, and manage your land journey effortlessly.</span>
        </div>
        {/* <div style={{ width: '100px', height: '100px' }}>
          <CircularProgressbar
            value={percentage}
            text={`${percentage}%`}
            styles={buildStyles({
              textColor: '#065E14', 
              pathColor: '#065E14', 
              trailColor: '#d6d6d6', 
            })}
          />
        </div> */}
      </div>
{/* 
      <div>
      Quick Stats
        <div>
          Property Listings
        </div>

        <div>
          Active Properties
        </div>
        <div>
          Properties Sold
        </div>
      </div> */}
    </div>
  )
}
