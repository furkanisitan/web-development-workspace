import alertify from 'alertifyjs';
import React, { Component } from 'react';
import { Button, Table } from 'react-bootstrap';
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

class Cart extends Component {
  removeFromCart(product) {
    this.props.actions.removeFromCart(product);
    alertify.error(`'${product.productName}' removed from cart`, 2);
  }

  componentDidMount() {
    this.props.actions.getCart();
  }

  render() {
    return (
      <Table striped size="sm">
        <thead>
          <tr>
            <th>#</th>
            <th>Category Id</th>
            <th>Product Name</th>
            <th>Unit Price</th>
            <th>Units In Stock</th>
            <th>Quantity</th>
            <th />
          </tr>
        </thead>
        <tbody>
          {this.props.cart.map((x) => (
            <tr key={x.product.id}>
              <td>{x.product.id}</td>
              <td>{x.product.categoryId}</td>
              <td>{x.product.productName}</td>
              <td>{x.product.unitPrice}</td>
              <td>{x.product.unitsInStock}</td>
              <td>{x.quantity}</td>
              <td>
                <Button variant="danger" onClick={() => this.removeFromCart(x.product)} size="sm">
                  {' '}
                  Remove{' '}
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
