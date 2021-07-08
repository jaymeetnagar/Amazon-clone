import React, { useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./Header";
import Home from "./Home";
import Checkout from "./Checkout";
import { useStateValue } from "./StateProvider";
import Login from "./Login";
import { auth } from './firebase';
import Payment from "./Payment";
import Orders from "./Orders";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";


const promise = loadStripe(
  "pk_test_51J41yTSEqbXcAVcU23Et6XCysa5WxsgkFshlgEUNh6Q15pOFnOlBflzIA7FPNPFfdYirPYkg50quzbUjwQKlTGT600mr5gQ3Cd"
);

function App() {
  const [{ user }, dispatch] = useStateValue();

  useEffect(() => {

    const unsubscibe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch({
          type: "SET_USER",
          user: authUser
        });
      }
      else {
        dispatch({
          type: "SET_USER",
          user: null
        });
      }
    })
    return () => {
      unsubscibe();
    }
  }, []);

  console.log("USER IS >>>>", user);

  return (
    <Router>
      <div className="app">
        <Switch>

          <Route path="/orders">
            <Header />
            <Orders />
          </Route>

          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>

          <Route path="/login">
            <Login />
          </Route>

          <Route path="/payment">
            <Header />
            <Elements stripe={promise}>
              <Payment />
            </Elements>
          </Route>

          <Route path="/">
            <Header />
            <Home />
          </Route>

        </Switch>
      </div>
    </Router >
  );
}

export default App;