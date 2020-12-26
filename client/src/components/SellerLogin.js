import React from 'react'
import {Link} from "react-router-dom"

function SellerLogin() {
    return (
        <div className="Login">
            <div className="myCard">
                <div className="card auth-card input-field">
                    {/* <h2 style={{fontsize: "2vw",fontfamily: 'Fredericka the Great',}}>FOODHUB</h2> */}
                    <input type="text" placeholder="email"  ></input>
                    <input type="password" placeholder="password" ></input>
                    <button style={{margin:"20px",color:"white"}} className="btn waves-effect waves-light #42a5f5 blue lighten-1" >
                        Login
                    </button>
                    <h6>
                        <Link to="/seller/signup">Create account</Link>
                    </h6>
                </div>
            </div>
        </div>
    )
}

export default SellerLogin
