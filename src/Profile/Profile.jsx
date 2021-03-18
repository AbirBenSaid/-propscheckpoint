import React from 'react'
import PropTypes from "prop-types";

export default function Profile( {FullName, Profession, Bio , handleName})
{
    return (
<div> 
<h1 style={{color:"#5D9FA4"} }>  My full Name is: {FullName} </h1>
<h3 style={{color:"olive"} }>   My Profession is: {Profession}  </h3>
<h3 style={{color:"darkblue"} }> A litlle about me: {Bio} </h3>

<button onClick={handleName} style={{marginTop:"30px",backgroundColor:"lightblue",fontSize:"large",fontWeight:"bold" , margin: "10px"}}> Check the user's Name</button>
</div>
        
    )
}



Profile.propType={
    FullName: PropTypes.string,
    Bio: PropTypes.string,
    Profession: PropTypes.string,
    handleName: PropTypes.func,
}


Profile.defaultProps ={
    FullName: "Avenger",
    Profession: "Superhero",
    Bio: " As an Avenger, my duty is to save people using my superpowers! ",
    handleName: function handleName () {
        alert ("The user name is : Avenger")
    }
    };

