import React,{useState,useEffect} from 'react'
import {useHistory} from 'react-router-dom'
import sellerPage from "../media/sellerPage.jpg"
import M from "materialize-css"

function AddItemPage() {
    const history=useHistory();
    const [name,setName]=useState("");
    const [category,setCategory]=useState("");
    const [price,setPrice]=useState("");
    const [image,setImage]=useState("");
    const [description,setDescription]=useState("");
    const [url,setUrl]=useState("");

    useEffect(()=>{
        if(url){
            fetch("/createItem",{
                method:"post",
                headers:{
                    "Content-Type":"application/json",
                    "Authorization":"Bearer "+localStorage.getItem("jwt")
                },
                body:JSON.stringify({
                    name,
                    category,
                    price,
                    description,
                    picture:url
                })
            }).then(res=>res.json())
            .then(data=>{
                if(data.error){
                M.toast({html:data.error,classes:"#37474f blue-grey darken-3"})
                }
                else{
                    M.toast({html:"Created Succesfully",classes:"#00e676 green accent-3"})
                    history.push('/seller.................x')
                }
            })
    }
    },[url])
    const PostData=()=>{
        const data=new FormData();
        data.append("file",image);
        data.append("upload_preset","FoodHub")
        data.append("cloud_name","ashishnagar47")
        fetch("https://api.cloudinary.com/v1_1/ashishnagar47/image/upload",{
            method:"post",
            body:data
        })
        .then(res=>res.json())
        .then(data=>setUrl(data.url))
        .catch(err=>{console.log(err)})    
    }

    return (
        <div className="merchantPage">
            <div style={{width:'48.95vw'}} className="merchantView">
                <div className="merchantTitle">
                    FOODHUB
                </div>
                <div style={{marginTop:"55vh",marginLeft:"-25vw"}} className="myCard">
                    <div style={{height:"60vh"}} className="card auth-card1 input-field">
                        {/* <h2>FOODHUB</h2> */}
                        <input 
                            type="text" 
                            placeholder="name" 
                            value={name} 
                            onChange={(e)=>setName(e.target.value)}>
                        </input>
                        <input type="text" placeholder="category" value={category} onChange={(e)=>setCategory(e.target.value)} ></input>
                        <input type="text" placeholder="price" value={price} onChange={(e)=>setPrice(e.target.value)} ></input>
                        <input type="text" placeholder="description" value={description} onChange={(e)=>setDescription(e.target.value)} ></input>
                        
                        <div className="file-field input-field">
                            <div className="btn #42a5f5 blue darken">
                                <span style={{color:"white"}}>Upload Pic</span>
                                <input type="file" onChange={(e)=>setImage(e.target.files[0])} ></input>
                            </div>
                            <div className="file-path-wrapper">
                                <input className="file-path validate" type="text"></input>
                            </div>
                        </div>
                        <button style={{margin:"20px",color:"white"}} onClick={()=>PostData()} className="btn waves-effect waves-light #42a5f5 blue lighten-1"  >
                            Save
                        </button>
                    
                    </div>
                </div>
            </div>

            <div >
                <img className="merchantPageImage" src={sellerPage} alt="Card cap"></img>
            </div>
            
        </div>
    )
}

export default AddItemPage
