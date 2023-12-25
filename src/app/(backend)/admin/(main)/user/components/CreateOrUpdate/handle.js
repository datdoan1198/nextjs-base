import {useEffect, useState} from "react";
import _ from "lodash";
import {createEmployee} from "@/api/employ";
import {getHeaders} from "@/utils/cookie/client";
import {useSelector} from "react-redux";

export default function Handle(props) {
  const {closeModal, handleGetListEmployee} = props;
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    phone: '',
    status: 1
  });
  const [errorFormData, setErrorFormData] = useState({
    name: '',
    email: '',
    password: '',
    phone: ''
  });
  const [loadingBtnConfirm, setLoadingBtnConfirm] = useState(false);
  const visibleModalCreateOrUpdate = useSelector(state => state.user.visibleModalCreateOrUpdate);

  useEffect(() => {
    handleReload();
  }, [visibleModalCreateOrUpdate])

  const handleReload = () => {
    setErrorFormData({
      name: '',
      email: '',
      password: '',
      phone: ''
    });
  }

  const handleChangeInput = (e, type) => {
    handleReload()
    let value = e.target.value;
    let data = _.cloneDeep(formData);
    data[type] = value;
    setFormData(data);
  }

  const handleConfirmLogin = () => {
    setLoadingBtnConfirm(true);
    createEmployee(formData, getHeaders()).then((res) => {
      closeModal();
      handleGetListEmployee();
    }).catch((error) => {
      let status = error.response.status;
      if (status === 400) {
        let newErrorLogin = _.cloneDeep(errorFormData);
        let errors = error.response.data.errors;
        newErrorLogin.name = _.get(errors,'name[0]','');
        newErrorLogin.email = _.get(errors,'email[0]','');
        newErrorLogin.phone = _.get(errors,'phone[0]','');
        newErrorLogin.password = _.get(errors,'password[0]','');
        setErrorFormData(newErrorLogin);
      }
    }).finally(() => {
      setLoadingBtnConfirm(false);
    })
  }

  return {
    formData, errorFormData, loadingBtnConfirm,
    handleChangeInput, handleConfirmLogin
  }
}
