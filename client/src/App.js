import './App.css';
import React,{createContext,useReducer,useEffect,useContext} from 'react'
import { Intro } from './components/Intro';
import Navbar from "./components/Navbar"
import {BrowserRouter,Route,Switch} from "react-router-dom"
import HomePageSeller from './components/HomePageSeller';
import {SellerLogin,UserLogin} from './components/SellerLogin';
import SellerSignup from './components/SellerSignup';
import SellerPage from './components/SellerPage';
import AddItemPage from './components/AddItemPage';
import {reducer,initialState} from './reducer/Reducer'
 import StoresCitywise from './components/StoresCitywise';
import ShowStoreItem from './components/ShowStoreItem';

export const UserContext=createContext();

const Routing=()=>{
  const {dispatch}=useContext(UserContext);
  // console.log(localStorage.getItem("seller"))
  useEffect(()=>{
    const seller=JSON.parse(localStorage.getItem("seller"))

    // console.log(localStorage.getItem("seller"))
    // console.log(seller)
    if(seller){
      dispatch({type:"SELLER",payload:seller})
      //  history.push("/seller.................x")
    }
  },[])

  return(
    <Switch>
      <Route exact path="/">
        <Navbar />
        <Intro />
      </Route>
      <Route exact path="/seller.................x/">
          <SellerPage></SellerPage>
      </Route>
      <Route exact path="/login">
            <HomePageSeller></HomePageSeller>
            <UserLogin></UserLogin>
      </Route>
      <Route exact path="/signup">
            <HomePageSeller></HomePageSeller>
            {/* <SellerLogin></SellerLogin> */}
      </Route>
      <Route exact path="/Order">
            <HomePageSeller></HomePageSeller>
            {/* <SellerLogin></SellerLogin> */}
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
      <Route path="/seller/:cityName" component={StoresCitywise}>
        {/* <StoresCitywise></StoresCitywise> */}
      </Route>
      <Route path="/showItem/:storeName" component={ShowStoreItem}></Route>
    </Switch>
  )
}

function App() {
  const [state,dispatch]=useReducer(reducer,initialState)
  // console.log(state)
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
