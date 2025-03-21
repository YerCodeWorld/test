import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Toaster } from 'sonner';
import MainLayout from "@repo/ui/components/layout/MainLayout";
// import './App.css';

// Login logic?
// Routes?

const HomePage = lazy(() => import('./pages/HomePage'));
// pages...

function App() {

    // AuthProvider?
    // ErrorBoundary?
    // TeachersProvider?

    return (
        <Router>

            <Toaster position="bottom-center" richColors></Toaster>

            {/* Suspense with loading spinner page */}
            <Suspense>
                <Routes>
                    <Route path="/" element={<MainLayout />}>
                        <Route index element={<HomePage />}></Route>
                    </Route>
                </Routes>
            </Suspense>

        </Router>
    )
}

export default App
