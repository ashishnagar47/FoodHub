import React,{useState,useEffect} from 'react'

function StoresCitywise() {
    const [data,setData]=useState([])
    var url = window.location.pathname;
    var filename = url.substring(url.lastIndexOf('/')+1);
    useEffect(()=>{
        fetch(`/seller/${filename}`)
        .then(res=>res.json())
        .then(result=>{
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
                        <div style={{height:"40vh"}} key={store._id} className="card ">
                            <a style={{textDecoration:"none"}} href={'/showItem/'+store.storeName}>
                            <img className="card-img-top" src={store.image} alt="Card cap" />
                            <div className="card-body">
                                <h4 style={{fontWeight:"bold"}} className="card-title ">{store.storeName}</h4>
                                <div style={{fontSize:"20px"}} className="card-title ">{store.address}</div>
                                {/* <div>{store.address}</div> */}
                            </div>
                            </a>
                        </div>
                        
                            
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
