import React,{useEffect,useState,useContext} from 'react'
import {UserContext} from "../App"

function SellerPage() {
    const {state,dispatch}=useContext(UserContext)
    const [data,setData]=useState([]);
    const [data1,setData1]=useState(null);
    var url = window.location.pathname;
    var filename = url.substring(url.lastIndexOf('/')+1);
    useEffect(()=>{
        fetch(`/showItem/${filename}`)
        .then(res=>res.json())
        .then(result=>{
            setData(result.item)
            console.log(result.item)
        })
    },[])
    useEffect(()=>{
        fetch(`/selle/${filename}`)
        .then(res=>res.json())
        .then(store=>{
            setData1(store.store)
            console.log(store)
        })
        // console.log(data1)
    },[])

    return (
        <div>
            {
                data1?(
                    <div style={{flex:"flexWrap"}} className="slab">
                        <img style={{height:"30vh", marginTop:"1%",marginLeft:"20%",margin:"3%"}} src={data1.image} alt="hdjh"></img>
                        <button style={{marginTop:"-75vh"}} type="button" id="btn2" className="btn btn-outline-secondary"
                            onClick={()=>{localStorage.clear()
                                dispatch({type:"CLEAR"})    
                            }}
                        >Log out</button>
                        <a type="button" id="btn2" className="btn btn-outline-info" href="/seller/addItem">+ Add Item</a>
                        <div style={{color:"tomato",marginTop:"-45vh"}} className="shopName">{data1.storeName}</div>
                        {/* <div style={{color:"tan"}} className="shopCity">Tasty</div> */}
                        <div style={{color:"tan"}} className="shopCity">{data1.address}</div>
                    </div>)
                :<h2>loading...</h2>
            }

            {
            data.map(item=>{
                return(
            <div style={{margin:"2vw"}} key={item._id} className="row s12 m12">
                <div style={{width:"80vw"}} className="card horizontal">
                <div className= "col card-image">
                <img style={{width:"20vw",height:"25vh",margin:"1vw"}} src={item.picture} alt="abc"/>
                    {/* <img style={{width:"20vw",margin:"2vw"}} src={item.picture} alt="abc"/> */}
                </div>
                <div className="col card-stacked">
                    <div style={{marginLeft:"25vw", marginTop:"-15vh"}} className="card-content">
                        <h3>{item.name}</h3>
                    <p>{item.description}</p>
                    </div>
                </div>
                </div>
            </div>
                )
                })
}

        </div>
    )
}

export default SellerPage
