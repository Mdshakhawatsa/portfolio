import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import App from './App.jsx'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
// import Root from './components/Root/Root';
// import Home from './Home/Home';
import About from './components/ABOUT/About';
import Error from './components/ERRORPAGE/Error';
import Skills from './components/SKILLS/Skills';
import Projects from './components/PROJECTS/Projects';
import Contact from './components/CONTACT/Contact';
import Root from './components/ROOT/Root';
import Banner from './components/BANNER/Banner';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Banner />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/skill",
        element: <Skills />,
      },
      {
        path: "/projects",
        element: <Projects />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
    ],
  },
]);



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
