import React, {Component} from 'react';
import classes from '../Header/header.module.css';
import Header_nav from '../../components/header_nav/header_nav'
import logo from '../../img/IMG_0725.jpeg'
import logo2 from '../../img/IMG_0726.jpeg'
import FontAwesome_nav from '../../components/fontAwesome/fontAwesome_nav'


class Header extends Component{
    render() {
        return (
            <div className={classes.header_menu}>
                <div className={classes.header__top}>
                    <img src={logo} alt={"logo"} className={classes.logo__picture}/>
                    <img src={logo2} alt={"logo2"} className={classes.logo__picture}/>

                    <FontAwesome_nav/>

                </div>

                <div className={classes.header__bottom}>
                    <Header_nav/>
                </div>

            </div>
        );
    }

}

export default Header;
