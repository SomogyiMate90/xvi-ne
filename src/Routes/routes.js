import { createBrowserRouter } from "react-router-dom";
import DefaultLayout from "../Layouts/DefaultLayout";
import WelcomePage from "../Pages/home/WelcomePage";
import AboutUs from "../Pages/AboutUs/AboutUs";
import JoinUs from "../Pages/JoinUs/JoinUs";
import Events from "../Pages/Programok/Events";
import NotFound from "../Components/NotFound";
import Admin from "../Pages/Admin/Admin";
import Donations from "../Pages/Donations/Donations";
import Discounts from "../Pages/Kedvezmenyek/Discounts";
import DocumentsPage from "../Pages/Dokumentumok/DocumentsPage";
import GalleryPage from "../Pages/Gallery/GalleryPage";
import ArticlePage from "../Pages/Programok/elements/ArticlePage";
import GalleryEvent from "../Pages/Gallery/GalleryEvent";


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
                path: '/rólunk',
                element: <AboutUs/>
            },
            {
                path: '/programok',
                element: <Events/>,
            },
            {
                path: '/programok/*',
                element: <ArticlePage/>,
            },
            {
                path: '/csatlakozz',
                element: <JoinUs/>
            },
            {
                path: '/adományok',
                element: <Donations/>
            },
            {
                path: '/kedvezmények',
                element: <Discounts/>
            },
            {
                path: '/galéria',
                element: <GalleryPage/>
            },
            {
                path: '/galéria/*',
                element: <GalleryEvent/>
            },
            {
                path: '/dokumentumok',
                element: <DocumentsPage/>
            },
            {
                path: '/adminisztrátor',
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