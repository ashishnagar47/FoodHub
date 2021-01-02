export const initialState=null;

export const reducer=(state,action)=>{
    if(action.type==="SELLER"){
        return action.payload
    }
    console.log(state)
    return state;
}
