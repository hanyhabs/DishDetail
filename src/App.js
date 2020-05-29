import React, { Component } from 'react';
import logo from './logo.svg';
import { Navbar, NavbarBrand, Media } from 'reactstrap';
import './App.css';
import Menu from './components/MenuComponent.js'
import { DISHES } from "./shared/dishes";

class App extends Component {
constructor(props){
  super(props);
  this.state ={
    dishes: DISHES
  };
}

render(){
  return (
    <div>
      <Navbar dark color="primary">
        <div className="container">
            <NavbarBrand href="/">Restaurante con fusion</NavbarBrand>
        </div>
      </Navbar>
      <Menu dishes={this.state.dishes}/> {/**passing dishes as props among components */}
    </div>
  );
}
}

export default App;
