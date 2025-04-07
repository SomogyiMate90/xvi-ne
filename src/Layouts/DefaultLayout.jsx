import { Outlet, useNavigation } from "react-router-dom";
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
        console.log('ismét lefutott a kérés');
        console.log(fireStoreContent);
      }
           
        fetchObj();
      }
      catch(e){
        alert(e)
      }

    }
  },[])


  return (
    <Theme.Provider value={theme}>
      <div
        id="page-defalult-layout"
        onClick={(event) => closeNavBarNotNavElement(event)}
        className={`page-defalult-layout ${theme}`}
      >
        <IsLogProvider>
          <PageHeader setTheme={setTheme} />
          <div className="px-md-1 px-lg-3">


          {isNavigating && <LoadingTime text={{title: 'Töltés'}}/>}

            <main className={`container-lg my-0 my-md-4 outlet-component ${isNavigating === true ? 'blur' : 'no-blur'}`}>
              <FireStoreContext.Provider  value={fireStoreDatas}>
                <Outlet />
              
              </FireStoreContext.Provider>              
       

            </main>
         
          </div>
        </IsLogProvider>
        <PageFooter />
      </div>
    </Theme.Provider>
  );
};

export default DefaultLayout;
