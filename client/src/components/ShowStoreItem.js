import React,{useState,useEffect} from 'react'
import Dpizza from "../media/Dpizza.jpg"

function ShowStoreItem() {
    const [data,setData]=useState([]);
    const [data1,setData1]=useState([0]);
    var url = window.location.pathname;
    var filename = url.substring(url.lastIndexOf('/')+1);
    useEffect(()=>{
        fetch(`/showItem/${filename}`)
        .then(res=>res.json())
        .then(result=>{
            // console.log(result.item[0])
            setData(result.item)
            setData1(result.item)
            console.log(data1)
        })
    },[])

    return (
        <div> 
            <div style={{height:"20vh"}} className="slab">
            <div style={{color:"tomato" , marginTop:"0vh",fontSize:"12vh"}} className="shopName">{filename}</div>  
            </div> 
             
                {
                data.map(item=>{
                    return(
                        <>
                        <div style={{margin:"2vw"}} className="row s12 m12">
                            <div style={{width:"80vw",height:"30vh"}} className="card horizontal">
                            <div className= "col card-image">
                                <img style={{width:"20vw",height:"25vh",margin:"1vw"}} src={item.picture} alt="abc"/>
                            </div>
                            <div className="col card-stacked">
                                <div style={{marginLeft:"25vw", marginTop:"-15vh"}} className="card-content">
                                    <h3 style={{marginLeft:"10vw",marginBottom:"2vw"}}>{item.name}</h3>
                                <h5>₹{item.price}</h5>
                                <p>{item.description}</p>
                                </div>
                            </div>
                            </div>
                        </div>
                        </>
                    )
                })
        }
        </div>
    )
}

export default ShowStoreItem
