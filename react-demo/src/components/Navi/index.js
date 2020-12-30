import CartSummary from 'components/Cart/CartSummary'
import React, { Component } from 'react'
import { Nav, Navbar } from 'react-bootstrap'

export default class Navi extends Component {
    render() {
        return (
            <Navbar bg="light" expand="lg">
                <Navbar.Brand href="/">React-Demo</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/add-product">Add Product</Nav.Link>
                        <CartSummary
                            cart={this.props.cart}
                            removeFromCart={this.props.removeFromCart}
                        />
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        )
    }
}
