import React, { useState } from 'react';
import '../css/Pagination.css';

function Pagination(props) {

    function onNext() {
        props.onPageChange(props.currentPage + 1)
    }

    function onPrevious() {
        props.onPageChange(props.currentPage - 1)
    }
    
    function onSpecificPage(page) {
        props.onPageChange(parseFloat(page.target.innerHTML))
    }

    return (
        <div id="pagination">
            <div id="paginationContainer">
                <button 
                    type="button"
                    className="arrowButton left"
                    aria-label="Goto previous page"
                    // disabled={props.currentPage === 1 ? true: false}
                    style={props.currentPage === 1 ? {visibility: "hidden"} : {visibility: "visible"}}
                    onClick={onPrevious}
                >
                    <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        fill="none" 
                        viewBox="0 0 24 24" 
                        strokeWidth="1.5" 
                        stroke="currentColor" 
                        className="w-6 h-6"
                    ><path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        d="M15.75 19.5L8.25 12l7.5-7.5" 
                    /></svg>
                </button>
                <div id="paginationNumbersContainer">
                    {props.arr.map((item) => {
                        return (
                            <div 
                                key={item} 
                                className={props.currentPage === item ? "stylingContainers" : "paginationNumbersContainers"}
                                onClick={(item) => onSpecificPage(item)}
                            >
                                <div style={props.currentPage === item ? {color: "white"} : {color: ""}} className='paginationNumbers'>{item}</div>
                            </div>
                        )
                    })}
                </div>
                <button 
                    type="button"
                    className="arrowButton left"
                    aria-label="Goto previous page"
                    // set for last page
                    // disabled={Math.ceil(props.currentPaginationData / 3) - 1 === props.currentPage ? true: false}
                    // style={props.currentPage === Math.ceil(props.currentPaginationData / 3) ? {visibility: "hidden"} : {visibility: "visible"}}
                    disabled={3 === props.currentPage ? true: false}
                    style={props.currentPage === 3 ? {visibility: "hidden"} : {visibility: "visible"}}
                    onClick={onNext}
                >
                    <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        fill="none" 
                        viewBox="0 0 24 24" 
                        strokeWidth="1.5" 
                        stroke="currentColor" 
                        className="w-6 h-6"
                    ><path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        d="M8.25 4.5l7.5 7.5-7.5 7.5" 
                    /></svg>
                </button>
            </div>
        </div>
    );
}

export default Pagination;