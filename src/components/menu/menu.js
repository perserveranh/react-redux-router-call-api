import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';

const menus = [
    {
        name: 'HOME',
        to: '/',
        exact: true
    },
    {
        name: 'MANAGE PRODUCT',
        to: '/product/list',
        exact: false
    }
]

const MenuLink = ({ label, to, activeOnlyWhenExact }) => {
    return (
        <Route path={to} exact={activeOnlyWhenExact} children={({ match }) => {
            var active = match ? 'active' : '';

            return (
                <li className={`${active}`}>
                    <Link to={to} className="my-link">
                        {label}
                    </Link>
                </li>
            )
        }} />
    )
}

class Menu extends Component {
    render() {
        return (
            <div className="navbar navbar-primary">
                <div className="navbar-brand" >Perserver Anh</div>
                <ul className="nav navbar-nav">
                    {this.showMenus(menus)}
                </ul>
            </div>
        );
    }
    showMenus = (menus) => {
        var result = null;
        if (menus.length > 0) {
            result = menus.map((menu, index) => {
                return (
                    <MenuLink
                        key={index}
                        label={menu.name}
                        to={menu.to}
                        activeOnlyWhenExact={menu.exact}
                    />
                )
            });
        }
        return result;
    }
}
export default Menu;
