import React from 'react'
import ReactDOM from 'react-dom/client'
import "./css/main.css"
import {Route, Routes, BrowserRouter} from "react-router-dom";
import Home from "./components/pages/Home.tsx";
import UseState from "./components/pages/UseState.tsx";
import {Paths} from "./Paths.tsx";
import LayoutWrapper from "./components/LayoutWrapper.tsx";

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <BrowserRouter>
            <LayoutWrapper>
                <Routes>
                    <Route path={Paths.HOME} element={<Home/>}/>
                    <Route path={Paths.hooks.USE_STATE} element={<UseState/>}/>
                </Routes>
            </LayoutWrapper>
        </BrowserRouter>
    </React.StrictMode>,
)
