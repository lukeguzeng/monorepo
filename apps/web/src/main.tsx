import './style.css';

import React from 'react';
import { Header } from '@repo/ui/header';
import { createRoot } from 'react-dom/client';

const rootContainer = document.getElementById('app')!;
const root = createRoot(rootContainer);

root.render(
  <React.StrictMode>
    <div>{Header({ title: 'Web' })}</div>
  </React.StrictMode>
);
