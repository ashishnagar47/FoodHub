import React from 'react'
import dominos from "../media/Dominos.webp"
import BurgerKing from "../media/burgerKing.jpeg"
import behrouz from "../media/behrouz.jpg"
import ahmedabad from "../media/ahmedabad.png"
import bangalore from "../media/bangalore.jpg"
import chennai from "../media/chennai.jpg"
import delhi from "../media/delhi.jpg"
import hyderabad from "../media/hyderabad.jpg"
import mumbai from "../media/mumbai.jpg"
import kolkata from "../media/Kolkata.jpg"
import pune from "../media/pune.webp"
import gurgaon from "../media/gurgaon.jpg"
import KFC from "../media/KFC.png"
import subway from "../media/subway.webp"
import wow_Momo from "../media/wow-Momo.jpg"


export const Intro = () => {
return (
<div  >
    <div className="text1">
        Popular Items
    </div>

    <div className="Popular">
        <div className="card ">
            <img className="card-img-top" src={dominos} alt="Card cap" />
            <div className="card-body">
                <h4 className="card-title ">Dominos Pizza</h4>
            </div>
        </div>
        <div className="card ">
            <img className="card-img-top" src={BurgerKing} alt="Card cap" />
            <div className="card-body">
                <h4 className="card-title ">Burger King</h4>
            </div>
        </div>
        <div className="card ">
            <img className="card-img-top" src={behrouz} alt="Card cap" />
            <div className="card-body">
                <h4 className="card-title ">Behrouz Biryani</h4>
            </div>
        </div>
        <div className="card ">
            <img className="card-img-top" src={KFC} alt="Card cap" />
            <div className="card-body">
                <h4 className="card-title ">KFC</h4>
            </div>
        </div>
        <div className="card ">
            <img className="card-img-top" src={wow_Momo} alt="Card cap" />
            <div className="card-body">
                <h4 className="card-title ">Wow Momo</h4>
            </div>
        </div>
        <div className="card ">
            <img className="card-img-top" src={subway} alt="Card cap" />
            <div className="card-body">
                <h4 className="card-title ">Subway</h4>
            </div>
        </div>

    </div>

    <div>
        <div className="text1">
            Popular Cities
        </div>

        <div className="Popular">
            <div className="card ">
                <img className="card-img-top" src={ahmedabad} alt="Card cap" />
                <div className="card-body">
                    <h4 className="card-title ">Ahmedabad</h4>
                </div>
            </div>
            <div className="card ">
                <img className="card-img-top" src={bangalore} alt="Card cap" />
                <div className="card-body">
                    <h4 className="card-title ">Bangalore</h4>
                </div>
            </div>
            <div className="card ">
                <img className="card-img-top" src={chennai} alt="Card cap" />
                <div className="card-body">
                    <h4 className="card-title ">Chennai</h4>
                </div>
            </div>
            <div className="card ">
                <img className="card-img-top" src={delhi} alt="Card cap" />
                <div className="card-body">
                    <h4 className="card-title ">Delhi</h4>
                </div>
            </div>
            <div className="card ">
                <img className="card-img-top" src={gurgaon} alt="Card cap" />
                <div className="card-body">
                    <h4 className="card-title ">Gurgaon</h4>
                </div>
            </div>
            <div className="card ">
                <img className="card-img-top" src={hyderabad} alt="Card cap" />
                <div className="card-body">
                    <h4 className="card-title ">Hyderabad</h4>
                </div>
            </div>
            <div className="card ">
                <img className="card-img-top" src={mumbai} alt="Card cap" />
                <div className="card-body">
                    <h4 className="card-title ">Mumbai</h4>
                </div>
            </div>
            <div className="card ">
                <img className="card-img-top" src={kolkata} alt="Card cap" />
                <div className="card-body">
                    <h4 className="card-title ">Kolkata</h4>
                </div>
            </div>
            <div className="card ">
                <img className="card-img-top" src={pune} alt="Card cap" />
                <div className="card-body">
                    <h4 className="card-title ">Pune</h4>
                </div>
            </div>
        </div>

    </div>

    <div>
        For Merchants 
        <a href="/sell/login">click here</a>
    </div>

</div>
)
}
