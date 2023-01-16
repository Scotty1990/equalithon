import React, { useState } from 'react';
import '../css/GDPortalPosts.css';
import FilterSearch from './FilterSearch';
import NavBar from './NavBar';
import SearchJobsForm from './SearchJobsForm';
import BottomNav from './BottomNav'
import Pagination from './Pagination'
import { useEffect } from 'react';

function GDPortalPosts() {
    let posts = [
        {
            position: "1Position/Title/Person",
            company: "Company/School/Corporations - On-site/Remote",
            location: "County, City, State/Province",
            perks: "Perks/Benefits",
            time: "Post time"
        },
        {
            position: "Position/Title/Person",
            company: "Company/School/Corporations - On-site/Remote",
            location: "County, City, State/Province",
            perks: "Perks/Benefits",
            time: "Post time"
        },
        {
            position: "Position/Title/Person",
            company: "Company/School/Corporations - On-site/Remote",
            location: "County, City, State/Province",
            perks: "Perks/Benefits",
            time: "Post time"
        },
        {
            position: "2Position/Title/Person",
            company: "Company/School/Corporations - On-site/Remote",
            location: "County, City, State/Province",
            perks: "Perks/Benefits",
            time: "Post time"
        },
        {
            position: "Position/Title/Person",
            company: "Company/School/Corporations - On-site/Remote",
            location: "County, City, State/Province",
            perks: "Perks/Benefits",
            time: "Post time"
        },
        {
            position: "Position/Title/Person",
            company: "Company/School/Corporations - On-site/Remote",
            location: "County, City, State/Province",
            perks: "Perks/Benefits",
            time: "Post time"
        },
        {
            position: "3Position/Title/Person",
            company: "Company/School/Corporations - On-site/Remote",
            location: "County, City, State/Province",
            perks: "Perks/Benefits",
            time: "Post time"
        },
        {
            position: "Position/Title/Person",
            company: "Company/School/Corporations - On-site/Remote",
            location: "County, City, State/Province",
            perks: "Perks/Benefits",
            time: "Post time"
        },
        {
            position: "Position/Title/Person",
            company: "Company/School/Corporations - On-site/Remote",
            location: "County, City, State/Province",
            perks: "Perks/Benefits",
            time: "Post time"
        },
    ]

    const [currentPage, setCurrentPage] = useState(1)
    const [currentPaginationData, setCurrentPaginationData] = useState(posts.slice(0,3))
    const [arr, setArr] = useState([1, 2, 3])
    let pageSize = 3
    let numLen = Math.ceil(posts.length / pageSize)
    console.log(numLen)
    useEffect(() => {
        let len = posts.length, counter = 1

        for (let i = 1; i < 3; i++) {
            // if (len / currentPaginationData.length !== 0 && len / currentPaginationData.length >= 1) {
            //     console.log('upper')
            //     console.log("i: " + i)
            //     setArr(arr.concat(counter))
            //     console.log("upperArr: " + arr)
            //     len /= currentPaginationData.length
            //     counter++
            // } else {
            //     console.log("here")
            //     if (len / currentPaginationData.length !== 0) {
            //         setArr(arr.concat(counter))
            //         break
            //     }
            //     break
            // }
            // if (i === 2)
            //     break
        }
        console.log(arr)
    })

    function updatePage(page) {
        setCurrentPage(page)
        setCurrentPaginationData(posts.slice((page - 1) * 3, page * 3))
    }

    return (        
        <div>
            <NavBar />
            <div id="breadcrumbs-div">
                <select name="plan" id="breadcrumbs-my-gd-portal-dropdown" className='breadcrumbs-dropdowns'>
                    <option value="all-categories">My GD Portal</option>                   
                    <option value="starter">Cat 1 </option>
                    <option value="professional">Cat 2</option>
                    <option value="corporate">Cat 3</option>
                </select>
                <select name="plan" id="breadcrumbs-earn-money-dropdown" className='breadcrumbs-dropdowns'>
                    <option value="all-categories">Earn Money</option>                    
                    <option value="starter">Cat 1 </option>
                    <option value="professional">Cat 2</option>
                    <option value="corporate">Cat 3</option>
                </select>
                <select name="plan" id="breadcrumbs-jobs-dropdown" className='breadcrumbs-dropdowns'>
                    <option value="all-categories">Jobs</option>                    
                    <option value="starter">Cat 1 </option>
                    <option value="professional">Cat 2</option>
                    <option value="corporate">Cat 3</option>
                </select>
            </div>
            <SearchJobsForm 
                textBoxId={`search-text-div-portal-posts`}
                dropdownId={'dropdown-div-portal-posts'}
                findButtonId={'find-btn-portal-posts'}
            />
            <FilterSearch />
            <div id="posts">
                {currentPaginationData.map((item, i) => {
                    return (
                        <div key={i} className='job-posts'>
                            <div className='job-pic'>

                            </div>
                            <div className='positions'>                                
                                {item.position}
                            </div>
                            <div className='companies'>
                                {item.company}
                            </div>
                            <div className='locations'>
                                {item.location}
                            </div>
                            <div className='perks'>
                                {item.perks}
                            </div>
                            <div className='times'>
                                {item.time}
                            </div>
                            <div className="feather-eye-off-container">
                                <svg 
                                    xmlns="http://www.w3.org/2000/svg" 
                                    width="24" 
                                    height="24" 
                                    viewBox="0 0 24 24" 
                                    fill="none" 
                                    stroke="currentColor" 
                                    strokeWidth="2" 
                                    strokeLinecap="round" 
                                    strokeLinejoin="round" 
                                    className="feather feather-eye-off"
                                ><path 
                                    d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"
                                /><line 
                                    x1="1" 
                                    y1="1" 
                                    x2="23" 
                                    y2="23"
                                /></svg>
                            </div>
                            <div className='feather-more-horizontal-container'>
                                <svg 
                                    xmlns="http://www.w3.org/2000/svg" 
                                    width="24" 
                                    height="24" 
                                    viewBox="0 0 24 24" 
                                    fill="none" 
                                    stroke="currentColor" 
                                    strokeWidth="2" 
                                    strokeLinecap="round" 
                                    strokeLinejoin="round" 
                                    className="feather feather-more-horizontal"
                                ><circle 
                                    cx="12" 
                                    cy="12" 
                                    r="1"
                                /><circle 
                                    cx="19" 
                                    cy="12" 
                                    r="1"
                                /><circle 
                                    cx="5" 
                                    cy="12" 
                                    r="1"
                                /></svg>
                            </div>
                            <div className="line-1"></div>
                        </div>
                    )
                })}            
            </div>
            <Pagination 
                currentPage={currentPage}
                onPageChange={((page) => updatePage(page))}
                arr={arr}
                currentPaginationData={currentPaginationData}
            />                         
            <BottomNav 
                id={`portal-posts-bottom-nav`}
            />
        </div>
    );
}

export default GDPortalPosts;