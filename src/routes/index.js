//Externas
import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

//screens
import NotFoundScreen from '../pages/notfound'
import HomeScreen from '../pages/home'
import LoginScreen from '../pages/login'
import PlansScreen from '../pages/plans'
import ContactScreen from '../pages/contact'
import ConfigScreen from '../pages/config'
import PerfilScreen from '../pages/perfil'

export default function RoutesFunction(){

    return(
        <BrowserRouter
        basename={process.env.REACT_APP_URL}
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
                    path="/contact"
                    element={
                        <ContactScreen/>
                    }
                />
                <Route
                    path="/config"
                    element={
                        <ConfigScreen/>
                    }
                />
                <Route
                    path="/perfil"
                    element={
                        <PerfilScreen/>
                    }
                />
            </Routes>
        </BrowserRouter>
    )

}