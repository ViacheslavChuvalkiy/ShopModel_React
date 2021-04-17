import React, {Component} from 'react';
import classes from '../forms/forms.css';
import Button from "../UI/button/button";
import Input from "../UI/Input/input";

class FormSingIn extends Component {

    state = {
        formControls: {
            email: {
                value: '',
                type: 'email',
                label: 'Email',
                messageError: 'Введите корректный email',
                valid: false,
                touched: false,
                validation: {
                    required: true,
                    email: true
                }
            },
            password: {
                value: '',
                type: 'password',
                label: 'Пароль',
                messageError: 'Введите корректный пароль',
                valid: false,
                touched: false,
                validation: {
                    required: true,
                    minLength: 6
                }
            }
        }
    };

    submitHandler = event => {
        event.preventDefault();

    };

    onChangeHendler = (event,controlName) =>{


    };


    loginHandler = () => {

    };

    remindPasswordHandler = () => {

    };

    rendreInputs(){

        return Object.keys(this.state.formControls).map((controlName,index) => {
           const control = this.state.formControls[controlName];

            return(
                <Input
                    key = {controlName + index}
                    type = {control.type}
                    value = {control.value}
                    valid = {control.valid}
                    touched = {control.touched}
                    label = {control.label}
                    shouldValidate = {!!control.validation}
                    messageError = {control.messageError}
                    onChange = {event => this.onChangeHendler(event,controlName)}
                />
            )

        });
    }

    render() {
        return (
            <div className={classes.formSingIn}>
                <div>
                    <h1> Авторизация</h1>

                    <form onSubmit={this.submitHandler} >

                        {this.rendreInputs()}

                        {this.messageError ?
                            <span> ошибка </span>
                            :
                            null}

                    <Button
                        type="success"
                        onClick={this.loginHandler}>
                        Войти
                        </Button>

                    <Button
                        type="forgotPassword"
                        onClick={this.remindPasswordHandler}>
                        Забыли пароль?
                    </Button>

                    </form>
                </div>


            </div>

        )
    }
};

export default FormSingIn;