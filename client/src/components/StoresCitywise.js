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
    // console.log(filename)
    useEffect(()=>{
        fetch(`/seller/${filename}`)
        .then(res=>res.json())
        .then(result=>{
            // console.log(result)
            setData(result.store)
        })
    },[])
  
    return (
        <div style={{height:"20vh"}} className="slab">
            <div style={{color:"tomato",marginTop:"0vh", marginLeft:"32vw" }} className="shopName">
                 Best Of {filename}
            </div>
            <div  className="Popular">
            {
                data.map(store=>{
                    return(
                        <div style={{height:"40vh"}} className="card ">
                            <a style={{textDecoration:"none"}} href={'/showItem/'+store.storeName}>
                            <img className="card-img-top" src={store.image} alt="Card cap" />
                            <div className="card-body">
                                <h4 style={{fontWeight:"bold"}} className="card-title ">{store.storeName}</h4>
                                <div style={{fontSize:"20px"}} className="card-title ">{store.address}</div>
                                {/* <div>{store.address}</div> */}
                            </div>
                            </a>
                        </div>
                        
                  //   <div class="row">
                  //   <div class="col s12 m7">
                  //     <div class="card">
                  //       <div class="card-image">
                  //         <img src={store.image} />
                  //         <span class="card-title">{store.storeName}</span>
                  //       </div>
                        
                  //       <div class="card-action">
                  //         {store.address}
                  //         {/* <a href="#">This is a link</a> */}
                  //       </div>
                  //     </div>
                  //   </div>
                  // </div>
                            
                    )
                    
                })
            }
            </div>
            
            {/* {filename} */}
            {/* <Image></Image> */}
            {/* <img className="card-img-top" src={"filename"} alt="Card cap" /> */}
        </div>
    )
}

export default StoresCitywise
