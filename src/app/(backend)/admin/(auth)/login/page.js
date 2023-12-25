'use client'

import {Button, Input} from "antd";
import Handle from './handle';
import styles from './styles.module.scss';
import BannerLogin from "@/assets/images/auth/banner-login.png";
import IconWarning from "@/assets/images/icons/light/warning.svg";
import Image from "next/image";

export default function Login() {
  const {
    login, errorLogin, loadingBtnConfirmLogin,
    handleChangeInput, handleKeyDown, handleConfirmLogin
  } = Handle();

  return (
    <div className={`${styles.loginWrap}`}>
      <div className={styles.bannerWrap}>
        <Image
          className={styles.bgImageBannerWrap}
          src={BannerLogin}
          alt="Picture of the author"
        />
        <div className={styles.titleWrap}>
          Welcome Login
        </div>
      </div>

      <div className={styles.mainWrap}>
        <div className={'input-wrap'}>
          <div className={'label-wrap'}>Email</div>
          <Input
            rootClassName={'general-input'}
            value={login.email}
            size={'large'}
            onChange={(e) => handleChangeInput(e, 'email')}
            onKeyDown={(e) => handleKeyDown(e)}
            placeholder="Nhập email"
          />
          {
            errorLogin && errorLogin.email.length > 0 ?
            <span className={'error'}>
              <div className={'icon'}>
                <Image
                  width={14} height='auto'
                  src={IconWarning}
                  alt="Picture of the author"
                />
              </div>
                  {errorLogin.email}
            </span> : ''
          }
        </div>

        <div className={'input-wrap'}>
          <div className={'label-wrap'}>Password</div>
          <Input.Password
            rootClassName={'general-input'}
            value={login.password}
            size={'large'}
            onChange={(e) => handleChangeInput(e, 'password')}
            onKeyDown={(e) => handleKeyDown(e)}
            placeholder="Nhập mật khẩu"
          />
          {
            errorLogin && errorLogin.password.length > 0 ?
            <div className={'error'}>
              <div className={'icon'}>
                <Image
                  src={IconWarning}
                  alt="Picture of the author"
                />
              </div>
              <div>{errorLogin.password}</div>
            </div> : ''
          }
        </div>

        <div className={'flex justify-center'}>
          <Button
            loading={loadingBtnConfirmLogin}
            onClick={() => handleConfirmLogin()}
            className={'general-button bg-blue-500'}
            size={'large'}
          >
            Đăng nhập
          </Button>
        </div>
      </div>
    </div>
  )
}
