import { useImmer } from "use-immer";
import { useIsLog } from "../../../Functions/contexts/isLogConTexr";
import login from "../../../Functions/firebase/auth/login";
import getSteriledText from "../../../Functions/Utils/getSteriledText";
import { useState } from "react";

const LoginForm = () => {
  const {  setIsLog } = useIsLog();

  const [renderText, setRenderText] = useState('Ne ossza meg e-mail címét és jelszavát illetéktelenekkel.')

  const [emailPw, setEmailPw] = useImmer({ email: null, password: null });



  /**
   * 
   * @param {Event} event 
   */
  const handleLogin = async (event) => {
    event.preventDefault();
    const resp = await login(emailPw);
    if(resp.operationType === "signIn"){
      setIsLog(true);
    }
    else{
      
      setRenderText(resp);
      alert('Sikertelen bejelentkezés')
    }
  };

  return (
    <form onSubmit={(event)=>handleLogin(event)}>
      <div className="mb-3">
        <h2 className="text-center">Bejelentkezés</h2>
        <label htmlFor="exampleInputEmail1" className="form-label">
          Email cím
        </label>
        <input
          onChange={(event) =>
            setEmailPw((draft) => {
              draft.email = getSteriledText(event.target.value);
            })
          }
          type="email"
          className="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          required
        />
      </div>
      <div className="mb-3">
        <label htmlFor="exampleInputPassword1" className="form-label">
          Jelszó
        </label>
        <input
          onChange={(event) =>
            setEmailPw((draft) => {
              draft.password = getSteriledText(event.target.value);
            })
          }
          type="password"
          className="form-control"
          id="exampleInputPassword1"
          required
        />
      </div>
      <div id="emailHelp" className="form-text text-danger">
        {renderText}
      </div>
      <div className="d-flex justify-content-end">
        <button
          type="submit"
          className="btn btn-primary"
        >
          Bejelentkezés
        </button>
      </div>
    </form>
  );
};
export default LoginForm;
