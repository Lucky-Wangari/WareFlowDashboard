'use client'
import React, { useState } from 'react';
import { MantineProvider, Title, Tooltip, UnstyledButton } from '@mantine/core';
import { IconHome2, IconGauge, IconDeviceDesktopAnalytics } from '@tabler/icons-react'; 
import Link from 'next/link';

const mainLinksMockdata = [
  { icon: IconHome2, label: 'Home' },
  { icon: IconGauge, label: 'Dashboard' },
  { icon: IconDeviceDesktopAnalytics, label: 'Analytics' },
];

const linksMockdata = [
  { label: 'Dashboard', href: '/overview' },
  { label: 'Account', href: '/tablescrollarea' }, 
  { label: 'Orders', href: '/staticnavbar' },
  { label: 'Clients', href: '/clients' },
];

export function DoubleNavbar({children  }) {
  const [active, setActive] = useState('Home');

  const mainLinks = mainLinksMockdata.map((link) => (
    <Tooltip
      label={link.label}
      position="right"
      withArrow
      transitionProps={{ duration: 0 }}
      key={link.label}
    >
      <UnstyledButton
        onClick={() => setActive(link.label)}
        className="w-11 h-11 rounded-md flex items-center justify-center"
        style={{ width: '2.75rem', height: '2.75rem' }}
        data-active={link.label === active || undefined}
      >
        {React.createElement(link.icon, { strokeWidth: 1.5, width: '1.375rem', height: '1.375rem' })}
      </UnstyledButton>
    </Tooltip>
  ));

  const links = linksMockdata.map((link) => (
    <Link href={link.href} key={link.label}>
      <div
        className="block text-gray-700 font-medium px-4 py-2 rounded-md hover:bg-green-300 transition duration-300"
        data-active={active === link.label || undefined}
        onClick={() => setActive(link.label)}
      >
        {link.label}
      </div>
    </Link>
  ));

  return (
    <MantineProvider>
        <div className='flex  '>
        <nav className="bg-green-100 h-screen w-72 flex flex-col border-r border-gray-300-dark rounded-tl-lg rounded-br-lg">
        <div className="flex-1 flex">
          <div className="flex flex-col items-center pt-16 flex-0 w-16 bg-body border-r ">
            {mainLinks}
          </div>
          <div className="flex-1 bg-gray-100-dark">
            <Title order={4} className="font-sans font-semibold text-xl p-4">
              {active}
            </Title>
            {links}
          </div>
        </div>
      </nav>
      <div >{children}</div> 
        </div>
    </MantineProvider>
  );
}

