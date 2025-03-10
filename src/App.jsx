import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import AppRoutes from './utils/AppRoutes';
import Footer from './components/footer';

function App() {

  const router = createBrowserRouter(AppRoutes);

  return (
    <>
      <RouterProvider router={router} />
      <Footer />
    </>
  );
}

export default App;
