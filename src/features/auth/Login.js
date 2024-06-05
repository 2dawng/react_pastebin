import React, { useRef } from "react";
import axios from '../api/axios';




const user = () => {
    axios('/api/task/user').then(res => {
        console.log(res.data);
    })
}

const login = () => {
    axios.post('/api/auth', {
        email: "dn1@a.a",
        password: "123"
    }).then(res => {
        console.log(res.data);
        localStorage.setItem('token', res.data.access_token);
    }).catch(error => {
        console.error(error);
    });
}



export const Login = () => {
    return (
        <>
            <h1>Login</h1>
            <button onClick={login}>Login</button>
            <button onClick={user}>User</button>
        </>
    );
};


