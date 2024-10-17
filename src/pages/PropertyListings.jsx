import React, { useState } from 'react'
import HeadBanner from '../components/HeadBanner';
// import { Radio, Input, button } from 'antd'
import { SearchOutlined, FilterOutlined, MenuOutlined, EnvironmentOutlined } from '@ant-design/icons'
import ListViewSearch from '../components/ListViewSearch'
import MapViewSearch from '../components/MapViewSearch'
import ListRightContent from '../components/ListRightContent'
import MapRightContent from '../components/MapRightContent'
import '../index.css'

const PropertyListings = () => {
    const [filter, setFilter] = useState('list');

    return (
        <>
            {/* Navbar  */}
            {/* <PublicNavbar /> */}
            {/* Heading banner  */}
            <HeadBanner />
            {/* <h2 className='bg-red-500'>tailwind</h2> */}

            {/* content  */}
            <div className="container lg:flex md:block px-10 lg:px-20 pe-10 my-5">
                {/* left content  */}
                <div className="left lg:w-[60%] md:w-full">
                    {/* search block  */}
                    <div className="search block lg:flex lg:gap-5">
                        <input
                            className='search-input border-2 border-[#065E14] rounded-lg w-[350px]'
                            size='large'
                            prefix={<SearchOutlined />}
                            value='Srisailam'
                        />

                        <div className="flex mt-2 lg:mt-0">
                            <button size='large' className='btn px-7 py-1 border-[#065E14] border-2 rounded-lg'> <FilterOutlined /> More Filter</button>
                            <button size='large' className='bg-[#065E14] text-white px-10 btn ms-2 property-listing-search py-1 rounded-lg' >Search</button>
                        </div>
                    </div>

                    <div className="search-result flex justify-between mt-5 h-auto items-center">
                        <div className="result-found font-bold">
                            {filter === "list" ? "40 results found" : "12 results found"}
                        </div>
                        {/* 
                <div className="filter-option">
                    <Radio.Group
                        size='large'
                        value={filter}
                        onChange={(e) => setFilter(e.target.value)}
                        className='radio-filter'
                    >
                        <Radio.button
                            value="list"
                        >
                            <MenuOutlined />
                        </Radio.button>
                        <Radio.button
                            value="map"
                        >
                            <EnvironmentOutlined />
                        </Radio.button>
                    </Radio.Group>
                </div> */}


                        <div className="flex items-center space-x-2">
                            <button
                                className={`w-16 p-2 rounded-l-lg ${filter === "list" ? "bg-green-700 text-white" : "bg-gray-200"
                                    }`}
                                onClick={() => setFilter("list")}
                            >
                                <MenuOutlined />
                            </button>

                            <button
                                className={`w-16 p-2 rounded-r-lg ${filter === "map" ? "bg-green-700 text-white" : "bg-gray-200"
                                    }`}
                                onClick={() => setFilter("map")}
                            >
                                <EnvironmentOutlined />
                            </button>

                        </div>

                    </div>

                    {filter === "list" ? <ListViewSearch /> : <MapViewSearch />}
                </div>

                {/* right content  */}
                {filter === "list" ? <ListRightContent /> : <MapRightContent />}
            </div>
        </>
    )
}

export default PropertyListings