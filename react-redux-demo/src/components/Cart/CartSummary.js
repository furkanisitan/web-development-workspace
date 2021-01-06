import alertify from 'alertifyjs';
import React, { Component } from 'react';
import { Badge, Navbar, NavDropdown, OverlayTrigger, Tooltip } from 'react-bootstrap';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getCart, removeProductFromCart } from 'actions/cart';

function mapStateToProps(state) {
  return {
    cart: state.cartReducer,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      getCart: bindActionCreators(getCart, dispatch),
      removeFromCart: bindActionCreators(removeProductFromCart, dispatch),
    },
  };
}

class CartSummary extends Component {
  removeFromCart(product) {
    this.props.actions.removeFromCart(product);
    alertify.error(`'${product.productName}' removed from cart`, 2);
  }

  componentDidMount() {
    this.props.actions.getCart();
  }

  getCartSummary() {
    return (
      <NavDropdown title="Cart Summary" id="cart-dropdown" drop="left">
        {this.props.cart.map((x) => (
          <NavDropdown.Item key={x.product.id}>
            <OverlayTrigger overlay={<Tooltip id="remove-tooltip">remove</Tooltip>}>
              <Badge variant="danger" onClick={() => this.removeFromCart(x.product)}>
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
    );
  }

  getEmptyCart() {
    return <Navbar.Text>Cart Empty</Navbar.Text>;
  }

  render() {
    return this.props.cart.length > 0 ? this.getCartSummary() : this.getEmptyCart();
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CartSummary);
