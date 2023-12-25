import {useRouter} from "next/navigation";
import {useState} from "react";
import _ from "lodash";
import {
  actionLogin
} from "@/actions/auth";

export default function Handle() {
  const router = useRouter();
  const [dataLogin, setDataLogin] = useState({
    email: '',
    password: ''
  })
  const [errorDataLogin, setErrorDataLogin] = useState({
    email: '',
    password: ''
  })
  const [loadingBtnConfirmLogin, setLoadingBtnConfirmLogin] = useState(false);

  const handleReload = () => {
    setErrorDataLogin({
      email: '',
      password: ''
    })
  }

  const handleChangeInput = (e, type) => {
    handleReload();
    let value = e.target.value;
    let data = _.cloneDeep(dataLogin);
    data[type] = value
    setDataLogin(data)
  }

  const handleConfirmLogin = async () => {
    setLoadingBtnConfirmLogin(true);
    let result = await actionLogin(dataLogin);
    if (!result.isError) {
      setLoadingBtnConfirmLogin(false);
      return router.push('/');
    } else {
      let status = result.statusCode;
      if (status === 400) {
        let newErrorDataLogin = _.cloneDeep(errorDataLogin);
        let errors = result.data.errors;
        newErrorDataLogin.email = _.get(errors,'email[0]','');
        newErrorDataLogin.password = _.get(errors,'password[0]','');
        setErrorDataLogin(newErrorDataLogin);
      }
      setLoadingBtnConfirmLogin(false);
    }
  }

  return {
    dataLogin, errorDataLogin, loadingBtnConfirmLogin,
    handleChangeInput, handleConfirmLogin
  }
}
