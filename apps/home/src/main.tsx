import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { I18nProvider } from '@repo/i18n/src/index.ts';
import App from './App.tsx'

import '../../../packages/ui/src/styles/global.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
      <I18nProvider>
          <App />
      </I18nProvider>
  </StrictMode>,
)
