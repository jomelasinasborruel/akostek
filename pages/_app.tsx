import type { AppProps } from "next/app";
import { NextPageWithLayout } from "next";
import "../src/styles/globals.css";
import "public/fonts/fonts.css";

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

export default function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page);

  return getLayout(<Component {...pageProps} />);
}
