import React, {Component} from 'react';
import classes from './layout.module.css';
import Header from "../../containers/Header/header";

class Layout extends Component{
    render() {
        return (
            <div className={classes.layout}>

                <Header/>

                <main>
                    { this.props.children }
                </main>

            </div>
        );
    }
}

export default Layout;