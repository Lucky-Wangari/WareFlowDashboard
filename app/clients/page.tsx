'use client'
import { Avatar, Badge, Table, Group, Text, ActionIcon, Anchor, rem } from '@mantine/core';
import { IconPencil, IconTrash } from '@tabler/icons-react';
import { DoubleNavbar } from '../components/DoubleNavbar';

const data = [
  {
    avatar:
      'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-1.png',
    name: 'Robert Wolfkisser',
    job: 'Manager',
    email: 'rob@gmail.com',
    phone: '+44 (452) 886 09 12',
  },
  {
    avatar:
      'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-7.png',
    name: 'Jill Jailbreaker',
    job: 'Supplier',
    email: 'jj@breaker.com',
    phone: '+44 (934) 777 12 76',
  },
  {
    avatar:
      'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-2.png',
    name: 'Henry Silkeater',
    job: 'Delivery',
    email: 'henry@silkeater.io',
    phone: '+44 (901) 384 88 34',
  },
  {
    avatar:
      'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-3.png',
    name: 'Bill Horsefighter',
    job: 'Supplier',
    email: 'bhorser@gmail.com',
    phone: '+44 (667) 341 45 22',
  },
  {
    avatar:
      'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-10.png',
    name: 'Jeremy Footviewer',
    job: 'Manager',
    email: 'jeremy@foot.dev',
    phone: '+44 (881) 245 65 65',
  },
];

const jobColors: Record<string, string> = {
  engineer: 'blue',
  manager: 'cyan',
  designer: 'pink',
};

export default function UsersTable() {

  const rows = data.map((item, index) => (
    <Table.Tr key={index} className=" verticalSpacing=l mx-auto w-[900px] lg:w-3/4  border-t border-black">
      <Table.Td className=" flex items-center "> 
      <Avatar size={30} src={item.avatar} radius="full" className='pl-10 py-4' style={{ width: '90px', height: '90px' }} /> 
                   <div>
          <Text fz="sm" fw={500} className='pl-4'>
            {item.name}
          </Text>
        </div>
      </Table.Td>

      <Table.Td className="py-4">
        <Badge color={jobColors[item.job.toLowerCase()]} variant="light" className="px-3 py-1">
          {item.job}
        </Badge>
      </Table.Td>
      <Table.Td className="py-4">
        <Anchor component="button" size="sm" className="text-green-600">
          {item.email}
        </Anchor>
      </Table.Td>
      <Table.Td className="py-4">
        <Text fz="sm">{item.phone}</Text>
      </Table.Td>
      <Table.Td className="py-4">
        <Group gap={2} justify="flex-end">
          <ActionIcon variant="subtle" color="gray">
            <IconPencil style={{ width: rem(16), height: rem(16) }} stroke={1.5} />
          </ActionIcon>
          <ActionIcon variant="subtle" color="red">
            <IconTrash style={{ width: rem(16), height: rem(16) }} stroke={1.5} />
          </ActionIcon>
        </Group>
      </Table.Td>
    </Table.Tr >
  ));

  return (
    <DoubleNavbar>
       <div className="float-right pt-8 ">
       <div className="md:ml-60 ">
      <Table style={{ height: '600px' }} >
        <Table.Thead>
          <Table.Tr>
            <Table.Th className="px- py-2 text-xl">Employee</Table.Th>
            <Table.Th className="px-4 py-2 text-xl">Job title</Table.Th>
            <Table.Th className="px-4 py-2 text-xl">Email</Table.Th>
            <Table.Th className="px-4 py-2 text-xl">Phone</Table.Th>
            <Table.Th className="px-4 py-2 " />
          </Table.Tr>
        </Table.Thead>
        <Table.Tbody >
          {rows}
        </Table.Tbody>
      </Table>
      </div>
      </div>
    </DoubleNavbar>
  );
}