import {useRouter} from "next/navigation";
import {useState} from "react";
import _ from "lodash";
import {getMe, handleLogin} from "@/api/auth";
import {getHeaders, removeAuthToken, setAuthToken} from "@/utils/cookie/client";
import {handleCheckValidateConfirm} from "@/utils/helper";
import {isValidate} from "@/utils/validates/auth/login";
import {useDispatch} from "react-redux";
import {setAuth} from "@/states/modules/auth";

export default function Handle() {
  const dispatch = useDispatch();
  const router = useRouter();
  const [login, setLogin] = useState({
    email: '',
    password: ''
  })
  const [errorLogin, setErrorLogin] = useState({
    email: '',
    password: ''
  })
  const [loadingBtnConfirmLogin, setLoadingBtnConfirmLogin] = useState(false);

  const handleReload = () => {
    setErrorLogin({
      email: '',
      password: ''
    });
  }

  const handleKeyDown = (event) => {
    if (errorLogin.email.length !== 0 || errorLogin.password.length !== 0 ) {
      handleReload()
    }
    if (event.key === 'Enter') {
      handleConfirmLogin()
    }
  }

  const handleChangeInput = (e, type) => {
    handleReload()
    let value = e.target.value;
    let data = _.cloneDeep(login);
    data[type] = value;
    setLogin(data);
  }

  const handleConfirmLogin = () => {
    let validate = handleCheckValidateConfirm(login, errorLogin, isValidate);
    setErrorLogin(validate.dataError);
    if (!validate.isError) {
      setLoadingBtnConfirmLogin(true);
      handleLogin(login).then(res => {
        let token = res.data.data.access_token;
        setAuthToken(token);
        handleGetMe();
        return router.push('/admin');
      }).catch(error => {
        let status = error.response.status;
        if (status === 400) {
          let newErrorLogin = _.cloneDeep(errorLogin);
          let errors = error.response.data.errors;
          newErrorLogin.email = _.get(errors,'email[0]','');
          newErrorLogin.password = _.get(errors,'password[0]','');
          setErrorLogin(newErrorLogin);
        }
      }).finally(() => {
        setLoadingBtnConfirmLogin(false);
      })
    }
  }

  const handleGetMe = () => {
    getMe({}, getHeaders()).then((res) => {
      dispatch(setAuth({
        isAuth: true,
        authUser: res.data.data,
      }))
    }).catch((error) => {
      dispatch(setAuth({
        isAuth: false,
        authUser: {},
      }))
    })
  }

  return {
    login, errorLogin, loadingBtnConfirmLogin,
    handleChangeInput, handleKeyDown, handleConfirmLogin
  }
}
