import getFireBaseApp from "../getFireBaseApp";
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'

export default async function login(obj) {
    
    const fireAuth = getAuth(getFireBaseApp());
    try{
        const resp = await signInWithEmailAndPassword(fireAuth,obj.email,obj.password);
        return resp       
    }

    catch(e){
        const errorMessage = e.code === 'auth/invalid-credential' ? 'Hibás felhasználónév és/vagy jelszó' : 'Ismeretlen hiba';
        return errorMessage
    }
}