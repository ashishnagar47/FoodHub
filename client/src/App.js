
import './App.css';
import { Intro } from './components/Intro';
import Navbar from "./components/Navbar"
import {BrowserRouter,Route} from "react-router-dom"
import HomePageSeller from './components/HomePageSeller';
import SellerLogin from './components/SellerLogin';
import SellerSignup from './components/SellerSignup';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route exact path="/">
        <Navbar />
          <Intro />
        </Route>
        <Route path="/seller">
          <HomePageSeller />
        </Route>
        <Route path="/seller/login">
            <SellerLogin></SellerLogin>
        </Route>
        <Route path="/seller/signup">
            <SellerSignup />
        </Route>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
