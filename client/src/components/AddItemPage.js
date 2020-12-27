import React from 'react'
import sellerPage from "../media/sellerPage.jpg"

function AddItemPage() {
    return (
        <div className="merchantPage">
            <div style={{width:'48.95vw'}} className="merchantView">
                <div className="merchantTitle">
                    FOODHUB
                </div>
                <div style={{marginTop:"55vh",marginLeft:"-25vw"}} className="myCard">
                <div style={{height:"60vh"}} className="card auth-card1 input-field">
                    {/* <h2>FOODHUB</h2> */}
                    <input type="text" placeholder="name"  ></input>
                    <input type="text" placeholder="category" ></input>
                    <input type="number" placeholder="price"  ></input>
                    <input type="text" placeholder="description" ></input>
                    
                    <div className="file-field input-field">
                        <div className="btn #42a5f5 blue darken">
                            <span style={{color:"white"}}>Upload Pic</span>
                            <input type="file"  ></input>
                        </div>
                        <div className="file-path-wrapper">
                            <input className="file-path validate" type="text"></input>
                        </div>
                    </div>
                    <button style={{margin:"20px",color:"white"}} className="btn waves-effect waves-light #42a5f5 blue lighten-1"  >
                        Save
                    </button>
                   
                </div>

            </div>
                {/* <span className="authentication">
                    <a type="button" className="btn btn-outline-secondary" href="/seller/login">Login</a>
                    <a type="button" className="btn btn-outline-secondary" href="/seller/signup">Signup</a>
                </span> */}
            </div>

            <div >
                <img className="merchantPageImage" src={sellerPage} alt="Card cap"></img>
            </div>
            
        </div>
    )
}

export default AddItemPage
