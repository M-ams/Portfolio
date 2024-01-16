import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../styles.css"

import type { AppProps } from 'next/app'
 
export default function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
