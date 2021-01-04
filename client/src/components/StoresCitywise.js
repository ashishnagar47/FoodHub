import React,{useState,useEffect} from 'react'
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
    const [data,setData]=useState([])
    var url = window.location.pathname;
    var filename = url.substring(url.lastIndexOf('/')+1);
    console.log(filename)
    useEffect(()=>{
        fetch(`/seller/${filename}`)
        .then(res=>res.json())
        .then(result=>{
            console.log(result)
            setData(result.store)
        })
    },[])
  
    return (
        <div style={{height:"20vh"}} className="slab">
            <div style={{color:"tomato",marginTop:"0vh", marginLeft:"32vw" }} className="shopName">
                 Best Of {filename}
            </div>
            {
                data.map(store=>{
                    return(
                    //     <div style={{margin:"2vh"}} className="row s12 m12">
                    //     {/* <h2 className="header">Horizontal Card</h2> */}
                    //     <div style={{width:"80vw"}} className="card horizontal">
                    //     <div className= "col card-image">
                    //         <img style={{width:"20vw",margin:"2vw"}} src={Ahmedabad} alt="abc"/>
                    //     </div>
                    //     <div className="col card-stacked">
                    //         <div style={{marginLeft:"25vw", marginTop:"-15vh"}} className="card-content">
                    //             <h3>{store.storeName}</h3>
                    //             <h4>{store.cityName}</h4>
                    //             <h4>{store.address}</h4>
                    //         <p>I am a very simple card. I am good at containing small bits of information.</p>
                    //         </div>
                    //     </div>
                    //     </div>
                    // </div>
                    <div class="row">
                    <div class="col s12 m7">
                      <div class="card">
                        <div class="card-image">
                          <img src={store.image} />
                          <span class="card-title">{store.storeName}</span>
                        </div>
                        
                        <div class="card-action">
                          {store.address}
                          {/* <a href="#">This is a link</a> */}
                        </div>
                      </div>
                    </div>
                  </div>
                            
                    )
                })
            }
            
            {/* {filename} */}
            {/* <Image></Image> */}
            {/* <img className="card-img-top" src={"filename"} alt="Card cap" /> */}
        </div>
    )
}

export default StoresCitywise
