import React from 'react'
import ReactDOM from 'react-dom/client'
import "./css/main.css"
import {Route, Routes, BrowserRouter} from "react-router-dom";
import Home from "./components/pages/Home.tsx";
import UseState from "./components/pages/hooks/UseState.tsx";
import {Paths} from "./Paths.tsx";
import LayoutWrapper from "./components/LayoutWrapper.tsx";
import UseCallback from "./components/pages/hooks/UseCallback.tsx";
import UseEffect from "./components/pages/hooks/UseEffect.tsx";
import ReactQuery from "./components/pages/libs/ReactQuery.tsx";
import { QueryClient, QueryClientProvider} from 'react-query'

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <QueryClientProvider client={queryClient}>
            <BrowserRouter>
                <LayoutWrapper>
                    <Routes>
                        <Route path={Paths.HOME} element={<Home/>}/>
                        <Route path={Paths.hooks.USE_STATE} element={<UseState/>}/>
                        <Route path={Paths.hooks.USE_CALLBACK} element={<UseCallback/>}/>
                        <Route path={Paths.hooks.USE_EFFECT} element={<UseEffect/>}/>
                        <Route path={Paths.libs.REACT_QUERY} element={<ReactQuery/>}/>
                    </Routes>
                </LayoutWrapper>
            </BrowserRouter>
        </QueryClientProvider>
    </React.StrictMode>
)
