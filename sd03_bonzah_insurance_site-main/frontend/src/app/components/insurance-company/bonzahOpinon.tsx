'use client'

import Image from "next/image";
import { useState } from "react";
import DisplayStars from "./displayStars";

export default function bonzahOpinion({companyName="Gieco"}){

    //Up here we need to get the reviews for the company in question and get the articels tied to it.
    //for now there will be dummy data added to see if the display is working, then once the backend
    //is active I will pull using a getArticle(-companyName-) and getReview(-companyName-) EZ

    const articles = [
        {
            id : 1
            ,title: "Best Car Insurance in Tennessee for August 2025"
            ,authors : ["Kenneth Gisler", "Billy Boide"]
            ,dateOfPub : "Jul 29, 2025"
            ,description: "Geico is the best car insurance company in Tennessee, according to Bonzah's editorial analysis. They have found that over 90% of customers in Tennesee have save money by switching or signing up. There is a large opertunity here to get some cash back in your hands very easily! \n \n So, you want to know what to do next well first start by signing up for car insurance..."
            ,thumbNail : "/images/tennessee.jpg"
            ,lastEdited : "May 15, 2025"
            ,categories: ["Car Insurance", "Gieco"]
        }
        ,
        {
            id : 2
            ,title: "Colorado Car Insurance? Get if form Gieco!"
            ,authors : ["Emanuel M.", "Sara Stem"]
            ,dateOfPub : "Jun 15, 2025"
            ,description: "Bonzag's analysis is that Gieco is one of the best providers in Colorado."
            ,thumbNail : "/images/colorado.jpg"
            ,lastEdited : "Oct 12, 2025"
            ,categories: ["Car Insurance", "Gieco"]
        }
        ,
        {
            id : 3
            ,title: "Florida says Gieco is the way to go!"
            ,authors : ["Eddy Gong", "Terry Tiller"]
            ,dateOfPub : "May 1, 2025"
            ,description: "A servay from Bonzah found that Floridians love Gieco! 72% say they use them for car insurance."
            ,thumbNail : "/images/florida.jpg"
            ,lastEdited : "Sept 26, 2025"
            ,categories: ["Car Insurance", "Gieco"]
        }
        ,
        {
            id : 4
            ,title: "Have you seen this man?"
            ,authors : ["Anthony Campana", "First Last"]
            ,dateOfPub : "Oct 24, 2025"
            ,description: "Geico is the best car insurance company in Tennessee, according to Jerry's editorial analysis."
            ,thumbNail : "/partners/defaultPic.jpg"
            ,lastEdited : "Oct 24, 2025"
            ,categories: ["Car Insurance", "Gieco"]
        }
    ];

    //Here are the reviews that will be pulled later once the server is working
    const reviews = [
        {
            id: 1,
            firstName : "Billy" ,
            lastName : "Bob",
            email : "billy@bob.com" , 
            opinion : "I love this here lizard man! He saved me money!",
            rating : 5
        } 
        ,
        {
            id: 2,
            firstName : "Jimmy" ,
            lastName : "John",
            email : "jimm@aol.com" , 
            opinion : "I use this provider all the time! Very helpful",
            rating : 3
        } 
        ,
        {
            id: 3,
            firstName : "Erika" ,
            lastName : "McEricson",
            email : "erikaM@gmail.com" , 
            opinion : "BOO! I no like lizard man!",
            rating: 0
        } 
        ,
        {
            id: 4,
            firstName : "Martha" ,
            lastName : "Wane",
            email : "Mwane@aol.com" , 
            opinion : "I'm going to use this for a long time! Thank you Gieco!",
            rating : 4
        } 
    ]

    const [curArticleNum, setCurArticleNum] = useState(0);
    const [curReviewNum, setCurReviewNum] = useState(0);

    const [currentArticle, setCurrentArticle] = useState(articles[0]);
    const [currentReview, setCurrentReview] = useState(reviews[0]);

    const articleGoForward = () => {

        setCurArticleNum(prevNum => {
            const newNum = prevNum === articles.length - 1 ? 0 : prevNum + 1;
            setCurrentArticle(articles[newNum]);
            return newNum;
        })

    }

    const articleGoBackward = () =>{

        setCurArticleNum(prevNum => {
            const newNum = prevNum === 0 ? articles.length - 1 : prevNum - 1;
            setCurrentArticle(articles[newNum]);
            return newNum;
        })
    }

    const reviewGoForward = () => {
        
        setCurReviewNum(prevNum => {
            const newNum = prevNum === reviews.length - 1 ? 0 : prevNum + 1;
            setCurrentReview(reviews[newNum]);
            return newNum; 
        })
    }

    const reviewGoBackward = () => {
        
        setCurReviewNum(prevNum => {
            const newNum = prevNum === 0 ? reviews.length - 1 : prevNum - 1;
            setCurrentReview(reviews[newNum]); 
            return newNum; 
        })
    }

    
    return(
        
        <div className="flex justify-center pt-10 pb-10">

            <div className="flex flex-col pl-20 pr-20">

                <div className="text-black text-5xl text-center pb-5 font-bold">
                        Bonzah's Opinion
                </div>

                {/* Pink background container*/}
                <div className="flex flex-wrap bg-[var(--color-pink)] rounded-xl">

                    <div className="flex flex-auto p-5">

                        {/* Gray backround*/}
                        <div className="flex flex-col bg-gray-300 w-100 h-160 p-5 rounded-xl border-1 shadow-xl">
                            
                            <div className="text-black text-3xl font-bold text-center pb-2">
                                    Our thoughts
                            </div>

                            <div className="flex justify-center"> 

                                {/* Article display*/}
                                <div className="bg-white w-90 h-120 rounded-xl flex flex-col overflow-hidden">
    
                                        {/*The is the article tumbnail */}
                                        <div className="relative w-full h-40 overflow-hidden">
                                            <Image
                                                src={currentArticle.thumbNail}
                                                alt={currentArticle.title}
                                                
                                                fill
                                                className="object-cover"
                                            />
                                        </div>

                                        <div className="text-black font-bold text-xl text-center pt-2">
                                            {currentArticle.title}
                                        </div>

                                        {/* Authors go here plus pub date */}
                                        <div className="flex grid grid-cols-2">

                                            {/* Authors go here stacked on top of each other */}
                                            <div className="flex flex-col">
                                                {[... currentArticle.authors ].map((author,i) => (
                                                    <div key={author} className="text-[var(--color-dark-grey)] text-left text-xs pl-4"> 
                                                        {author}
                                                    </div>
                                                ))}
                                            </div>
                                            
                                            {/*This is the date of publication and edit stacked */}
                                            <div className="flex flex-col ">
                                            
                                                <div className="text-[var(--color-dark-grey)] text-right text-xs pr-4">
                                                    published: {currentArticle.dateOfPub}
                                                </div>
                                            
                                                <div className="text-[var(--color-dark-grey)] text-right text-xs pr-4">
                                                    Last Edit: {currentArticle.lastEdited}
                                                </div>

                                            </div>

                                        </div>

                                        {/*the description slash intro section of the article */}
                                        <div className="text-[var-(--color-black)] text-lg p-2 break-normal whitespace-pre-line overflow-hidden" >
                                            {currentArticle.description}
                                        </div>

                                </div>

                            </div>

                            <div className="flex grid grid-cols-2 p-4">
                                
                                {/*The go backward button */}
                                <button className="justify-self-start p-2 " onClick={articleGoBackward}>

                                    <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m15 19-7-7 7-7"/>
                                    </svg>

                                </button>

                                {/*The go forward button */}
                                <button className="justify-self-end p-2 " onClick={articleGoForward}>

                                    <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m9 5 7 7-7 7"/>
                                    </svg>

                                </button>

                            </div>

                        </div>

                    </div>

                    <div className="flex flex-auto p-5">
                        {/* Gray backround*/}
                        <div className="flex flex-col bg-gray-300 w-100 h-160 p-5 rounded-xl border-1 shadow-xl">

                            <div className="text-black text-3xl font-bold text-center pb-2">
                                    Our Member's thoughts
                            </div>
                            
                            {/* Reviews display */}
                            <div className="bg-white w-90 h-120 rounded-xl overflow-hidden flex flex-col">

                                <div className="flex justify-center">
                                    
                                    {/*These are the reivews, and you will only see the last one so that is the one that gets filled out */}
                                    <div className="w-max h-100 perspective-normal">
                                                <div className="bg-white border-2 shadow-xl h-35 w-70 rounded-xl translate-y-40 -rotate-z-5"> </div>
                                                <div className="bg-white border-2 shadow-xl h-35 w-70 rounded-xl translate-y-5 rotate-z-10"> </div>
                                                <div className="bg-white border-2 shadow-xl h-35 w-70 rounded-xl -translate-y-30"> 
                                                    <div className="flex flex-col p-2">

                                                        <div className="font-bold text-lg">
                                                                {currentReview.firstName} {currentReview.lastName}
                                                        </div>

                                                        <div className="text-[var-(--color-light-grey)] text-xs">
                                                                {currentReview.email}
                                                        </div>

                                                        <div className="text-black text-md">
                                                                {currentReview.opinion}
                                                        </div>

                                                        <div className="flex felx-row">

                                                            <div className="text-lg font-bold">
                                                                Their rating:
                                                            </div>

                                                            {/*this function, component, is used to display the stars. It can adjust the size of them as well*/} 
                                                            <div>
                                                                <DisplayStars reviews={[currentReview]} maxStars={5} width={24} height={24}/>
                                                            </div>

                                                        </div>



                                                    </div>
                                                </div>
                                    </div>

                                </div>

                                <div className="flex flex-row">

                                    <div className="flex justify-center">
                                        <div className="flex text-black font-bold text-2xl text-center"> Bonza Score: </div>
                                    </div>

                                    {/*This is used to display the average*/}
                                    <div>
                                        <DisplayStars reviews={reviews} maxStars={5} width={30} height={30}/>
                                    </div>
                                </div>

                            </div>

                            <div className="flex grid grid-cols-2 p-4">
                                
                                {/*The go backward button */}
                                <button className="justify-self-start p-2" onClick={reviewGoBackward}>

                                    <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m15 19-7-7 7-7"/>
                                    </svg>

                                </button>

                                {/*The go forward button */}
                                <button className="justify-self-end p-2" onClick={reviewGoForward}>

                                    <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m9 5 7 7-7 7"/>
                                    </svg>

                                </button>

                            </div>

                        </div>
                    </div>

                </div>

            </div>

        </div>
    );
}