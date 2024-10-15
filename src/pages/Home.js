import React from 'react'
import homeBanner from "../images/banner1.jpg"
import SimilarLands from '../components/SimilarLands'
export default function Home() {
  return (
    <div className='mainContainer'>
      <div className='homeHeader'>
        <h1>Embark on Your Land Journey:<br/>
        Uncover Your Ideal Plot</h1>
        <span>Explore, Purchase, and Sell with Effortless Ease</span>
      </div>
      <div>
        <button className='primaryBtn exploreBtn'>Explore</button>
      </div>

      <div className='homeBanner'>
        <img src={homeBanner}  alt='banner' width="100%" />
      </div>
<SimilarLands/>

    </div>
  )
}
