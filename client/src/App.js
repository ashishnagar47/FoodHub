
import './App.css';
import { Intro } from './components/Intro';
import Navbar from "./components/Navbar"
import {BrowserRouter,Route} from "react-router-dom"
import HomePageSeller from './components/HomePageSeller';
import SellerLogin from './components/SellerLogin';
import SellerSignup from './components/SellerSignup';
import SellerPage from './components/SellerPage';
import AddItemPage from './components/AddItemPage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route exact path="/">
        <Navbar />
          <Intro />
        </Route>
        <Route exact path="/seller">
          <SellerPage></SellerPage>
        </Route>
        <Route path="/seller/login">
            <HomePageSeller></HomePageSeller>
            <SellerLogin></SellerLogin>
        </Route>
        <Route path="/seller/signup">
          <HomePageSeller></HomePageSeller>
            <SellerSignup />
        </Route>
        <Route path="/seller/addItem">
            <AddItemPage></AddItemPage>
        </Route>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
