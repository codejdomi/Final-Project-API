import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider,} from "react-router-dom";
import News from './page/News.jsx';
import Home from './page/Home.jsx';
import Weather from './page/Weather.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/Home',
    element: <Home />,
  },
  {
    path: '/News',
    element: <News />,
  },

  {
    path: '/Weather',
    element: <Weather />,
  },

]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
