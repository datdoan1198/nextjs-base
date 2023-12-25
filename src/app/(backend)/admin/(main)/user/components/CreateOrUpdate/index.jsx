import {Button, Input} from "antd";
import Image from "next/image";
import IconWarning from "@/assets/images/icons/light/warning.svg";
import Handle from "./handle";

export default function CreateOrUpdate(props) {
  const {
    formData, errorFormData, loadingBtnConfirm,
    handleChangeInput, handleConfirmLogin
  } = Handle(props);

  return(
    <div>
      <div className={'input-wrap'}>
        <div className={'label-wrap'}>Name</div>
        <Input
          rootClassName={'general-input'}
          value={formData.name}
          size={'large'}
          onChange={(e) => handleChangeInput(e, 'name')}
          placeholder="Nhập họ và tên"
        />
        {
          errorFormData && errorFormData.name.length > 0 ?
            <div className={'error'}>
              <div className={'icon'}>
                <Image
                  src={IconWarning}
                  alt="Picture of the author"
                />
              </div>
              <div>{errorFormData.name}</div>
            </div> : ''
        }
      </div>

      <div className={'input-wrap'}>
        <div className={'label-wrap'}>Email</div>
        <Input
          rootClassName={'general-input'}
          value={formData.email}
          size={'large'}
          onChange={(e) => handleChangeInput(e, 'email')}
          placeholder="Nhập email"
        />
        {
          errorFormData && errorFormData.email.length > 0 ?
            <div className={'error'}>
              <div className={'icon'}>
                <Image
                  src={IconWarning}
                  alt="Picture of the author"
                />
              </div>
              <div>{errorFormData.email}</div>
            </div> : ''
        }
      </div>

      <div className={'input-wrap'}>
        <div className={'label-wrap'}>Password</div>
        <Input.Password
          rootClassName={'general-input'}
          value={formData.password}
          size={'large'}
          onChange={(e) => handleChangeInput(e, 'password')}
          placeholder="Nhập mật khẩu"
        />
        {
          errorFormData && errorFormData.password.length > 0 ?
            <div className={'error'}>
              <div className={'icon'}>
                <Image
                  src={IconWarning}
                  alt="Picture of the author"
                />
              </div>
              <div>{errorFormData.password}</div>
            </div> : ''
        }
      </div>

      <div className={'input-wrap'}>
        <div className={'label-wrap'}>Phone</div>
        <Input
          rootClassName={'general-input'}
          value={formData.phone}
          size={'large'}
          onChange={(e) => handleChangeInput(e, 'phone')}
          placeholder="Nhập số điện thoại"
        />
        {
          errorFormData && errorFormData.phone.length > 0 ?
            <div className={'error'}>
              <div className={'icon'}>
                <Image
                  src={IconWarning}
                  alt="Picture of the author"
                />
              </div>
              <div>{errorFormData.phone}</div>
            </div> : ''
        }
      </div>

      <div className={'flex justify-end'}>
        <Button
          loading={loadingBtnConfirm}
          className={'general-button bg-blue-500'}
          size={'large'}
          onClick={() => handleConfirmLogin()}
        >Thêm mới
        </Button>
      </div>
    </div>
  )
}
