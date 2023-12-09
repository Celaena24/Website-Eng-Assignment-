import React from 'react';
import App from './App';

import Home from './pages/Home';
import Survey from './pages/Survey';
import Sophie from './pages/Sophie';
import Essay from './pages/Essay'


const routes = [
  {
    path: '/',
    element: <App />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/survey', element: <Survey /> },
      { path: '/sophie', element: <Sophie /> },
      { path: '/essay', element: <Essay /> },
    ]
  },
];

export default routes;
