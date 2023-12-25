'use client'

import {handleCreateEmployee, handleDemo} from "@/actions/formAction";
import {Button, Input} from "antd";
import {useState} from "react";
import _ from 'lodash';

export default function Form() {
  const [employee, setEmployee] = useState({
    name: '',
    email: '',
    password: '',
    phone: '',
    status: 1
  })
  const [isLoadingBtnCreateEmployee, setIsLoadingBtnCreateEmployee] = useState(false);

  const handleChangeInput = (e, type) => {
    let value = e.target.value;
    let data = _.cloneDeep(employee);
    data[type] = value;
    setEmployee(data);
  }

  const handleSubmitForm = async () => {
    setIsLoadingBtnCreateEmployee(true);
    let result = await handleCreateEmployee(employee);
    setIsLoadingBtnCreateEmployee(false);
    if (result.isError) {
    } else {
      setEmployee({
        name: '',
        email: '',
        password: '',
        phone: '',
        status: 1
      });
    }
  }

  const handleConfirmDemo = async () => {
    await handleDemo();
  }

  return(
    <div>
      <div className={'flex justify-start items-start flex-col'}>
        <label htmlFor="">Name</label>
        <Input
          size={"lage"}
          type="text"
          value={employee.name}
          onChange={(e) => handleChangeInput(e, 'name')}
          className={'px-4 py-2 mb-3 w-1/2'}
        />
      </div>

      <div className={'flex justify-start items-start flex-col'}>
        <label htmlFor="">Email</label>
        <Input
          type="text"
          value={employee.email}
          size={"lage"}
          onChange={(e) => handleChangeInput(e, 'email')}
          className={'px-4 py-2 mb-3 w-1/2'}
        />
      </div>

      <div className={'flex justify-start items-start flex-col'}>
        <label htmlFor="">Password</label>
        <Input
          type="password"
          value={employee.password}
          size={"lage"}
          onChange={(e) => handleChangeInput(e, 'password')}
          className={'px-4 py-2 mb-3 w-1/2'}
        />
      </div>

      <div className={'flex justify-start items-start flex-col'}>
        <label htmlFor="">Phone</label>
        <Input
          type="text"
          value={employee.phone}
          size={"lage"}
          onChange={(e) => handleChangeInput(e, 'phone')}
          className={'px-4 py-2 mb-3 w-1/2'}
        />
      </div>
      <Button
        loading={isLoadingBtnCreateEmployee}
        onClick={() => handleSubmitForm()}
      >Create
      </Button>
      <Button onClick={() => handleConfirmDemo()}>sdsdsd</Button>
    </div>
  )
}
