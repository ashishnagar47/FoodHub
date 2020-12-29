import React,{useState} from 'react'
import {Link,useHistory} from "react-router-dom"
import M from "materialize-css"

function SellerLogin() {
    const history=useHistory();
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const PostData=()=>{
        fetch("/seller/signin",{
            method:"post",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
                email,
                password
            })
        }).then(res=>res.json())
        .then(data=>{
            if(data.error){
                M.toast({html:data.error,classes:"#37474f blue-grey darken-3"})
                }
                else{
                    console.log(data)
                    localStorage.setItem("jwt",data.token)
                    localStorage.setItem("user",JSON.stringify(data.user))
                    M.toast({html:"Loggedin Succesfully",classes:"#00e676 green accent-3"})
                    history.push('/seller')
                }
        })
    }

    return (
        <div className="Login">
            <div className="myCard">
                <div className="card auth-card input-field">
                    {/* <h2 style={{fontsize: "2vw",fontfamily: 'Fredericka the Great',}}>FOODHUB</h2> */}
                    <input type="text" placeholder="email" value={email} onChange={(e)=>setEmail(e.target.value)}  ></input>
                    <input type="password" placeholder="password" value={password} onChange={(e)=>setPassword(e.target.value)} ></input>
                    <button style={{margin:"20px",color:"white"}} onClick={()=>PostData()} className="btn waves-effect waves-light #42a5f5 blue lighten-1" >
                        Login
                    </button>
                    <h6>
                        <Link to="/seller/signup">Create account</Link>
                    </h6>
                </div>
            </div>
        </div>
    )
}

export default SellerLogin
