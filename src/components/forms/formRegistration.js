import React, {Component} from 'react';
import classes from '../forms/forms.css';
import Button from "../UI/button/button";
import Input from "../UI/Input/input";

class FormRegistration extends Component {

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
            ,
            password2: {
                value: '',
                type: 'password',
                label: 'повторите пароль',
                messageError: 'Подтвердите пароль',
                valid: false,
                touched: false,
                validation: {
                    required: true,
                    minLength: 6
                }
            }
            ,
            name: {
                value: '',
                type: 'text',
                label: 'Введите имя',
                messageError: 'Введите имя',
                valid: false,
                touched: false,
                validation: {
                    required: true,
                    minLength: 5
                }
            }
            ,
            lastName: {
                value: '',
                type: 'text',
                label: 'Введите фамилию',
                messageError: 'Введите фамилию',
                valid: false,
                touched: false,
                validation: {
                    required: true,
                    minLength: 5
                }
            }
            ,
            phone: {
                value: '',
                type: 'tel',
                label: 'Введите телефон',
                messageError: 'Введите телефон',
                valid: false,
                touched: false,
                validation: {
                    required: true
                }
            }
            ,
            delivery_adr: {
                value: '',
                type: 'string',
                label: 'Введите адрес доставки',
                messageError: 'Введите адрес доставки',
                valid: false,
                touched: false,
                validation: {
                    required: true,
                    minLength: 10
                }
            }


        }
    };

    submitHandler = event => {
        event.preventDefault();

    };

    registrationHendler = () => {


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
            <div className={classes.formRegistration}>
                <form onSubmit={this.submitHandler} >
                    <h1> Регистрация</h1>

                    {this.rendreInputs()}

                    {this.messageError ?
                        <span> ошибка </span>
                        :
                        null}

                    <Button
                        type="btn_reg"
                        onClick={this.registrationHendler}>
                        Зарегистрироваться
                    </Button>

                </form>
            </div>

        )
    }
};

export default FormRegistration;