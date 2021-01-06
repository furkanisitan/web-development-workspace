import React, { Component } from 'react';
import { Col, Row } from 'react-bootstrap';
import CategoryList from 'components/Category/List';
import ProductList from 'components/Product/List';

export default class Home extends Component {
  render() {
    return (
      <Row>
        <Col xs="3">
          <CategoryList />
        </Col>
        <Col xs="9">
          <ProductList />
        </Col>
      </Row>
    );
  }
}
