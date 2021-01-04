import React from 'react'
import sellerPage from "../media/sellerPage.jpg"

function HomePageSeller() {
    return (
        <div className="merchantPage">
            <div className="merchantView">
                <div className="merchantTitle">
                    FOODHUB
                </div>
                <span className="authentication">
                    <a type="button" className="btn btn-outline-secondary" href="/sell/login">Login</a>
                    <a type="button" className="btn btn-outline-secondary" href="/sell/signup">Signup</a>
                </span>
            </div>

            <div >
                <img className="merchantPageImage" src={sellerPage} alt="Card cap"></img>
            </div>
            
        </div>
    )
}

export default HomePageSeller
