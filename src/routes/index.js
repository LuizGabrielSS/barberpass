//Externas
import React from 'react'
import { BrowserRouter, Route, Routes,Navigate } from 'react-router-dom'

//redux
import store from '../redux'

//screens
import NotFoundScreen from '../pages/notfound'
import HomeScreen from '../pages/home'
import LoginScreen from '../pages/login'
import PlansScreen from '../pages/plans'
import ContactScreen from '../pages/contact'
import ConfigScreen from '../pages/config'
import PerfilScreen from '../pages/perfil'

function ProtectRoute({children}){

    const token = store.getState().auth.token

    if(token === null || token === undefined){
        return(
            <Navigate to="/login"/>
        )
    }
    else{
        return children
    }
    
}

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
                        <ProtectRoute>
                            <ConfigScreen/>
                        </ProtectRoute>
                    }
                />
                <Route
                    path="/perfil"
                    element={
                        <ProtectRoute>
                            <PerfilScreen/>
                        </ProtectRoute>
                    }
                />
            </Routes>
        </BrowserRouter>
    )

}