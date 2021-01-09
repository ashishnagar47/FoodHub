import React,{useState,useEffect} from 'react'

function ShowStoreItem() {
    const [data,setData]=useState([]);
    const [data1,setData1]=useState(null);
    var url = window.location.pathname;
    var filename = url.substring(url.lastIndexOf('/')+1);
    useEffect(()=>{
        fetch(`/showItem/${filename}`)
        .then(res=>res.json())
        .then(result=>{
            setData(result.item)
        })
    },[])
    useEffect(()=>{
        fetch(`/selle/${filename}`)
        .then(res=>res.json())
        .then(store=>{
            setData1(store.store)
            console.log(store)
        })
        console.log(data1)
    },[])

    return (
        <div> 
            {
                data1?( 
                    <div style={{height:"40vh",marginTop:"0vh", flex:"flexWrap"}} className="slab">
                        <img style={{height:"30vh", marginTop:"0%",marginLeft:"20%",margin:"3%"}} src={data1.image} alt="hdjh"></img>
                        <div style={{color:"tomato"}} className="shopName">{data1.storeName}</div>
                        <div style={{color:"tan"}} className="shopCity">{data1.address}</div>
                    </div> 
                
                ):<h2>loading...</h2>
}  
            {
                data.map(item=>{
                    return(
                        <>
                        <div style={{margin:"2vw"}} className="row s12 m12" key={item._id}>
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
