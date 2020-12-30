import React, { Component } from 'react'
import { Button, Table } from 'react-bootstrap'

export default class Cart extends Component {
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
                    {this.props.cart.map(x => (
                        <tr key={x.product.id}>
                            <td>{x.product.id}</td>
                            <td>{x.product.categoryId}</td>
                            <td>{x.product.productName}</td>
                            <td>{x.product.unitPrice}</td>
                            <td>{x.product.unitsInStock}</td>
                            <td>{x.quantity}</td>
                            <td>
                                <Button variant="danger" onClick={() => this.props.removeFromCart(x.product)} size="sm"> Remove </Button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        )
    }
}
