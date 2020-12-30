import './App.css';
import React,{createContext,useReducer,useEffect} from 'react'
import { Intro } from './components/Intro';
import Navbar from "./components/Navbar"
import {BrowserRouter,Route,Switch,useHistory} from "react-router-dom"
import HomePageSeller from './components/HomePageSeller';
import SellerLogin from './components/SellerLogin';
import SellerSignup from './components/SellerSignup';
import SellerPage from './components/SellerPage';
import AddItemPage from './components/AddItemPage';
import {reducer,initialState} from './reducer/Reducer'

export const UserContext=createContext();

const Routing=()=>{
  const history=useHistory();
  useEffect(()=>{
    const seller=JSON.parse(localStorage.getItem("seller"))
    if(seller){
       history.push("/seller")
    }
    // else{
    //   history.push("/")
    // }
  },[])

  return(
    <Switch>
      <Route exact path="/">
        <Navbar />
        <Intro />
      </Route>
      <Route exact path="/seller">
          <SellerPage></SellerPage>
      </Route>
      <Route path="/sell/login">
          <HomePageSeller></HomePageSeller>
          <SellerLogin></SellerLogin>
      </Route>
      <Route path="/sell/signup">
        <HomePageSeller></HomePageSeller>
        <SellerSignup />
      </Route>
      <Route path="/seller/addItem">
          <AddItemPage></AddItemPage>
      </Route>
    </Switch>
  )
}

function App() {
  const [state,dispatch]=useReducer(reducer,initialState)
  return (
    <div className="App">
      <UserContext.Provider value={{state,dispatch}}>
      <BrowserRouter>
        <Routing></Routing>
      </BrowserRouter>
      </UserContext.Provider>
    </div>
  );
}

export default App;
