import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { Toaster } from 'sonner';

import { ROUTE_CONFIG } from '@repo/router';

// Custom components
import MainLayout from "@repo/ui/components/layout/MainLayout";
import UnderConstruction from "@repo/ui/components/common/UnderConstruction";
import LoginPage from '@repo/ui/components/common/Login';
// import LoadingSpinner from "@repo/ui/components/common/LoadingSpinner";

// import './App.css';

// Login logic?
// Routes?  DONE

const HomePage = lazy(() => import('./pages/HomePage'));
// pages...

function App() {

    // AuthProvider?
    // ErrorBoundary?
    // TeachersProvider?

    const constRoutes = (page: string) => ROUTE_CONFIG.construction.routes[page].path;
    const homeRoutes = (page: string) => ROUTE_CONFIG.home.routes[page].path;

    return (
        <Router>

            <Toaster position="bottom-center" richColors></Toaster>

            {/* Suspense with loading spinner page */}
            <Suspense>
                <Routes>
                    <Route path="/" element={<MainLayout />}>
                        <Route index element={<HomePage />}></Route>
                        {/*This is NOT working for some reason, check the Login component*/}
                        <Route path={homeRoutes('login')} element={<LoginPage />}></Route>

                        {/*Protected routes EXAMPLE*s/}

                        {/*As of now the construction pages are going to be part of the home page main layout. NO need to reload*/}
                        <Route path={ROUTE_CONFIG.construction.basePath}>
                            <Route path={constRoutes("blog")} element={<UnderConstruction estimatedCompletion="May 2025"/>}></Route>
                            <Route path={constRoutes("teachers")} element={<UnderConstruction estimatedCompletion="A few days"/>}></Route>
                            <Route path={constRoutes("match")} element={<UnderConstruction estimatedCompletion="March 2026"/>}></Route>
                            <Route path={constRoutes("games")} element={<UnderConstruction estimatedCompletion="December 2025"/>}></Route>
                            <Route path={constRoutes("courses")} element={<UnderConstruction estimatedCompletion="June 2025"/>}></Route>
                            <Route path={constRoutes("discussion")} element={<UnderConstruction estimatedCompletion="May 2025"/>}></Route>
                        </Route>

                    </Route>
                </Routes>

            </Suspense>

        </Router>
    )
}

export default App
