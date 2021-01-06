import React from 'react';
import { Container } from 'react-bootstrap';
import { Route, Switch } from 'react-router-dom';
import Cart from './Cart';
import Home from './Home';
import Navi from './Navi';
import ProductForm from './Product/Form';

export default function App() {
  return (
    <Container>
      <Navi />

      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/cart" exact>
          <Cart />
        </Route>
        <Route path="/add-product" exact>
          <ProductForm />
        </Route>
      </Switch>
    </Container>
  );
}
