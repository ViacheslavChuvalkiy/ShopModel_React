import React, {Component} from 'react';
import classes from './layout.module.css';
import Header_block from "../../containers/Header/header";

class Layout extends Component{
    render() {
        return (
            <div className={classes.layout}>

                <Header_block/>

                <main>
                    { this.props.children }
                </main>

            </div>
        );
    }
}

export default Layout;