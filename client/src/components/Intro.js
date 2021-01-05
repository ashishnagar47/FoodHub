import React,{useContext} from 'react'
import {UserContext} from '../App'
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
import {Link} from "react-router-dom"


export const Intro = () => {
    const {state,dispatch}=useContext(UserContext)
    console.log({state})
     
return (
<div  >
    <div className="text1">
        Popular Items
    </div>

    <div className="Popular">
        <div className="card "> 
        <a style={{textDecoration:"none"}} href="showItem/Dominos"> 
            <img className="card-img-top" src={dominos} alt="Card cap" />
            <div className="card-body">
                <h4 className="card-title ">Dominos Pizza</h4>
            </div>
            </a>
        </div>
        <div className="card "> 
        <a style={{textDecoration:"none"}} href="showItem/BurgerKing">
            <img className="card-img-top" src={BurgerKing} alt="Card cap" />
            <div className="card-body">
                <h4 className="card-title ">Burger King</h4>
            </div>
            </a>
        </div>
        <div className="card "> 
        <a style={{textDecoration:"none"}} href="showItem/Behrouz">
            <img className="card-img-top" src={behrouz} alt="Card cap" />
            <div className="card-body">
                <h4 className="card-title ">Behrouz Biryani</h4>
            </div>
            </a>
        </div>
        <div className="card "> 
        <a style={{textDecoration:"none"}} href="showItem/KFC">
            <img className="card-img-top" src={KFC} alt="Card cap" />
            <div className="card-body">
                <h4 className="card-title ">KFC</h4>
            </div>
            </a>
        </div>
        <div className="card "> 
        <a style={{textDecoration:"none"}} href="showItem/WOW_MOMO">
            <img className="card-img-top" src={wow_Momo} alt="Card cap" />
            <div className="card-body">
                <h4 className="card-title ">Wow Momo</h4>
            </div>
            </a>
        </div>
        <div className="card "> 
        <a style={{textDecoration:"none"}} href="showItem/Subway">
            <img className="card-img-top" src={subway} alt="Card cap" />
            <div className="card-body">
                <h4 className="card-title ">Subway</h4>
            </div>
            </a>
        </div>

    </div>

    <div>
        <div className="text1">
            Popular Cities
        </div>

        <div className="Popular">
            <div className="card ">
                <a style={{textDecoration:"none"}} href="seller/Ahmedabad">
                <img className="card-img-top" src={ahmedabad} alt="Card cap" />
                <div className="card-body">
                    <h4 className="card-title ">Ahmedabad</h4>
                </div>
                </a>
            </div>
            <div className="card ">
                <a style={{textDecoration:"none"}} href="seller/Bangalore">
                <img className="card-img-top" src={bangalore} alt="Card cap" />
                <div className="card-body">
                    <h4 className="card-title ">Bangalore</h4>
                </div>
                </a>
            </div>
            <div className="card ">
                <a style={{textDecoration:"none"}} href="seller/Chennai">
                <img className="card-img-top" src={chennai} alt="Card cap" />
                <div className="card-body">
                    <h4 className="card-title ">Chennai</h4>
                </div>
                </a>
            </div>
            <div className="card ">
                <a style={{textDecoration:"none"}} href="seller/Delhi">
                <img className="card-img-top" src={delhi} alt="Card cap" />
                <div className="card-body">
                    <h4 className="card-title ">Delhi</h4>
                </div>
                </a>
            </div>
            <div className="card ">
                <a style={{textDecoration:"none"}} href="seller/Gurgaon">
                <img className="card-img-top" src={gurgaon} alt="Card cap" />
                <div className="card-body">
                    <h4 className="card-title ">Gurgaon</h4>
                </div>
                </a>
            </div>
            <div className="card ">
                <a style={{textDecoration:"none"}} href="seller/Hyderabad">
                <img className="card-img-top" src={hyderabad} alt="Card cap" />
                <div className="card-body">
                    <h4 className="card-title ">Hyderabad</h4>
                </div>
                </a>
            </div>
            <div className="card ">
                <a style={{textDecoration:"none"}} href="seller/Mumbai">
                <img className="card-img-top" src={mumbai} alt="Card cap" />
                <div className="card-body">
                    <h4 className="card-title ">Mumbai</h4>
                </div>
                </a>
            </div>
            <div className="card ">
                <a style={{textDecoration:"none"}} href="seller/Kolkata">
                <img className="card-img-top" src={kolkata} alt="Card cap" />
                <div className="card-body">
                    <h4 className="card-title ">Kolkata</h4>
                </div>
                </a>
            </div>
            <div className="card ">
                <a style={{textDecoration:"none"}} href="seller/Ahmedabad">
                <img className="card-img-top" src={pune} alt="Card cap" />
                <div className="card-body">
                    <h4 className="card-title ">Pune</h4>
                </div>
                </a>
            </div>
        
        </div>

    </div>

    <div>
        For Merchants
         
        <Link to={state?"/seller.................x":"/sell/login"}>click here</Link>
        {/* <a style={{textDecoration:"none"}} href="/sell/login">click here</a> */}
    </div>

</div>
)
}
