import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import route from './Routes/routes';
import './Css/entry.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/js/dist/collapse.js';

/*
import 'bootstrap/dist/js/bootstrap.bundle.min.js'

//  csak a szükséges filok vannak immportálva

import 'bootstrap/js/dist/modal.js'; // Default Modal komponshez vagy formhoz

import 'bootstrap/js/dist/button.js'; // Ez valószínleg sehova nem kerül felhasználásra

*/








const root = ReactDOM.createRoot(document.getElementById('root'));



root.render(
  
  
   <React.StrictMode>
      <RouterProvider router={route}/>
   </React.StrictMode> 

);
