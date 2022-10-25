import type { AppProps } from 'next/app';
import { storeWrapper } from "../store";
import BasicLayout from '../styles/globals';
import { ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

function App({ Component, pageProps }: AppProps) {
  return (
    <BasicLayout>
      <Component {...pageProps} />
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        draggable
        pauseOnFocusLoss={false}
        pauseOnHover={false}
        theme="colored"
      />
    </BasicLayout>
  );
}

export default storeWrapper.withRedux(App);