import '../styles/globals.css'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import Head from 'next/head';
import Script from 'next/script';


function MyApp({ Component, pageProps }) {
  return( 
  <>
        <Script
      rel="stylesheet"
      src="https://fonts.googleapis.com/icon?family=Material+Icons"
    />
    <Script
      rel="stylesheet"
      src="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
    />

    <Component {...pageProps} />
  </>)
}

export default MyApp
