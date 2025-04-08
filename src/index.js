import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import route from './Routes/routes';
import './Css/entry.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import 'animate.css';



const root = ReactDOM.createRoot(document.getElementById('root'));



root.render(
  
  
   // <React.StrictMode>
      <RouterProvider router={route}/>
   // </React.StrictMode> 

);
