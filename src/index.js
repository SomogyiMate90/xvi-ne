import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import route from './Routes/routes';
import './Css/entry.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/js/dist/collapse.js';

const root = ReactDOM.createRoot(document.getElementById('root'));

console.log(
   "%cFigyelem!%c Nem tárolunk személyes adatokat. Anonim statisztikai sütiket (Google Analytics) használunk.\nA “statementCookie” rögzíti döntését (elfogadás/elutasítás) mint feltétlenül szükséges sütit elfogadás esetén egy évig érvényes, visszavonhatja a lábléc “Süti kezelése” menüpontjában.  ",
   "background:rgba(255, 0, 0, 0.84); color: #e6ffe6; padding: 6px 10px; border-left: 6px solid #00b300; font-family: Arial, sans-serif; font-size: 14px; font-weight: bold; border-radius: 4px 0 0 4px;",
   "background:rgb(0, 99, 13); color: #cce0ff; padding: 6px 10px; font-style: normal; font-size: 14px; border-radius: 0 4px 4px 0;"
 );

root.render(
    
   // <React.StrictMode>
      <RouterProvider router={route}/>
   // </React.StrictMode> 

);
