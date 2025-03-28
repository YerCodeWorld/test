import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { I18nProvider } from '@repo/i18n/src/index.ts';
import App from './App.tsx'
import { GoogleOAuthProvider } from '@react-oauth/google';
import '../../../packages/ui/src/styles/global.css';

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <GoogleOAuthProvider clientId="699222450834-visusoopfoclk7nvlqmrk17f3koh6nnl.apps.googleusercontent.com">
            <I18nProvider>
                <App />
            </I18nProvider>
        </GoogleOAuthProvider>
    </StrictMode>,
)