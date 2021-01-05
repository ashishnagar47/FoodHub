import React,{useState,useEffect,useContext} from 'react'
import {Link,useHistory} from 'react-router-dom'
import M from 'materialize-css'

function SellerSignup() {
    const history=useHistory();
    const [name,setName]=useState("");
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const [storeName,setRName]=useState("");
    const [cityName,setCityName]=useState("");
    const [address,setAddress]=useState("");
    const [image,setImage]=useState("");
    const [url,setUrl]=useState("");
    // const PostData=()=>{
        
        useEffect(()=>{
            if(url){
            if(!/^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/.test(email)){
                M.toast({html:"invalid email address",classes:"#d32f2f red darken-2"})
                return
            }
            fetch("/seller/signup",{
                method:"post",
                headers:{
                    "Content-Type":"application/json"
                },
                body:JSON.stringify({
                    name,
                    email,
                    password,
                    storeName,
                    cityName,
                    address,
                    image:url
                })
            }).then(res=>res.json())
            .then(data=>{
                if(data.error){
                M.toast({html:data.error,classes:"#37474f blue-grey darken-3"})
                }
                else{
                    // localStorage.setItem("jwt",data.token)
                    // localStorage.setItem("seller",JSON.stringify(data.user))
                    // dispatch({type:"SELLER",payload:data.user})
                    M.toast({html:data.message,classes:"#00e676 green accent-3"})
                    history.push('/sell/signin')
                }
            })
        }
        },[url])
        
    // }

    const PostDataImage=()=>{
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
        <div className="Signup" style={{marginTop:"-38%"}}>
            <div className="myCard">
                <div className="card auth-card1 input-field">
                    {/* <h2>FOODHUB</h2> */}
                    <input type="text" placeholder="name" value={name}  onChange={(e)=>setName(e.target.value)} ></input>
                    <input type="text" placeholder="email"value={email} onChange={(e)=>setEmail(e.target.value)}></input>
                    <input type="password" placeholder="password" value={password} onChange={(e)=>setPassword(e.target.value)} ></input>
                    <input type="text" placeholder="restaurant_name" value={storeName} onChange={(e)=>setRName(e.target.value)}></input>
                    <input type="text" placeholder="cityname" value={cityName} onChange={(e)=>setCityName(e.target.value)}></input>
                    <input type="text" placeholder="address" value={address} onChange={(e)=>setAddress(e.target.value)}></input>
                    <div className="file-field input-field">
                        <div className="btn #42a5f5 blue darken">
                            <span style={{color:"white"}}>Upload Pic</span>
                            <input type="file" onChange={(e)=>setImage(e.target.files[0])} ></input>
                        </div>
                        <div className="file-path-wrapper">
                            <input className="file-path validate" type="text"></input>
                        </div>
                    </div>
                    <button style={{margin:"20px",color:"white"}} className="btn waves-effect waves-light #42a5f5 blue lighten-1" onClick={()=>PostDataImage()} >
                        Sign up
                    </button>
                    <h6>
                         <Link to="/sell/login">Already have an account ?</Link>
                    </h6>
                </div>

            </div>
        </div>
    )
}

export default SellerSignup
