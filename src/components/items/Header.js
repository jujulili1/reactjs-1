import React from 'react'

import '../styles/Header.css'

function Header() {
    return(
        <div className="header">
        <section className="navbar">
        <h3>NGOPI DOELOE</h3>
        <ul>
            <li><a href="#">Menu</a></li>
            <li><a href="#">Photo</a></li>
            <li><a href="#">Address</a></li>
        </ul>
        </section>
    

    <section className="kedua">
        <div className="atas">
            <h1>NGOPI DOELOE</h1>

            <p>Authentic Indonesian cofee.</p>
            <p>Traditional and brewed.</p>
        </div>
    </section>
    </div>   
    )
}

export default Header