import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class ProductItem extends Component {
    onDeleteProduct = (id) => {
        if (confirm('Bạn chắc chắn muốn xóa ?')) { //eslint-disable-line
            this.props.onDeleteProduct(id);
        }
    }
    render() {
        var { product } = this.props;
        var statusName = product.status ? 'YES' : 'NO';
        var statusClass = product.status ? 'success' : 'warning';

        return (
            <tr>

                <td>{product.id}</td>
                <td>{product.name}</td>
                <td>{product.price}</td>
                <td>
                    <span className={`label label-${statusClass}`}>{statusName}</span>
                </td>
                {/* <td>
                    <img src={product.avatar} alt="avatar" style={{ width: '100px', height: '100px' }} />
                </td> */}
                <td>
                    <Link to={`/product/edit/${product.id}`}>
                        <button type="button" className="btn btn-danger mr-10">EDIT</button>
                    </Link>
                    <button type="button" className="btn btn-primary " onClick={() => this.onDeleteProduct(product.id)}>DELETE</button>
                </td>
            </tr>
        );
    }
}
export default ProductItem;
