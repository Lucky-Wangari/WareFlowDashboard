
'use client'
import {NextPage} from 'next'
import { MantineProvider } from '@mantine/core';
import { useState, useEffect } from 'react';
import Home from '../app/home/page';
import { useRouter } from 'next/navigation';
import { AppProps } from 'next/app';
import { DoubleNavbar } from './components/DoubleNavbar';

const Page:NextPage =()=> {
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
      router.push('/overview');
    }
  }, [redirect, router]);

  return (
    <MantineProvider>
      {redirect ? <DoubleNavbar /> : <Home />}
    </MantineProvider>
  );
}

export default Page;