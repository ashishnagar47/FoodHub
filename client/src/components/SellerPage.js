import React,{useEffect,useState,useContext} from 'react'
import {useHistory} from 'react-router-dom'
import {UserContext} from "../App"

function SellerPage() {
    const history=useHistory()
    const {state,dispatch}=useContext(UserContext)
    const [data,setData]=useState([]);

    
    useEffect(()=>{
        fetch('/myItem',{
            headers:{
                Authorization:"Bearer "+localStorage.getItem("jwt")
            }
        }).then(res=>res.json())
        .then(myStore=>{
            setData(myStore.myItem)
            // console.log(myStore)
        })
        
    },[])

    const Logout=()=>{
        localStorage.clear()
        dispatch({type:"CLEAR"})
        history.push('/')
    }
    if(state){
    return (
        <div>
            {
                state?(
                    <div style={{flex:"flexWrap"}} className="slab">
                        <img style={{height:"30vh", marginTop:"1%",marginLeft:"20%",margin:"3%"}} src={state.image} alt="hdjh"></img>
                        <button style={{marginTop:"-75vh"}} type="button" id="btn2" className="btn btn-outline-secondary"
                            onClick={()=>Logout()}
                        >Log out</button>
                        <a type="button" id="btn2" className="btn btn-outline-info" href="/seller/addItem">+ Add Item</a>
                        <div style={{color:"tomato",marginTop:"-45vh"}} className="shopName">{state.storeName}</div>
                        {/* <div style={{color:"tan"}} className="shopCity">Tasty</div> */}
                        <div style={{color:"tan"}} className="shopCity">{state.address}</div>
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

if(!state){
    return(
        <div>
        <h1>Hello</h1>
        </div>
    )
}
}


export default SellerPage