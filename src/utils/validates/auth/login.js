import {isValidEmail, isValidPassword} from "@/utils/helper";
import _ from "lodash";

export const isValidate = (data, type, errors) => {
  let error = false
  let dataError = _.cloneDeep(errors);

  switch (type) {
    case 'email':
      if (!data.email || data.email.length === 0) {
        dataError.email = 'Email không được để trống!';
        error = true;
      } else if (!isValidEmail(data.email)) {
        dataError.email = 'Email không đúng định dạng';
        error = true;
      } else if (data.email.length > 200) {
        dataError.email = 'Maximum number of characters allowed: 200';
        error = true;
      } else {
        dataError.email = '';
      }
      break;
    case 'password':
      if (data.password.length === 0) {
        dataError.password = 'Mật khẩu không được để trống!';
        error = true;
      } else if (!isValidPassword(data.password)) {
        dataError.password = "Mật khẩu phải bao gồm có ít nhất 6 ký tự, chữ hoa, chữ thường, số và ký tự đặc biệt!"
        error = true
      } else {
        dataError.password = '';
      }
      break;
  }

  return {
    isError: error,
    error: dataError,
  }
}
