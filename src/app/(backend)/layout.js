'use client'

import '../../assets/globals.scss';
import { Provider } from 'react-redux';
import store from "@/states/configureStore";

function RootLayout({ children }) {
  return (
    <Provider store={store}>
      <html lang="en">
        <body>
          {children}
        </body>
      </html>
    </Provider>
  )
}

export default RootLayout;
