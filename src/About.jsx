import React from "react";
import web from "../src/images/matrix-1013611_1920.jpg";
import { NavLink } from "react-router-dom";
import Common from "./Common";


const About =() =>{
    return(
        <>
        <Common name='Welcome to About page' imgsrc={web} visit="/Contact" btname="Contact Now"/>
        </>
    );
};
export default About;

