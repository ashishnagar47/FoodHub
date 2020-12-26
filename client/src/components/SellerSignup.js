import React from 'react'
import {Link} from 'react-router-dom'

function SellerSignup() {
    return (
        <div className="Signup" style={{marginTop:"-38%"}}>
            <div className="myCard">
                <div className="card auth-card1 input-field">
                    {/* <h2>FOODHUB</h2> */}
                    <input type="text" placeholder="name" ></input>
                    <input type="text" placeholder="email" ></input>
                    <input type="password" placeholder="password" ></input>
                    <input type="text" placeholder="storename" ></input>
                    <input type="text" placeholder="cityname" ></input>
                    <input type="text" placeholder="address" ></input>
                    <div className="file-field input-field">
                        <div className="btn #42a5f5 blue darken">
                            <span style={{color:"white"}}>Upload Pic</span>
                            <input type="file"  ></input>
                        </div>
                        <div className="file-path-wrapper">
                            <input className="file-path validate" type="text"></input>
                        </div>
                    </div>
                    <button style={{margin:"20px",color:"white"}} className="btn waves-effect waves-light #42a5f5 blue lighten-1" >
                        Sign up
                    </button>
                    <h6>
                         <Link to="/seller/login">Already have an account ?</Link>
                    </h6>
                </div>

            </div>
        </div>
    )
}

export default SellerSignup
