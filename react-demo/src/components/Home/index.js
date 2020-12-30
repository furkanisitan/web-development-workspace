import CategoryList from 'components/Category/List';
import ProductList from 'components/Product/List';
import React, { Component } from 'react'
import { Col, Row } from 'react-bootstrap';

export default class Home extends Component {

    state = {
        currentCategory: { id: -1, name: "All Products" },
        products: [],
    }

    componentDidMount() {
        this.getProducts();
    }

    getProducts = (categoryId) => {

        const url = categoryId > 0 ? `http://localhost:3000/categories/${categoryId}/products` : `http://localhost:3000/products`;
        fetch(url)
            .then(res => res.json())
            .then(data => { this.setState({ products: data }) })
    }

    selectCategory = (category) => {
        this.setState({ currentCategory: { id: category.id, name: category.categoryName } });
        this.getProducts(category.id);
    }

    categoryInfo = { title: "Category List" };
    productInfo = { title: "Product List" };

    render() {
        return (
            <Row>
                <Col xs="3">
                    <CategoryList
                        info={this.categoryInfo}
                        selectCategory={this.selectCategory}
                        currentCategory={this.state.currentCategory}
                    />
                </Col>
                <Col xs="9">
                    <ProductList
                        info={this.productInfo}
                        currentCategory={this.state.currentCategory}
                        products={this.state.products}
                        addToCart={this.props.addToCart}
                    />
                </Col>
            </Row>
        )
    }
}
