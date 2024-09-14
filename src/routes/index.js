//Externas
import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import NotFoundScreen from '../pages/notfound'
import HomeScreen from '../pages/home'
import LoginScreen from '../pages/login'

export default function RoutesFunction(){

    return(
        <BrowserRouter
        // basename='/portfolio'
        >
            <Routes>
                <Route
                    path="*"
                    element={
                        <NotFoundScreen/>
                    }
                />
                <Route
                    path="/"
                    element={
                        <HomeScreen/>
                    }
                />
                <Route
                    path="/login"
                    element={
                        <LoginScreen/>
                    }
                />
            </Routes>
        </BrowserRouter>
    )

}