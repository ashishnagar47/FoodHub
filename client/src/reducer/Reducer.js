export const initialState=null;

export const reducer=(state,action)=>{
    if(action.type==="SELLER"){
        return action.payload
    }
    if(action.type==="CLEAR"){
        return null
    }
    console.log(state)
    return state;
}
