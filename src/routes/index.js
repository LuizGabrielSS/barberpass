//Externas
import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

//screens
import NotFoundScreen from '../pages/notfound'
import HomeScreen from '../pages/home'
import LoginScreen from '../pages/login'
import PlansScreen from '../pages/plans'
import ContactScreen from '../pages/contact'

export default function RoutesFunction(){

    return(
        <BrowserRouter
        basename='/barberpass'
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
                <Route
                    path="/plans"
                    element={
                        <PlansScreen/>
                    }
                />
                <Route
                    path="/plans"
                    element={
                        <ContactScreen/>
                    }
                />
            </Routes>
        </BrowserRouter>
    )

}