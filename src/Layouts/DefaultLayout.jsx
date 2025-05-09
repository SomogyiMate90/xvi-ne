import { Outlet, useLocation, useNavigation } from "react-router-dom";
import PageHeader from "./PageHeader";
import PageFooter from "./PageFooter";
import { closeNavBarNotNavElement } from "../Functions/closeNavBar";
import { IsLogProvider } from "../Functions/contexts/isLogConTexr";
import { useContext, useEffect, useState } from "react";
import Theme from "../Functions/themes/ThemeContext";
import LoadingTime from "../Components/LoadingTime";
import FireStoreContext from "../Functions/contexts/fireSroreContext";
import { getFIRESOTER_content } from "../Functions/firebase/getFIRESOTER_content";
import { useImmer } from "use-immer";
import Tamogatok from "../Components/Tamogatok";


// Analitika


import runAnalytics from "../Functions/firebase/analytics/getAnalitycApp";
import { logEvent } from "firebase/analytics";


const DefaultLayout = () => {
  const ThemeContext = useContext(Theme);
  const [theme, setTheme] = useState(ThemeContext);
 
  const navigation = useNavigation();
  const isNavigating = Boolean(navigation.location);

  const FireStoreData = useContext(FireStoreContext);
  const [fireStoreDatas, setFireStoreDate] = useImmer([]);

  useEffect(()=>{

   
    if(!FireStoreData){
      try{
        const fetchObj = async () =>{
        const fireStoreContent = await getFIRESOTER_content();
        setFireStoreDate(fireStoreContent)
      }
           
        fetchObj();
      }
      catch(e){
        alert(e)
      }

    }
  },[])


  // Analitika

  const location = useLocation()
  const analytics = typeof window !== 'undefined'
    ? runAnalytics()
    : null

  useEffect(() => {
    if (analytics) {
      logEvent(analytics, 'page_view', {
        page_path:   location.pathname + location.search,
        page_title:  document.title,
        page_location: window.location.href
      })
    }
  }, [location, analytics])


  return (
    <Theme.Provider value={theme}>
      <div
        id="page-defalult-layout"
        onClick={(event) => closeNavBarNotNavElement(event)}
        className={`page-defalult-layout ${theme}`}
      >
        <IsLogProvider>
          <PageHeader setTheme={setTheme} />
          <div className="px-md-2">  

          {isNavigating && <LoadingTime text={{title: 'Töltés'}}/>}

              <FireStoreContext.Provider  value={fireStoreDatas}>
            <main className={`container-xxl my-xxl my-0 my-md-4 outlet-component ${isNavigating === true ? 'blur' : 'no-blur'}`}>
                <Outlet />
       

            </main>
                <Tamogatok/>
              </FireStoreContext.Provider>              
         
          </div>
        </IsLogProvider>
        <PageFooter />
      </div>
    </Theme.Provider>
  );
};

export default DefaultLayout;
