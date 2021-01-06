import alertify from 'alertifyjs';
import React, { Component } from 'react';
import { Badge, Button, Table } from 'react-bootstrap';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getProducts } from 'actions/product';
import { addProductToCart } from 'actions/cart';

function mapStateToProps(state) {
  return {
    currentCategory: state.setCurrentCategoryReducer,
    products: state.getProductsReducer,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      getProducts: bindActionCreators(getProducts, dispatch),
      addProductToCart: bindActionCreators(addProductToCart, dispatch),
    },
  };
}

class ProductList extends Component {
  addProductToCart(product) {
    this.props.actions.addProductToCart(product);
    alertify.success(`'${product.productName}' added to cart`, 2);
  }

  componentDidMount() {
    this.props.actions.getProducts();
  }

  render() {
    return (
      <div>
        <h3>
          {' '}
          <Badge variant="secondary">Product List</Badge>
          <Badge variant="warning">{this.props.currentCategory.categoryName}</Badge>
        </h3>
        <Table size="sm" hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Product Name</th>
              <th>Quantity Per Unit</th>
              <th>Unit Price</th>
              <th>Units in Stock</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {this.props.products.map((product) => (
              <tr key={product.id}>
                <th scope="row">{product.id}</th>
                <td>{product.productName}</td>
                <td>{product.quantityPerUnit}</td>
                <td>{product.unitPrice}</td>
                <td>{product.unitsInStock}</td>
                <td>
                  <Button onClick={() => this.addProductToCart(product)} variant="info" size="sm">
                    add to cart
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductList);
