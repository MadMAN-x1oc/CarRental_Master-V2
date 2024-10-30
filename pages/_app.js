import { ClerkProvider } from '@clerk/nextjs';
import '../styles/globals.css'
import "mapbox-gl/dist/mapbox-gl.css"
import Head from 'next/head';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <ClerkProvider>
      <Component {...pageProps} />
      </ClerkProvider>
  </>
  );
}

export default MyApp
