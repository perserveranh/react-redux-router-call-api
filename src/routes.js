import React from 'react';
import HomePage from './containers/HomePage/homepage';
import NotFoundPage from './containers/notfoundPage/notfoundpage';
import ProductListPage from './containers/ProductListPage/productlistpage';
import ProductActionPage from './containers/ProductActionPage/productactionpage';

const routes = [
    {
        path: '/',
        exact: true,
        main: () => <HomePage />
    },
    {
        path: '/product/list',
        exact: false,
        main: () => <ProductListPage />
    },
    {
        path: '/product/add',
        exact: false,
        main: ({ location, history }) => <ProductActionPage location={location} history={history} />
    },
    {
        path: '/product/edit/:id',
        exact: false,
        main: ({ match, history }) => <ProductActionPage match={match} history={history} />
    },
    {
        path: '',
        exact: false,
        main: () => <NotFoundPage />
    }
];

export default routes;