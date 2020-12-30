import React, { Component } from 'react'
import { ListGroup } from 'react-bootstrap';

export default class CategoryList extends Component {

    state = {
        categories: []
    }

    componentDidMount() {
        this.getCategories();
    }

    getCategories = () => {
        fetch("http://localhost:3000/categories")
            .then(res => res.json())
            .then(data => { this.setState({ categories: [{ id: -1, categoryName: "All Products" }].concat(data) }) })
    }

    render() {
        return (
            <div>

                <h3>{this.props.info.title}</h3>

                <ListGroup>
                    {this.state.categories.map(category => (
                        <ListGroup.Item key={category.id} action variant="light"
                            onClick={() => this.props.selectCategory(category)}
                            active={category.id === this.props.currentCategory.id}
                        >
                            {category.categoryName}
                        </ListGroup.Item>
                    ))}

                </ListGroup>

            </div >
        )
    }
}
