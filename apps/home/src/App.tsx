import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Toaster } from 'sonner';
import { ROUTE_CONFIG } from '@repo/router';
import MainLayout from "@repo/ui/components/layout/MainLayout";
import UnderConstruction from "@repo/ui/components/common/UnderConstruction";
// import './App.css';

// Login logic?
// Routes?

const HomePage = lazy(() => import('./pages/HomePage'));
// pages...

function App() {

    // AuthProvider?
    // ErrorBoundary?
    // TeachersProvider?

    const constructionRoutes = ROUTE_CONFIG.construction;

    return (
        <Router>

            <Toaster position="bottom-center" richColors></Toaster>

            {/* Suspense with loading spinner page */}
            <Suspense>
                <Routes>
                    <Route path="/" element={<MainLayout />}>
                        <Route index element={<HomePage />}></Route>
                    </Route>

                    <Route>
                        <Route path={constructionRoutes.basePath} element={<MainLayout />}>
                            {/*Unmaintainable shit. I thought i was a good idea*/}
                            <Route path={constructionRoutes.routes.blog.path} element={<UnderConstruction estimatedCompletion="May 2025"/>}></Route>
                            <Route path={constructionRoutes.routes.teachers.path} element={<UnderConstruction estimatedCompletion="A few days"/>}></Route>
                            <Route path={constructionRoutes.routes.match.path} element={<UnderConstruction estimatedCompletion="March 2026"/>}></Route>
                            <Route path={constructionRoutes.routes.games.path} element={<UnderConstruction estimatedCompletion="December 2025"/>}></Route>
                            <Route path={constructionRoutes.routes.courses.path} element={<UnderConstruction estimatedCompletion="June 2025"/>}></Route>
                            <Route path={constructionRoutes.routes.discussion.path} element={<UnderConstruction estimatedCompletion="May 2025"/>}></Route>
                        </Route>
                    </Route>
                </Routes>

            </Suspense>

        </Router>
    )
}

export default App
