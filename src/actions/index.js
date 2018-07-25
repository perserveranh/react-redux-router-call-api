import * as Types from './../constants/ActionType';
import CallApi from './../api/apiCaller';

export const actFetchProducts = (products) => {
    return {
        type: Types.FETCH_PRODUCTS,
        products
    }
}

export const actAddProduct = (product) => {
    return {
        type: Types.ADD_PRODUCT,
        product
    }
}

export const actUpdateProduct = (product) => {
    return {
        type: Types.UPDATE_PRODUCT,
        product
    }
}

export const actDeleteProduct = (id) => {
    return {
        type: Types.DELETE_PRODUCT,
        id
    }
}

export const actGetProduct = (product) => {
    return {
        type: Types.EDIT_PRODUCT,
        product
    }
}



export const actFetchProductsRequest = () => {
    return dispatch => {
        return CallApi('products', 'GET', null).then(res => {
            dispatch(actFetchProducts(res.data));
        });
    }
}

export const actAddProductRequest = (product) => {
    return dispatch => {
        return CallApi('products', 'POST', product).then(res => {
            dispatch(actAddProduct(res.data));
        });
    }
}

export const actUpdateProductRequest = (product) => {
    return dispatch => {
        return CallApi(`products/${product.id}`, 'PUT', product).then(res => {
            dispatch(actUpdateProduct(res.data));
        });
    }
}

export const actDeleteProductRequest = (id) => {
    return dispatch => {
        return CallApi(`products/${id}`, 'DELETE', null).then(res => {
            dispatch(actDeleteProduct(id));
        });
    }
}


export const actGetProductRequest = (id) => {
    return dispatch => {
        return CallApi(`products/${id}`, 'GET', null).then(res => {
            dispatch(actGetProduct(res.data))
        });
    }
}