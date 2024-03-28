'use client'
import { useState } from 'react';
import dayjs from 'dayjs';
import {
  UnstyledButton,
  Text,
  Paper,
  rem,
} from '@mantine/core';
import {
  IconSwimming,
  IconBike,
  IconRun,
  IconChevronDown,
  IconChevronUp,
} from '@tabler/icons-react';
import { DoubleNavbar } from '../components/DoubleNavbar';
import { DoubleHeader } from '../components/DoubleHeader';

export default function StatsControls() {
  const [date, setDate] = useState(new Date(2021, 9, 24));

  const stats = [
    { icon: IconRun, label: 'Total Invoices Received' },
    { icon: IconSwimming, label: 'Total Invoices Cleared' },
  ].map((stat, index) => (
    <div key={index} className={`flex flex-col ${index < 2 ? 'mr-4' : ''} `} >
      <Paper
        className={`pt-4 pb-6 px-4 h-[450px] w-[688px] flex flex-col justify-between bg-white border border-gray-300 rounded-md ${
          index < 2 ? 'mb-' : ''
        }`}
      >
        <div className='flex items-center justify-center pt-20'>
          <stat.icon
            style={{ width: '12rem', height: '12rem' }}        
            className="text-green-300"
            stroke={1.5}
          />
        </div>
        <div >
          <Text className="text-m font-semibold uppercase text-gray-600">
            {stat.label}
          </Text>
          <Text className="text-sm font-semibold text-black mt-2">
            <span className="font-bold text-xl">
              {Math.floor(Math.random() * 6 + 4)} Invoices
            </span>{' '}
          </Text>
        </div>
      </Paper>
    </div>
  ));

  const bikeCard = (
    <Paper
      key="bike"
      className={`h-[360px] pt-4 pb-10 px-4 w-full bg-white border border-gray-300 rounded-md `}
    >
      <div className="flex items-center justify-center">
        <IconBike
          style={{ width: '12rem', height: '12rem' }}
          className="text-green-300 mr-2"
          stroke={1.5}
        />
      </div>
      <div className='pt-20'>
        <Text className="text-m font-semibold uppercase text-gray-600">
          Total Pending Invoices
        </Text>
        <Text className="text-sm font-semibold text-black mt-2">
          <span className="font-bold text-xl">{Math.floor(Math.random() * 6 + 4)} Invoices</span> 
        </Text>
      </div>
    </Paper>
  );

  return (
    <DoubleNavbar>
      <DoubleHeader/>
      <div className=" bg-gradient-to-b from-green-300 to-yellow-200 p-8 rounded-md flex h-[850px] w-[1550px] " >
        <div className="flex flex-col mr-8">
          <UnstyledButton
            className="h-[28px]  flex justify-center items-center rounded-md transition duration-200 ease-in-out hover:bg-green-100 hover:text-black"
            onClick={() =>
              setDate((current) => dayjs(current).add(1, 'day').toDate())
            }
          >
            <IconChevronUp
              style={{ width: rem(16), height: rem(16) }}
              className="transform"
              stroke={1.5}
            />
          </UnstyledButton>

          <div className="flex-1 flex flex-col justify-center">
            <Text className="text-4xl font-semibold text-black text-center mb-1">
              {dayjs(date).format('DD')}
            </Text>
            <Text className="text-xs text-black text-center">
              {dayjs(date).format('MMMM')}
            </Text>
          </div>

          <UnstyledButton
            className="h-[28px] w-full flex justify-center items-center rounded-md transition duration-200 ease-in-out hover:bg-green-600 hover:text-white"
            onClick={() =>
              setDate((current) => dayjs(current).subtract(1, 'day').toDate())
            }
          >
            <IconChevronDown
              style={{ width: rem(16), height: rem(16) }}
              className="transform"
              stroke={1.5}
            />
          </UnstyledButton>
        </div>
        <div className="flex-1 flex flex-wrap">
          {stats}
          {bikeCard}
        </div>
      </div>
    </DoubleNavbar>
  );
}

