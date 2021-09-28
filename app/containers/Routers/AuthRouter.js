import React from 'react'

import { Switch, Route } from 'react-router-dom';


import Auth from '../App/Auth';

const AuthRouter = () => {

    return (
        <Switch>
            <Auth />
        </Switch>
    )
}

export default AuthRouter
