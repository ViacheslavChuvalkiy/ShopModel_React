import React, {Component} from 'react';
import classes from './mainPage.module.css';
import main_img from '../../../img/Main.jpg'

class mainPage extends Component{

    render() {
        return (

            <div className={classes.main_page}>

                <div className={classes.main_credo}>
                    <p> Философия бредна - КРАСИВАЯ КАЖДЫЙ ДЕНЬ! Наша одежда поднимает настроение мягкостью тканей и сочетанием цветов. Нет равнодушных к нашей оджеде.</p>
                </div>

                <div>
                    <img src={main_img} alt={"main_img"} className={classes.main_img}/>
                </div>

            </div>

        );
    }
}

export default mainPage;