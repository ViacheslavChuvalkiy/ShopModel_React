import React, {Component} from 'react';
import classes from './mainPage.module.css';


class MainPage extends Component{

    state = {
        quiz: []
    };

    render() {
        return (
            <div className={classes.main_page}>
                Main page
            </div>

        );
    }
}

export default MainPage;