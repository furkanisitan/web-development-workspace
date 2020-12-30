import React, { Component } from 'react'
import { Badge, Navbar, NavDropdown, OverlayTrigger, Tooltip } from 'react-bootstrap'

export default class CartSummary extends Component {

    getCartSummary() {
        return (
            <NavDropdown title="Cart Summary" id="cart-dropdown" drop="left">

                {this.props.cart.map(x => (

                    <NavDropdown.Item key={x.product.id}>

                        <OverlayTrigger overlay={<Tooltip id="remove-tooltip">remove</Tooltip>}>
                            <Badge
                                variant="danger"
                                onClick={() => this.props.removeFromCart(x.product)}>
                                X
                            </Badge>
                        </OverlayTrigger>

                        <span> {x.product.productName} </span>
                        <Badge variant="success">{x.quantity}</Badge>
                    </NavDropdown.Item>
                ))}
                <NavDropdown.Divider />
                <NavDropdown.Item href="/cart">Go to Cart</NavDropdown.Item>
            </NavDropdown>
        )
    }

    getEmptyCart() {
        return (
            <Navbar.Text>Cart Empty</Navbar.Text>
        )
    }

    render() {
        return this.props.cart.length > 0 ? this.getCartSummary() : this.getEmptyCart()
    }
}
