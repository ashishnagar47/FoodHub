import React from 'react'
import Ahmedabad from "../media/ahmedabad.png"
import Bangalore from "../media/bangalore.jpg"
import Chennai from "../media/chennai.jpg"
import Delhi from "../media/delhi.jpg"
import Hyderabad from "../media/hyderabad.jpg"
import Mumbai from "../media/mumbai.jpg"
import Kolkata from "../media/Kolkata.jpg"
import Pune from "../media/pune.webp"
import Gurgaon from "../media/gurgaon.jpg"

function StoresCitywise() {
    var url = window.location.pathname;
    var filename = url.substring(url.lastIndexOf('/')+1);
    console.log(filename)
    // alert(filename);
    // const Image=()=>{
    //     if(filename=="Ahmedabad")
    //     return (
    //         <div>
    //             <img style={{width:"70vw",height:"50vh",marginLeft:"15vw",marginTop:"1vw",backgroundSize:"contain"}} className="card" src={Ahmedabad} alt="Card cap" />
    //             <h1 style={{marginTop:"-10vh",marginLeft:"28vw"}} className="name">{filename}</h1>
    //          </div>
    //     )
    // }
    return (
        <div style={{height:"20vh"}} className="slab">
            <div style={{color:"tomato",marginTop:"0vh", marginLeft:"32vw" }} className="shopName">
                Best Of {filename}
            </div>
            <div style={{margin:"2vh"}} className="row s12 m12">
                {/* <h2 className="header">Horizontal Card</h2> */}
                <div style={{width:"80vw"}} className="card horizontal">
                <div className= "col card-image">
                    <img style={{width:"20vw",margin:"2vw"}} src={Ahmedabad} alt="abc"/>
                </div>
                <div className="col card-stacked">
                    <div style={{marginLeft:"25vw", marginTop:"-15vh"}} className="card-content">
                        <h3>Onion Pizza</h3>
                    <p>I am a very simple card. I am good at containing small bits of information.</p>
                    </div>
                </div>
                </div>
            </div>
            {/* {filename} */}
            {/* <Image></Image> */}
            {/* <img className="card-img-top" src={"filename"} alt="Card cap" /> */}
        </div>
    )
}

export default StoresCitywise
