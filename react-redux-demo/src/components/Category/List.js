import React, { Component } from 'react';
import { ListGroup } from 'react-bootstrap';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getProducts } from 'actions/product';
import { getCategories, setCurrentCategory } from 'actions/category';

function mapStateToProps(state) {
  return {
    currentCategory: state.setCurrentCategoryReducer,
    categories: state.getCategoriesReducer,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      setCurrentCategory: bindActionCreators(setCurrentCategory, dispatch),
      getCategories: bindActionCreators(getCategories, dispatch),
      getProducts: bindActionCreators(getProducts, dispatch),
    },
  };
}

class CategoryList extends Component {
  componentDidMount() {
    this.props.actions.getCategories();
  }

  selectCategory = (category) => {
    this.props.actions.setCurrentCategory(category);
    this.props.actions.getProducts(category.id);
  };

  render() {
    return (
      <div>
        <h3>Category List</h3>

        <ListGroup>
          {this.props.categories.map((category) => (
            <ListGroup.Item
              key={category.id}
              action
              variant="light"
              onClick={() => this.selectCategory(category)}
              active={category.id === this.props.currentCategory.id}
            >
              {category.categoryName}
            </ListGroup.Item>
          ))}
        </ListGroup>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CategoryList);
