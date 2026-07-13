import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import './styles/theme.css'; // root
import './styles/global.css'; // global
import './styles/stylestw.css'; // tailwindcss
import { App } from './App';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
