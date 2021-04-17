import React,{useReducer} from 'react'
import axios from 'axios'
import {UsersContext} from '../usersContext/usersContext'
import {UserReducer} from '../usersContext/userReducer';

import {GET_USER,GET_ORDERS_USER,GET_DISCOUNT_USER,GET_CART_USER,LOGOUT_USER} from '../typesContext';

export const UserState = ({children}) => {

    const initialState = {
     user: '',
     isAdmin: false,
     discount: 0,
     orders: [],
     cart:[]
    };

    const [state, dispatch] = useReducer(UserReducer,initialState);

    const getUser = async name => {

        // const response = await axios.get(
        //     ``,
        //
        // );

        dispatch({
            type:GET_USER,
            payload: []//response.data
        })
    };

    const getOrders = async name => {

        // const response = await axios.get(
        //     ``,
        //
        // );

        dispatch({
            type:GET_ORDERS_USER,
            payload: []//response.data
        })

    };

    const getCart = async name => {

        // const response = await axios.get(
        //     ``,
        //
        // );

        dispatch({
            type:GET_CART_USER,
            payload: []//response.data
        })

    };

    const getDiscount = async name => {

        // const response = await axios.get(
        //     ``,
        //
        // );

        dispatch({
            type:GET_DISCOUNT_USER,
            payload: []//response.data
        })

    };

    const logoutUser = async name => {

        dispatch({
            type:LOGOUT_USER
        })

    };

    const {user,isAdmin,orders,cart,discount} = state;

    return(
    <UsersContext.Provider value = {{
        getUser,getOrders,logoutUser,getCart,getDiscount,
        user,isAdmin,orders,cart,discount
    }}>
        {children}
    </UsersContext.Provider>

    )
};