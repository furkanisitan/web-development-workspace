import React, { Component } from 'react'
import { Container } from 'react-bootstrap'
import { Route, Switch } from 'react-router-dom'
import Home from './Home'
import Navi from './Navi'
import alertify from 'alertifyjs'
import Cart from './Cart'
import storage from 'utils/localStorage'
import ProductForm from './Product/Form'

export default class App extends Component {

  cartLocalStorageKey = "cart"

  state = {
    cart: storage.getArray(this.cartLocalStorageKey)
  }

  addToCart = (product) => {

    const cart = this.state.cart;

    let cartItem = cart.find(x => x.product.id === product.id);
    cartItem ? cartItem.quantity += 1 : cart.push({ product, quantity: 1 }) 
    this.setState({ cart });
    storage.setArray(this.cartLocalStorageKey, cart);
    alertify.success(`'${product.productName}' added to cart`, 2);
  }

  removeFromCart = (product) => {
    const cart = this.state.cart.filter(x => x.product.id !== product.id);
    this.setState({ cart });
    storage.setArray(this.cartLocalStorageKey, cart);
    alertify.error(`'${product.productName}' removed form cart`, 2);
  }

  render() {
    return (

      <Container>

        <Navi
          cart={this.state.cart}
          removeFromCart={this.removeFromCart}
        />

        <Switch>
          <Route path="/" exact><Home addToCart={this.addToCart} /></Route>
          <Route path="/cart" exact><Cart cart={this.state.cart} removeFromCart={this.removeFromCart} /></Route>
          <Route path="/add-product" exact><ProductForm /></Route>
        </Switch>
      </Container>

    )
  }
}
