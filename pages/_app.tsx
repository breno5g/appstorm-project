import type { AppProps } from 'next/app';
import { storeWrapper } from "../store";
import BasicLayout from '../styles/globals';

function App({ Component, pageProps }: AppProps) {
  return (
    <BasicLayout>
      <Component {...pageProps} />
    </BasicLayout>
  );
}

export default storeWrapper.withRedux(App);