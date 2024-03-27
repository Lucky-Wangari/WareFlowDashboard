
'use client'

import { MantineProvider } from '@mantine/core';
import { useState, useEffect } from 'react';
import Home from '../app/home/page';
import { useRouter } from 'next/navigation';
import { AppProps } from 'next/app';
import { DoubleNavbar } from './components/DoubleNavbar';

function MyApp({ Component, pageProps }: AppProps) {
  const [redirect, setRedirect] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      setRedirect(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (redirect) {
      router.push('/dashboard');
    }
  }, [redirect, router]);

  return (
    <MantineProvider>
      {redirect ? <DoubleNavbar children={undefined} /> : <Home />}
    </MantineProvider>
  );
}

export default MyApp;
