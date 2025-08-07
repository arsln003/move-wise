import React from 'react';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import RootLayout from './layout/RootLayout';
import Transport from './features/Transport';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Favorites from './pages/Favorites';
function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<RootLayout />}>
        <Route index element={<Transport />} />
        <Route path='login' element={<Login />} />
        <Route path='signup' element={<Signup />} />
        <Route path='favorites' element={<Favorites />} />
      </Route>
    )
  );

  return (
    <RouterProvider router={router} />
  );
}

export default App;
