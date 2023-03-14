import { createRoot } from 'react-dom/client';
import { StrictMode } from 'react';
import AppWrapper from 'components/AppWrapper';

const container = document.getElementById('root') as HTMLElement;
const root = createRoot(container);

root.render(
  <StrictMode>
    <AppWrapper />
  </StrictMode>,
);
