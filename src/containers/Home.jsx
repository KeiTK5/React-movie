import React from 'react';
import Home from '../components/Home';
import Cart from './page/Cart';
import Detail from './page/Detail';

import { Fragment } from 'react-is';

import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";


import Header from '../components/Header';
import Footer from '../components/Footer';
import Type from './page/Type/Type';
import Baocao from '../components/Baocao';
import AuthorProvider from '../context/AuthorProvider';
import User from './page/User/User';
import BXH from './page/BXH/BXH';
import store from '../redux';
import { Provider } from 'react-redux';
import Image from './page/Image/Image';
import Man from './page/MangaP/Man';


function HomeContainer() {
    return (
        <Fragment>
            <AuthorProvider>
                <Provider store={store}>
                    <Router>
                        <Header />
                        <Switch>
                            <Route exact path="/" component={Home} />
                            <Route path="/cart" component={Cart} />
                            <Route path="/baocao" component={Baocao} />
                            <Route path="/user" component={User} />
                            <Route path="/detail/:category/:name/:id" component={Detail} />
                            <Route path="/:category/:type" component={Type} />
                            <Route path="/rank" component={BXH} />
                            <Route path="/blog" component={Image} />
                            <Route path="/manga" component={Man} />
                        </Switch>
                        <Footer />
                    </Router>
                </Provider>
            </AuthorProvider>
        </Fragment>
    )
}
console.log(store.getState());
export default HomeContainer;