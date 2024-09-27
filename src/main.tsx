import React from 'react';
import { App } from './App';
import ReactDOM from 'react-dom/client';
import { TemaProvider } from './contexts/TemaContext';


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <TemaProvider>
            <App />
        </TemaProvider>
    </React.StrictMode>
);
