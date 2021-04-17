import React, {Component} from 'react';
import classes from '../Header/header.module.css';
import Header_nav from '../header_nav/header_nav';
import logo from '../../img/logo2.png';
import logo2 from '../../img/logo.png';
import Icon_FontAwesome from "../../components/fontAwesome/iconFontAwesome";
import Button from "../../components/UI/button/button";

import FormSingIn from '../../components/forms/formSingIn';
import FormRegistration from '../../components/forms/formRegistration';

class Header extends Component{

    state = {
        showAuthButton: false,
        showSingInForm: false,
        showRegistretionForm: false
    }

    clickSingInHandler = event => {
        event.preventDefault();

        let showSingInForm = true;
        let showRegistretionForm = false;

        this.setState({
            showRegistretionForm,
            showSingInForm
        });
    };

    clickRegistrationHandler = event => {
        event.preventDefault();

        let showRegistretionForm = true;
        let showSingInForm = false;

        this.setState({
            showRegistretionForm,
            showSingInForm
        });

    };

    mouseEnterHandler = event => {
        event.preventDefault();

        let showAuthButton = true;

        this.setState({
            showAuthButton
        });

    };

    mouseLeaveHandler = event => {
        event.preventDefault();

        let showAuthButton = false;

        this.setState({
            showAuthButton
        });

    };

    ClickCloseBlock = event => {

        let showRegistretionForm = false;
        let showSingInForm = false;

        this.setState({
            showRegistretionForm,
            showSingInForm
        });

    };

    render() {
        return (
            <div className={classes.header_menu}>
                <div className={classes.header__top}>
                    <img src={logo} alt={"logo"} className={classes.logo__picture}/>
                    <img src={logo2} alt={"logo2"} className={classes.logo__picture}/>

                    {this.state.showSingInForm ?
                        <div className={classes.blockFormSingIn}>
                            <FormSingIn/>
                            <div
                                className={classes.closeBlock}
                                onClick={this.ClickCloseBlock}
                            >&times;</div>
                        </div>
                        : null
                    }

                    {this.state.showRegistretionForm ?
                        <div className={classes.blockFormRegistration}>
                            <FormRegistration/>
                            <div
                                className={classes.closeBlock}
                                onClick={this.ClickCloseBlock}
                            >&times;</div>
                        </div>
                        : null
                    }


                    <div className={classes.contact_block}>

                        <div className={classes.contact_menu}>
                            <a href="tel: +38063 304 4222">
                                <Icon_FontAwesome
                                    style='fa'
                                    color='black'
                                    type='mobile-alt'
                                />
                            </a>

                            <a href="mailto: office.natalybloom@gmail.com" target="_blank">
                                <Icon_FontAwesome
                                    style='fa'
                                    type='envelope'
                                    color='black'
                                />
                            </a>

                            <a href="https://www.facebook.com/natalybloombrand/" target="_blank">
                                <Icon_FontAwesome
                                    style='fab'
                                    color='blue'
                                    type='facebook-square'
                                />
                            </a>

                            <a href="https://instagram.com/nataly_bloom_ua?igshid=veen24yyi34p" target="_blank">
                                <Icon_FontAwesome
                                    style='fab'
                                    color='orange'
                                    type='instagram'
                                />
                            </a>

                            <a onMouseEnter={this.mouseEnterHandler}>
                                <Icon_FontAwesome
                                    style='fa'
                                    color='dark'
                                    type='user-circle'
                                />
                            </a>

                        </div>

                        {this.state.showAuthButton ?
                            <div className={classes.contact_auth}
                                 onMouseLeave={this.mouseLeaveHandler}>
                                <Button
                                    type="primary"
                                    onClick={this.clickSingInHandler}
                                    value={"singIn"}
                                >
                                    Войти
                                </Button>

                                <Button
                                    type="primary"
                                    onClick={this.clickRegistrationHandler}
                                    value={"registration"}>
                                    Регистрация
                                </Button>
                            </div>
                        : null
                        }

                    </div>

                </div>

                <div className={classes.header__bottom}>
                    <Header_nav/>
                </div>

            </div>
        );
    }

}

export default Header;
