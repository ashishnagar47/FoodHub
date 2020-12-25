import React from 'react'
import dominos from "../media/Dominos.webp"
import BurgerKing from "../media/burgerKing.jpeg"
import behrouz from "../media/behrouz.jpg"

export const Intro = () => {
return (
<div  >
    <div className="Intro">
    <div className="name">
    FOODHUB
    </div>
    <nav className="navbar navbar-light bg-light row">
        <div className="dropdown">
            <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Location
            </button>
            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <a className="dropdown-item" href='#' >Action</a>
                <a className="dropdown-item" href="#" >Another action</a>
                <a className="dropdown-item" href="#" >Something else here</a>
            </div>
        </div>
        <input className="form-control inp1  col-6" type="search" placeholder="Search" aria-label="Search" />
        <button className="btn btn-outline-success  col-4" type="submit">Search</button>
    </nav>
    </div>
    <div className="text1">
            Popular Items
        </div>
    <div className="Popular">
        
        
        <div className="card ">
            <img className="card-img-top" src={dominos} alt="Card image cap" />
            <div className="card-body">
                <h4 className="card-title ">Dominos Pizza</h4>
            </div>
        </div>
        <div className="card ">
            <img className="card-img-top" src={BurgerKing} alt="Card image cap" />
            <div className="card-body">
                <h4 className="card-title ">Burger King</h4>
            </div>
        </div>
        <div className="card ">
            <img className="card-img-top" src={behrouz} alt="Card image cap" />
            <div className="card-body">
                <h4 className="card-title ">Behrouz Biryani</h4>
            </div>
        </div>
    </div>
</div>
)
}
