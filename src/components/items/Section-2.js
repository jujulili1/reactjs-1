import React from 'react'

import '../styles/Section-2.css'

let link1 = "https://res.cloudinary.com/swiggy/image/upload/f_auto,q_auto,fl_lossy/xudmxcvsrcmkhp0clequ";
let link2 = "https://res.cloudinary.com/swiggy/image/upload/f_auto,q_auto,fl_lossy/xudmxcvsrcmkhp0clequ";
let link3 = "https://res.cloudinary.com/swiggy/image/upload/f_auto,q_auto,fl_lossy/xudmxcvsrcmkhp0clequ"


function Section2 () {
    return(
        <div className="section2">
        <section className="main-title ">
        <h1>OUR SHOP</h1>
    </section>
    <section className="photos">

        <div className="list-photos ">
            <img src={link1} alt="cofee " />

        </div>
        <div className="list-photos ">
            <img src={link2} alt="cofee " />

        </div>
        <div className="list-photos ">
            <img src={link3} alt="cofee " />

        </div>
    </section>
    </div>
    )
}

export default Section2