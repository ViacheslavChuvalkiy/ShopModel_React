import React from 'react'
import {GET_ORDERS_USER, GET_USER,LOGOUT_USER,GET_DISCOUNT_USER,GET_CART_USER} from "../typesContext";

const handlers = {
    [GET_USER]: (state,{payload,isAdmin}) => ({...state, user:payload, isAdmin: isAdmin}),
    [GET_ORDERS_USER]: (state,{payload}) => ({...state, orders:payload}),
    [GET_CART_USER]: (state,{payload}) => ({...state, cart:payload}),
    [GET_DISCOUNT_USER]: (state,{payload}) => ({...state, discount:payload}),
    [LOGOUT_USER]: (state) => ({...state, user:'', isAdmin: false}),
    DEFAULT: state => state
};

export const UserReducer = (state, action) =>{

    const handler = handlers.type || handlers.DEFAULT;

    return handler(state,action);
};