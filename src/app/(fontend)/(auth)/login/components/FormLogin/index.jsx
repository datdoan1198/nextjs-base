'use client'

import {Button, Input} from "antd";
import Image from "next/image";
import IconWarning from "@/assets/images/icons/light/warning.svg";
import Handle from "./handle";

export default function FormLogin() {
  const {
    dataLogin, errorDataLogin, loadingBtnConfirmLogin,
    handleChangeInput, handleConfirmLogin
  } = Handle();

  return (
    <>
      <div className={'input-wrap'}>
        <div className={'label-wrap'}>Email</div>
        <Input
          rootClassName={'general-input'}
          value={dataLogin.email}
          size={'large'}
          onChange={(e) => handleChangeInput(e, 'email')}
          placeholder="Nhập email"
        />
        {
          errorDataLogin && errorDataLogin.email.length > 0 ?
            <span className={'error'}>
              <div className={'icon'}>
                <Image
                  width={14} height='auto'
                  src={IconWarning}
                  alt="Picture of the author"
                />
              </div>
              {errorDataLogin.email}
            </span> : ''
        }
      </div>

      <div className={'input-wrap'}>
        <div className={'label-wrap'}>Password</div>
        <Input.Password
          rootClassName={'general-input'}
          value={dataLogin.password}
          size={'large'}
          onChange={(e) => handleChangeInput(e, 'password')}
          placeholder="Nhập mật khẩu"
        />
        {
          errorDataLogin && errorDataLogin.password.length > 0 ?
            <div className={'error'}>
              <div className={'icon'}>
                <Image
                  src={IconWarning}
                  alt="Picture of the author"
                />
              </div>
              <div>{errorDataLogin.password}</div>
            </div> : ''
        }
      </div>

      <div className={'flex justify-center'}>
        <Button
          loading={loadingBtnConfirmLogin}
          className={'bg-blue-600'}
          type="primary"
          size={'large'}
          onClick={() => handleConfirmLogin()}
        >
          Đăng nhập
        </Button>
      </div>
    </>
  )
}
