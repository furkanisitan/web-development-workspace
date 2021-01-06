import alertify from 'alertifyjs';
import React, { Component } from 'react';
import { Button, Col, Form } from 'react-bootstrap';

export default class ProductForm extends Component {
  state = { productName: '', quantityPerUnit: '', unitPrice: 0, unitsInStock: 0 };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    alertify.success(`productName: ${this.state.productName}`);
    alertify.success(`quantityPerUnit: ${this.state.quantityPerUnit}`);
    alertify.success(`unitPrice: ${this.state.unitPrice}`);
    alertify.success(`unitsInStock: ${this.state.unitsInStock}`);
  };

  render() {
    return (
      <div>
        <Form onSubmit={this.handleSubmit}>
          <Form.Row>
            <Form.Group as={Col}>
              <Form.Label>Product name</Form.Label>
              <Form.Control name="productName" onChange={this.handleChange} />
            </Form.Group>

            <Form.Group as={Col}>
              <Form.Label>Quantity Per Unit</Form.Label>
              <Form.Control name="quantityPerUnit" onChange={this.handleChange} />
            </Form.Group>
          </Form.Row>

          <Form.Row>
            <Form.Group as={Col}>
              <Form.Label>Unit Price</Form.Label>
              <Form.Control type="number" name="unitPrice" onChange={this.handleChange} />
            </Form.Group>

            <Form.Group as={Col}>
              <Form.Label>Units in Stock</Form.Label>
              <Form.Control type="number" name="unitsInStock" onChange={this.handleChange} />
            </Form.Group>
          </Form.Row>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    );
  }
}
