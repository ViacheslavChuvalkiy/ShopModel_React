import React, {Component, useContext} from 'react';
import {Route, Switch} from 'react-router-dom';
import Layout from './hoc/Layout/layout';
import {UserState} from './context/usersContext/userState';

import mainPage from './containers/pages/mainPage/mainPage';
import adminPage from './containers/pages/admin/admin';
import cartPage from './containers/pages/cart/cart';
import lookBookPage from './containers/pages/LookBook/lookBook';
import productsPage from './containers/pages/products/products';
import salePage from './containers/pages/salePage/salePage';

export const App = () => {

    return (
        <UserState>
            <Layout>
                <Switch>
                    <Route path="/" component={mainPage} exact={true}/>
                    <Route path="/admin" component={adminPage}/>
                    <Route path="/lookBook" component={lookBookPage}/>
                    <Route path="/cart" component={cartPage}/>
                    <Route path="/sale" component={salePage}/>
                    <Route path="/products/:id" component={productsPage}/>
                </Switch>
            </Layout>
        </UserState>
    );
};
