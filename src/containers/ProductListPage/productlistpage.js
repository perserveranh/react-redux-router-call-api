import React, { Component } from 'react';
import ProductList from '../../components/productsList/productlist';
import ProductItem from '../../components/productsItem/productitem';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { actFetchProductsRequest, actDeleteProductRequest } from './../../actions/index';
class ProductListPage extends Component {
    componentDidMount() {
        this.props.dispatch(actFetchProductsRequest());
    }

    render() {
        var { products } = this.props;

        return (
            <div className="col-12 col-md-12 col-xs-12">
                <Link to="/product/add" >
                    <button type="button" className="btn btn-info">Add Product</button>
                </Link>
                <ProductList>
                    {this.showProducts(products)}

                </ProductList>
            </div>
        );
    }
    showProducts(products) {
        var result = null;
        if (products.length > 0) {
            result = products.map((product, index) => {
                return <ProductItem
                    product={product}
                    key={index} index={index}
                    onDeleteProduct={this.onDeleteProduct} />
            });
        }
        return result;
    }
    onDeleteProduct = (id) => {
        this.props.dispatch(actDeleteProductRequest(id));
    }
}
const mapStateToProps = state => {
    return {
        products: state.products
    }
}

export default connect(mapStateToProps)(ProductListPage);
