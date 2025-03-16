//Externas
import React,{ useEffect, useState } from 'react'
import { BrowserRouter, Route, Routes,Navigate } from 'react-router-dom'

//redux
import { useSelector } from 'react-redux';

//Recovery
import { recovery } from '../services/keep_token'

//screens
import NotFoundScreen from '../pages/notfound'
import HomeScreen from '../pages/home'
import LoginScreen from '../pages/login'
import PlansScreen from '../pages/plans'
import ContactScreen from '../pages/contact'
import ConfigScreen from '../pages/config'
import PerfilScreen from '../pages/perfil'
import MapScreen from '../pages/map'
import ProviderScreen from '../pages/provider'

function ProtectRoute({children}) {
    recovery();
    const token = useSelector((state) => state.auth.token);
    const [currentToken, setCurrentToken] = useState(token);

    useEffect(() => {
        setCurrentToken(token);
    }, [token]);

    if(currentToken === null || currentToken === undefined){
        return(
            <Navigate to="/login"/>
        );
    } else {
        return children;
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
                <Route
                    path="/map"
                    element={
                        // <ProtectRoute>
                            <MapScreen/>
                        // </ProtectRoute>
                    }
                />
                <Route
                    path="/provider/:id"
                    element={
                        // <ProtectRoute>
                            <ProviderScreen/>
                        // </ProtectRoute>
                    }
                />
            </Routes>
        </BrowserRouter>
    )

}