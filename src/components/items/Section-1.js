import React from 'react'

import '../styles/Section-1.css'

let link4="https://res.cloudinary.com/swiggy/image/upload/f_auto,q_auto,fl_lossy/xudmxcvsrcmkhp0clequ";
let link5="https://ik.imagekit.io/tvlk/cul-asset/guys1L+Yyer9kzI3sp-pb0CG1j2bhflZGFUZOoIf1YOBAm37kEUOKR41ieUZm7ZJ/tvlk-prod-cul-assets/culinary/asset/REST_603-720x720-FIT_AND_TRIM-ec5cb9dc57caceab0f2e0cb79c74b2e1.jpeg?tr=q-40,c-at_max,w-1080,h-1920&_src=imagekit";
let link6="https://dynaimage.cdn.cnn.com/cnn/q_auto,w_412,c_fill,g_auto,h_232,ar_16:9/http%3A%2F%2Fcdn.cnn.com%2Fcnnnext%2Fdam%2Fassets%2F160222142959-indonesian-food-indomie-9444-1900px.jpg"

function Section1() {
    return(
        <div className="section1">
        <section className="main-title ">
        <h1>WHAT WE OFFER</h1>
    </section>
    <section clasName="photos">
        <div className="list-photos ">
            <img src={link4} alt="cofee " />
            <p>COFFEE</p>
        </div>
        <div className="list-photos ">
            <img src={link5}
                alt="cake " />
            <p>CAKE & PASTRY</p>
        </div>
        <div className="list-photos ">
            <img src={link6} alt="dishes " />
            <p>INDONESIAN DISHES</p>
        </div>
    </section>
    </div>
    )
}

export default Section1