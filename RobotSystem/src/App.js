import React, { Component } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Footer from './components/home/Footer';
import './App.css';
import Shoppingcartrow from './components/admin/ShoppingCart/ShoppingCartRow';
import DisplayRobot from './components/User/DisplayPet';

export default class App extends Component {
  render() {
    return (
      <div className='body' style={{backgroundColor : '#ddddff'}} >
        <BrowserRouter>
          <Switch>
            {/* Main Pages Related Paths */}
            <Route exact path='/' component={DisplayRobot} />
            <Route exact path='/shopping-cart' component={Shoppingcartrow} />
          </Switch>
        </BrowserRouter>
        <br />
        <Footer />
      </div>
    )
  }
}