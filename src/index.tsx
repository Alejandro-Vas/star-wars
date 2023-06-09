import { createRoot } from 'react-dom/client';
import { StrictMode } from 'react';
import App from 'components/App';

const container = document.getElementById('root') as HTMLElement;
const root = createRoot(container);

root.render(
  <StrictMode>
    <App />
  </StrictMode>,
);
