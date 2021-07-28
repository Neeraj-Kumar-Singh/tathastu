import React from "react";
import web from "../src/images/matrix-1027571_1920.jpg";
import { NavLink } from "react-router-dom";
import Common from "./Common";


const About =() =>{
    return(
        <>
        <Common name='Grow Your Coding Skills With' imgsrc={web} visit="/Service" btname="Get Started"/>
        </>
    );
};
export default About;

