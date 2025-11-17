'use client'
/// <reference types="react" />

import React from 'react';
import Header from "../globals/header";
import Footer from "../globals/footer";
import Title from "./title";
import AboutUs from "./aboutUs";
import BonzahOpinion from "./bonzahOpinon";
import GetInsurance from "./getInsurance";

{/*This is a temp set up. we need to add it so it takes in an "insurance Copmant" object. 
    The idea being that all you need is a Company Name, Image. Maybe we send through the about
    as well, IDK */ }
export default function Page({company = "Gieco", logo = "/partners/geico.jpg"}) {

    var tmp = "Here at Gieco we belive in trust and honor. As Americas #1 insruance company we value everything that you do, and understand that life can be hard. We offer the best deals in the market. No better insurance company can be found. The rest of this is going to be filler to see how formatting works. It will also check spacing and paragraphs. \n This is the start of a new line and I just want to see what it looks like. \n \n If we add multiple do we get something nice? It will all depend on what the editor does when it read this string that is SO long. like darn, it just keeps going. I would advice not going forward anymore in reading this cause it's just gunna get more and mroe unhinged. Like there is going to be some stuff in here you should just not read. Anyhoo, I think that maybe, JUST maybe, we should nuck the wales. It could ne fun. Like, we just launch it into the ocean and have a great time with it! Think about it,  not only do you get whale meat but you also get a TON of sushi, aka tuna, AND there is a chance that you get godzilla! \n \n The end! :3 ";
    var tmp2 = ["Car","Home","Life"] //these are temps, we will retrive these later once the backend is set up.
    return(
        <div className="backgroundLighter">
            <Header />
            <section id="title"> <Title companyName={company} logo={logo}/> </section>
            <section id="aboutUs"> <AboutUs aboutUs={tmp} /> </section>
            <section id="bonzahOpinion"> <BonzahOpinion companyName={company} /> </section>
            <section id="getInsurance"> <GetInsurance insurances={tmp2} companyName={company}/></section>
            <Footer />
        </div>
    )
    
};