import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App';
import MothersDay from './MothersDay';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/mom',
    element: <MothersDay />,
  },
]);

createRoot(document.getElementById('root')!).render(
  <RouterProvider router={router} />
);
