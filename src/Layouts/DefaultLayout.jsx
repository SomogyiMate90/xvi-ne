import { Outlet, useNavigation } from "react-router-dom";
import PageHeader from "./PageHeader";
import PageFooter from "./PageFooter";
import { closeNavBarNotNavElement } from "../Functions/closeNavBar";
import { IsLogProvider } from "../Functions/contexts/isLogConTexr";
import { useContext, useState } from "react";
import Theme from "../Functions/themes/ThemeContext";
import LoadingTime from "../Components/LoadingTime";

const DefaultLayout = () => {
  const ThemeContext = useContext(Theme);
  const [theme, setTheme] = useState(ThemeContext);

  const navigation = useNavigation();
  const isNavigating = Boolean(navigation.location);

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
              <Outlet />
            </main>
         
          </div>
        </IsLogProvider>
        <PageFooter />
      </div>
    </Theme.Provider>
  );
};

export default DefaultLayout;
