import { createBrowserRouter } from "react-router-dom";
import DefaultLayout from "../Layouts/DefaultLayout";
import WelcomePage from "../Pages/home/WelcomePage";
import AboutUs from "../Pages/AboutUs/AboutUs";
import JoinUs from "../Pages/JoinUs/JoinUs";
import Events from "../Pages/Programok/Events";
import LoadingTime from "../Components/LoadingTime";
import getJsonFormPublic from "../Functions/api/getJsonFormPublic";
import NotFound from "../Components/NotFound";
import Admin from "../Pages/Admin/Admin";
import Donations from "../Pages/Donations/Donations";
import Discounts from "../Pages/Kedvezmenyek/Discounts";
import DocumentsPage from "../Pages/Dokumentumok/DocumentsPage";
import GalleryPage from "../Pages/Gallery/GalleryPage";
import ErrorElement from "../Components/ErrorElement";
import { getFIRESOTER_content } from "../Functions/firebase/getFIRESOTER_content";


const route = createBrowserRouter([
    {
        path: '/',
        element: <DefaultLayout/>,
        children :[
            {
                index: true,
                element: <WelcomePage/>
            },
            {
                path: '/Rólunk',
                element: <AboutUs/>
            },
            {
                path: '/Programok',
                element: <Events/>,
                // loader: ()=>getJsonFormPublic('/json/testArticles.json'),                
                loader: ()=>getFIRESOTER_content('programok'),                
                hydrateFallbackElement: <LoadingTime text={{title: 'Töltés', content: 'Lekéri a szervertől'}}/>,
                errorElement: <ErrorElement/>
            },
            {
                path: '/Csatlakozz',
                element: <JoinUs/>
            },
            {
                path: '/Adományok',
                element: <Donations/>
            },
            {
                path: '/Kedvezmények',
                element: <Discounts/>
            },
            {
                path: '/Galéria',
                element: <GalleryPage/>
            },
            {
                path: '/Dokumentumok',
                element: <DocumentsPage/>
            },
            {
                path: '/Adminisztrátor',
                element: <Admin/>
            },
            {
                path: '/*',
                element: <NotFound/>
            }
        ]
    }
])

export default route;