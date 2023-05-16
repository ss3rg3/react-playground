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
import Zustand from "./components/pages/libs/Zustand.tsx";
import FormikExample from "./components/pages/libs/FormikExample.tsx";
import {ReactQueryDevtools} from "react-query/devtools";

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
                        <Route path={Paths.libs.ZUSTAND} element={<Zustand/>}/>
                        <Route path={Paths.libs.FORMIK} element={<FormikExample/>}/>
                    </Routes>
                </LayoutWrapper>
            </BrowserRouter>
            <ReactQueryDevtools initialIsOpen={false} position={"bottom-right"}/>
        </QueryClientProvider>
    </React.StrictMode>
)
