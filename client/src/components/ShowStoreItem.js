import React from 'react'
import Dpizza from "../media/Dpizza.jpg"

function ShowStoreItem() {
    return (
        <div>
            <div className="slab">
                <img style={{height:"30vh", marginTop:"1%",marginLeft:"20%",margin:"3%"}} src={Dpizza} alt="hdjh"></img>
                <a type="button" id="btn2" className="btn btn-outline-secondary" href="/seller/addItem">+ Add Item</a>
                <div style={{color:"tomato"}} className="shopName">Dominos Pizza</div>
                <div style={{color:"tan"}} className="shopCity">Tasty</div>
                <div style={{color:"tan"}} className="shopCity">Kartar Nagar</div>
            </div>
            <div style={{margin:"2vw"}} className="row s12 m12">
                {/* <h2 className="header">Horizontal Card</h2> */}
                <div style={{width:"80vw"}} className="card horizontal">
                <div className= "col card-image">
                    <img style={{width:"20vw",margin:"2vw"}} src={Dpizza} alt="abc"/>
                </div>
                <div className="col card-stacked">
                    <div style={{marginLeft:"25vw", marginTop:"-15vh"}} className="card-content">
                        <h3>Onion Pizza</h3>
                    <p>I am a very simple card. I am good at containing small bits of information.</p>
                    </div>
                </div>
                </div>
            </div>

        </div>
    )
}

export default ShowStoreItem
