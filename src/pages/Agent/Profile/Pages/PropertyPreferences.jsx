import React, { useState } from 'react'
import LandTagSearch from '../components/LandTagSearch';

const PropertyPreferences = () => {

    const [formData, setFormData] = useState({
        propertyTypes: [],
        subcategories: [],
        apartmentTypes: [],
        furnishingTypes: [],
        facing: [],
        cities: [],
        minPrice: '',
        maxPrice: '',
        bedrooms: '',
        bathrooms: '',
        propertyAgeMin: '',
        propertyAgeMax: '',
        newProperties: false,
        propertyView: '',
        amenities: []
    });

    const [amenityInput, setAmenityInput] = useState('');
    const [cityInput, setCityInput] = useState('');
    const [selectedAmenities, setSelectedAmenities] = useState([]);
    const [selectedCities, setSelectedCities] = useState([]);

    const amenitiesOptions = ['Pool', 'Solar Panels', 'Security', 'Gym', 'Parking'];
    const citiesOptions = ['Hyderabad', 'Bangalore', 'Chennai', 'Delhi', 'Mumbai'];


    const handleCheckboxChange = (event, fieldName) => {
        const { value, checked } = event.target;
        setFormData((prev) => ({
            ...prev,
            [fieldName]: checked
                ? [...prev[fieldName], value]
                : prev[fieldName].filter((item) => item !== value),
        }));
    };

    const handleInputChange = (event) => {
        const { name, value, type, checked } = event.target;
        setFormData((prev) => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value,
        }));
    };

    const handleSave = () => {
        console.log('Form Data:', formData);
        // Handle form save logic
    };



    // const renderTagSearch = (title, options, input, setInput, selected, setSelected, placeholder) => (
    //     <div className="tag-search">
    //         <h2 className="search-title">{title}</h2>
    //         <div className="search-container">
    //             <input
    //                 type="text"
    //                 className="search-input"
    //                 placeholder={placeholder}
    //                 value={input}
    //                 onChange={(e) => handleTagInputChange(e, setInput)}
    //             />
    //             {input && (
    //                 <ul className="options-list">
    //                     {getFilteredOptions(options, input, selected).map((option) => (
    //                         <li
    //                             key={option}
    //                             className="option-item"
    //                             onClick={() => handleTagSelect(option, options, selected, setSelected, setInput)}
    //                         >
    //                             {option}
    //                         </li>
    //                     ))}
    //                 </ul>
    //             )}
    //         </div>
    //         <div className="selected-tags">
    //             {selected.map((tag) => (
    //                 <span key={tag} className="tag">
    //                     {tag}
    //                     <button
    //                         type="button"
    //                         className="tag-remove"
    //                         onClick={() => handleTagRemove(tag, selected, setSelected)}
    //                     >
    //                         X
    //                     </button>
    //                 </span>
    //             ))}
    //         </div>
    //     </div>
    // );

    return (
        <section className='account-settings-section property-preferences-section'>
            <div className='section-heading'>
                <div className="profile-breadcrumb">
                    <span>Profile & Settings / <span className='breadcrumb-active-page'>Property Preferences</span></span>
                </div>
                <div className='mediumHeading'>
                    <span>Profile</span>
                </div>
            </div>

            <div className="property-prefrences-form">
                <form className="property-form">
                    <h2>Preferred Property Types</h2>
                    <div className="checkbox-group">
                        {['Residential', 'Commercial', 'Plots', 'Farmlands', 'Industrial Properties'].map((type) => (
                            <label key={type}>
                                <input
                                    type="checkbox"
                                    value={type}
                                    onChange={(e) => handleCheckboxChange(e, 'propertyTypes')}
                                />
                                {type}
                            </label>
                        ))}
                    </div>

                    <h2>Preferred Property Subcategories</h2>
                    <div className="checkbox-group">
                        {['Apartments', 'Villas', 'Office Spaces', 'Shops', 'Studio Apartments'].map((sub) => (
                            <label key={sub}>
                                <input
                                    type="checkbox"
                                    value={sub}
                                    onChange={(e) => handleCheckboxChange(e, 'subcategories')}
                                />
                                {sub}
                            </label>
                        ))}
                    </div>

                    <h2>Preferred Apartment Types</h2>
                    <div className="checkbox-group">
                        {['1 BHK', '2 BHK', '3 BHK', '5 BHK'].map((type) => (
                            <label key={type}>
                                <input
                                    type="checkbox"
                                    value={type}
                                    onChange={(e) => handleCheckboxChange(e, 'apartmentTypes')}
                                />
                                {type}
                            </label>
                        ))}
                    </div>

                    <h2>Preferred Furnishing Types</h2>
                    <div className="checkbox-group">
                        {['Fully Furnished', 'Semi furnished', 'Unfurnished'].map((furnish) => (
                            <label key={furnish}>
                                <input
                                    type="checkbox"
                                    value={furnish}
                                    onChange={(e) => handleCheckboxChange(e, 'furnishingTypes')}
                                />
                                {furnish}
                            </label>
                        ))}
                    </div>

                    <h2>Preferred Facing</h2>
                    <div className="checkbox-group">
                        {['North', 'South', 'East', 'West', 'North-East', 'North-West', 'South-East', 'South-West'].map((facing) => (
                            <label key={facing}>
                                <input
                                    type="checkbox"
                                    value={facing}
                                    onChange={(e) => handleCheckboxChange(e, 'facing')}
                                />
                                {facing}
                            </label>
                        ))}
                    </div>


                    <div className="preffered-width">
                        {/* <h2>Preferred Cities/Locations</h2>
                        <div className="tag-search">
                            <input
                                type="text"
                                placeholder="Search Cities"
                                value={cityInput}
                                onChange={(e) => handleTagInputChange(e, setCityInput)}
                                list="city-options"
                            />
                            <datalist id="city-options">
                                {citiesOptions
                                    .filter((city) => !formData.cities.includes(city) && city.toLowerCase().includes(cityInput.toLowerCase()))
                                    .map((city) => (
                                        <option key={city} value={city} onClick={() => handleTagSelect(city, 'cities', setCityInput)}>
                                            {city}
                                        </option>
                                    ))}
                            </datalist>

                            <div className="tag-container">
                                {formData.cities.map((city) => (
                                    <span key={city} className="tag">
                                        {city}
                                        <button type="button" className="tag-remove" onClick={() => handleTagRemove(city, 'cities')}>
                                            x
                                        </button>
                                    </span>
                                ))}
                            </div>
                        </div> */}


                        <LandTagSearch
                            title="Preferred Cities/Locations"
                            options={citiesOptions}
                            input={cityInput}
                            setInput={setCityInput}
                            selected={selectedCities}
                            setSelected={setSelectedCities}
                            placeholder="Search Cities"
                        />

                        <h2>Price Range</h2>
                        <div className="price-range">
                            <select name="minPrice" value={formData.minPrice} onChange={handleInputChange}>
                                <option value="">Min Price</option>
                                {/* Add price options here */}
                            </select>
                            <select name="maxPrice" value={formData.maxPrice} onChange={handleInputChange}>
                                <option value="">Max Price</option>
                                {/* Add price options here */}
                            </select>
                        </div>

                        <h2>Number of Bedrooms</h2>
                        <select name="bedrooms" value={formData.bedrooms} onChange={handleInputChange}>
                            <option value="">Select</option>
                            {/* Add bedroom options here */}
                        </select>

                        <h2>Number of Bathrooms</h2>
                        <select name="bathrooms" value={formData.bathrooms} onChange={handleInputChange}>
                            <option value="">Select</option>
                            {/* Add bathroom options here */}
                        </select>

                        <h2>Preferred Property Age</h2>
                        <div className="price-range">
                            <input type="text" placeholder="Min" name="propertyAgeMin" onChange={handleInputChange} />
                            <input type="text" placeholder="Max" name="propertyAgeMax" onChange={handleInputChange} />
                        </div>

                        <div className="property-age-checkbox">
                            <label>
                                <input type="checkbox" name="newProperties" checked={formData.newProperties} onChange={handleInputChange} />
                                I only prefer new properties
                            </label>
                        </div>

                        <h2>Preferred Property View</h2>
                        <select name="propertyView" value={formData.propertyView} onChange={handleInputChange}>
                            <option value="">Select</option>
                            {/* Add property view options here */}
                        </select>

                        <LandTagSearch
                            title="Preferred Amenities"
                            options={amenitiesOptions}
                            input={amenityInput}
                            setInput={setAmenityInput}
                            selected={selectedAmenities}
                            setSelected={setSelectedAmenities}
                            placeholder="Search Amenities"
                        />

                        <button type="button" className="save-btn" onClick={handleSave}>
                            Save
                        </button>
                    </div>
                </form>
            </div >
        </section >
    )
}

export default PropertyPreferences