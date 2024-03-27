import { useState } from 'react';
import dayjs from 'dayjs';
import {
  UnstyledButton,
  Text,
  Paper,
  Group,
  rem,
  MantineProvider,
} from '@mantine/core';
import {
  IconSwimming,
  IconBike,
  IconRun,
  IconChevronDown,
  IconChevronUp,
} from '@tabler/icons-react';

export default function HeaderMegaMenu() {
  const [date, setDate] = useState(new Date(2021, 9, 24));

  const stats = [
    { icon: IconRun, label: 'Received Invoices' },
    { icon: IconSwimming, label: 'Cleared Invoices' },
  ].map((stat, index) => (
    <div key={index} className={`flex flex-col ${index < 2 ? 'mr-4' : ''}`}>
      <Paper
        className={`pt-4 pb-6 px-4 h-[500px] w-[800px] flex flex-col justify-between bg-white border border-gray-300 rounded-md ${
          index < 2 ? 'mb-' : ''
        }`}
      >
        <div className='flex items-center'>
          <stat.icon
            style={{ width: rem(32), height: rem(32) }}
            className="text-blue-600"
            stroke={1.5}
          />
          <Text className="text-m font-semibold uppercase text-gray-600 ml-2">
            {stat.label}
          </Text>
        </div>
        <div className='flex justify-center'>
          <Text className="text-sm font-semibold text-black ">
            <span className="font-bold text-4xl">
              {Math.floor(Math.random() * 6 + 4)} Invoices
            </span>{' '}
          </Text>
        </div>
      </Paper>
    </div>
  ));

  const bikeCard = (
    <Paper
      key="Bike"
      className={`h-[300px] pt-4 pb-6 px-4 w-[1620px] bg-white border border-gray-300 rounded-md mb-4`}
    >
      <div className="flex items-center">
        <IconBike
          style={{ width: rem(32), height: rem(32) }}
          className="text-blue-600 mr-2"
          stroke={1.5}
        />
        <Text className="text-m font-semibold uppercase text-gray-600">
          Total Pending Invoices
        </Text>
      </div>
      <div className='flex justify-center'>
        <Text className="text-sm font-semibold text-black">
          <span className="font-bold text-lg">{Math.floor(Math.random() * 200 + 4)}</span> Invoices 
        </Text>
      </div>
    </Paper>
  );

  return (
    <MantineProvider>
      <div className=" bg-gradient-to-b from-blue-300 to-blue-700 p-8 rounded-md flex h-screen">
        <div className="flex flex-col mr-8">
          <UnstyledButton
            className="h-[28px] w-full flex justify-center items-center rounded-md transition duration-200 ease-in-out hover:bg-blue-500 hover:text-white"
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
            <Text className="text-4xl font-semibold text-white text-center mb-1">
              {dayjs(date).format('DD')}
            </Text>
            <Text className="text-xs text-white text-center">
              {dayjs(date).format('MMMM')}
            </Text>
          </div>

          <UnstyledButton
            className="h-[28px] w-full flex justify-center items-center rounded-md transition duration-200 ease-in-out hover:bg-blue-500 hover:text-white"
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
    </MantineProvider>
  );
}
