import React from 'react'

const Navbar=()=> {
    return (
        <div >
           <div className="Navbar">
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
                    <button className="btn btn-outline-success  " type="submit">Search</button>
                </nav>
            </div> 
        </div>
    
    )
}

export default Navbar;
