"use client";

import React from "react";


//this could change to just getting the average from the server. IDk we'll see
export default function displayStars({ reviews = [ {id: 1,firstName : "dummy ", lastName : "one", email : "dummy1email", opinion : "nan", rating : 5} , {id: 1, firstName : "dummy ", lastName : "one", email : "dummy1email", opinion : "nan",rating : 5}], maxStars = 5, width = 24, height = 24}){

    //make sure the review exists in some faction
    if(!reviews || reviews.length == 0){
        return( <p> No review's given to make average. </p>)
    }

    var average = 0;

    //tally up all the review ratings
    for(var i = 0; i < reviews.length; i++){
        average = average + reviews[i].rating;
    }

    average = average / reviews.length;

    const filledStars = Math.round(average);
    const emptyStars = maxStars - filledStars;

    const stars = Array.from({ length: filledStars }, (_, i) => i);
    const empties = Array.from({ length: emptyStars }, (_, i) => i);

    var wh = "text-[var(--color-pink)] w-" + {width} +" h-" + {height} + " pt-1 ";
    var wh2 = "text-[var(--color-light-grey)] w-" + {width} +" h-" + {height} + " pt-1 ";
    
    return(
        <div className="flex flex-row">
            {[...stars].map((_,i) => (

                <svg key={i} className={wh} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width={width} height={height} fill="currentColor" viewBox="0 0 24 24">
                    <path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z"/>
                </svg>

            ))}

            {[...empties].map((_,i) => (

                <svg key={i} className={wh2} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width={width} height={height} fill="currentColor" viewBox="0 0 24 24">
                    <path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z"/>
                </svg>

            ))}
        </div>
    );

}