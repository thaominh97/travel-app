import React from 'react'
import './newnav.css'

function newNav() {
    const myFunction =()=> {
        var x = document.getElementById("myTopnav");
        if (x.className === "topnav") {
          x.className += " responsive";
        } else {
          x.className = "topnav";
        }
      }
    return (
        <div className="topnav" id="myTopnav">
            <a href="#home" class="active">Home</a>
            <a href="#news">News</a>
            <a href="#contact">Contact</a>
            <a href="#about">About</a>
            <a href="javascript:void(0);" className="icon" onClick={myFunction()}>
                <i class="fa fa-bars"></i>
            </a>
        </div>
    )
}

export default newNav
