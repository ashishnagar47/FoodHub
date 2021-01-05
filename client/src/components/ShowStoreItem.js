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
            <div className="slab">
            <div style={{color:"tomato"}} className="shopName">`${filename}</div>  
            </div> 
             {/* {
               data1.map(postedBy=>{
                   
                //    console.log(data1)
                   return(
                       <>
                        <div className="slab">
                        {/* <img style={{height:"30vh", marginTop:"1%",marginLeft:"20%",margin:"3%"}} src={item.postedBy.image} alt="hdjh"></img> */}
                        {/* <a type="button" id="btn2" className="btn btn-outline-secondary" href="/seller/addItem">+ Add Item</a> */}
                        {/* <div style={{color:"tomato"}} className="shopName">{postedBy.storeName}</div> */}
                        {/* <div style={{color:"tan"}} className="shopCity">Tasty</div> */}
                        {/* <div style={{color:"tan"}} className="shopCity">{postedBy.cityName}</div> */}
                        {/* </div> */}
                        {/* </> */}
                        {/* ) */}
                   
                    {/* }) */}
                {/* } */} 
                {
                data.map(item=>{
                    return(
                        <>
                        {/* <div className="slab">
                            <img style={{height:"30vh", marginTop:"1%",marginLeft:"20%",margin:"3%"}} src={Dpizza} alt="hdjh"></img>
                            {/* <a type="button" id="btn2" className="btn btn-outline-secondary" href="/seller/addItem">+ Add Item</a> */}
                            {/* <div style={{color:"tomato"}} className="shopName">{item.postedBy.storeName}</div> */}
                            {/* <div style={{color:"tan"}} className="shopCity">Tasty</div> */}
                            {/* <div style={{color:"tan"}} className="shopCity">{item.postedBy.cityName}</div> */}
                        {/* </div> */} 
                        <div style={{margin:"2vw"}} className="row s12 m12">
                            {/* <h2 className="header">Horizontal Card</h2> */}
                            <div style={{width:"80vw",height:"30vh"}} className="card horizontal">
                            <div className= "col card-image">
                                <img style={{width:"20vw",margin:"2vw"}} src={item.picture} alt="abc"/>
                            </div>
                            <div className="col card-stacked">
                                <div style={{marginLeft:"25vw", marginTop:"-15vh"}} className="card-content">
                                    <h3 style={{marginLeft:"20vw"}}>{item.name}</h3>
                                    {/* <h6>{item.category}</h6> */}
                                <h6>₹{item.price}</h6>
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
