import React from 'react'
import tradingIcon from "../images/treding.svg";
import wishIcon from "../images/wishlist.svg";
import searchIcon from "../images/search.png";
import filterIcon from "../images/filterslines.svg";
import shareIcon from "../images/share.svg"
import locIcon from "../images/location-icon.png"
import landIcon from "../images/land.png"


export default function LandList() {
    return (
        <div>
            <div className='listingHeader'>
            <div>
                <div className='mediumHeading'>
                    <span>Land Listing</span>
                </div>
                <div className='SmallHeading'>
                    <span>Easily Manage, Track, and Update Your Listings for Maximum Exposure</span>
                </div>
            </div>    

            <div>
            <button class="blackBtn">+ Add New Listing</button>
            </div>
            </div>
            

            <div class="search-filter-container" style={{ position: "relative" }}>
                <div class="search-input-container">
                    <input type="text" id="searchInput" placeholder="Search" class="search-input" />
                    <div class="search-icon">
                        <img src={searchIcon} alt='' />
                    </div>


                </div>

                <button className="filterBtn">
                    <img src={filterIcon} alt="Filter Icon" className="filter-icon" />
                    <span className="filter-txt">More filters</span>
                </button>



            </div>

            <div class="card-container" onclick="handleCardClick('pages/view-land.html')">
                <div class="card">
                    <div class="card-image">
                        <img src={landIcon} alt="land" width="240px" />
                        <div class="labels">
                            <div class="label-shape"><span class="verify-txt">
                                Verified
                            </span></div>
                            <div class="rating">
                                <span class="star-icon">★</span>
                                <span class="rating-value">4.0</span>
                            </div>
                        </div>
                    </div>
                    <div class="card-content">
                        <div class="location-div ">
                            <div class="location-info">
                                <img src={locIcon} alt="Location" width="18px" />
                                <p class="location-txt">Srisailam Highway, Hyderabad</p>
                            </div>

                            <div class="card-actions">
                                <button class="wish-btn"><img src={wishIcon} alt='wish-btn' /></button>
                                <button class="share-btn"><img src={shareIcon} alt='share-btn' /></button>
                                <button class="contact-btn">Contact</button>
                            </div>
                        </div>

                        <div class="price-info">
                            <p class="price">5.25 Cr </p>
                            <p class="price-per-sqft"> | 1377/Sqft</p>
                        </div>
                        <div class="attributes-row">
                            <div class="attribute">
                                <p class="attributes">AREA</p>
                                <p class="attr-value">1503 Sqft</p>
                            </div>
                            <div class="attribute">
                                <p class="attributes">ROAD DISTANCE</p>
                                <p class="attr-value">1Km</p>
                            </div>
                            <div class="attribute">
                                <p class="attributes">SOIL TYPE</p>
                                <p class="attr-value">Black Soil</p>
                            </div>
                            <div class="attribute">
                                <p class="attributes">AVAILABILITY</p>
                                <p class="attr-value">Immediate</p>
                            </div>
                        </div>
                        <div class="trending-info">
                            <img src={tradingIcon} alt="Trending" />
                            <p>Getting high demand than other properties in the same location</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
