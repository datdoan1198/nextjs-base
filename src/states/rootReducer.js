import appReducer from './modules/app';
import authReducer from './modules/auth';
import userReducer from './modules/user';

const rootReducer = {
  app: appReducer,
  auth: authReducer,
  user: userReducer,
}

export default rootReducer
