import React from 'react'

const Navbar=()=> {
    return (
        <div >
           <div className="Navbar">
               <div style={{marginTop:"10vh",marginLeft:"88vw"}} >
                   <button style={{marginTop:"5vh"}} className="btn btn-secondary" >
                       <a style={{color:"white",textDecoration:"none"}} href="/login">Login</a></button>
                   <button style={{marginTop:"5vh"}}  className="btn btn-secondary" >
                   <a style={{color:"white",textDecoration:"none"}} href="/signup">Signup</a></button>
                   <button style={{marginTop:"5vh",marginLeft:"-0.3vw"}} className="btn btn-primary" >
                   <a style={{color:"white",textDecoration:"none"}} href="/Order">Your Order</a></button>
               </div>
                <div className="name">
                    FOODHUB
                </div>

                <nav className="navbar navbar-light bg-light row">
                    <div className="dropdown">
                        <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Location
                        </button>
                        <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                            <a className="dropdown-item"  >Action</a>
                            <a className="dropdown-item"  >Another action</a>
                            <a className="dropdown-item"  >Something else here</a>
                        </div>
                    </div>
                    <input className="form-control inp1  col-6" type="search" placeholder="Search" aria-label="Search" />
                    <button className="btn btn-outline-success  " type="submit">Search</button>
                </nav>
            </div> 
        </div>
    
    )
}

export default Navbar;
