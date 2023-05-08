import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Inter } from "next/font/google";
import { Provider } from "react-redux";
import { PersistGate } from 'redux-persist/integration/react'
import store from "../../store";
import { persistStore } from "redux-persist";


const inter = Inter({ subsets: ["latin"] });

let persistor= persistStore(store);

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={inter.className}>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>

        <Component {...pageProps} />

        </PersistGate>
      </Provider>
    </main>
  );
}
