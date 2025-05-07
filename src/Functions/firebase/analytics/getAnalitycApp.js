import { getAnalytics } from "firebase/analytics";
import getFireBaseApp from "../getFireBaseApp";

let appAnalytic = null;

export default function runAnalytics() {

    if(!appAnalytic){
        appAnalytic = getAnalytics(getFireBaseApp())
    }

    return appAnalytic;
    
}