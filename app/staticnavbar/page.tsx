'use client'
import { Avatar, Badge, Table, Group, Text, ActionIcon, Anchor, rem } from '@mantine/core';
import { IconPencil, IconTrash } from '@tabler/icons-react';
import { DoubleNavbar } from '../components/DoubleNavbar';

const data = [
  {
    avatar:
      'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-1.png',
    name: 'Robert Wolfkisser',
    job: 'Engineer',
    email: 'rob_wolf@gmail.com',
    phone: '+44 (452) 886 09 12',
  },
  {
    avatar:
      'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-7.png',
    name: 'Jill Jailbreaker',
    job: 'Engineer',
    email: 'jj@breaker.com',
    phone: '+44 (934) 777 12 76',
  },
  {
    avatar:
      'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-2.png',
    name: 'Henry Silkeater',
    job: 'Designer',
    email: 'henry@silkeater.io',
    phone: '+44 (901) 384 88 34',
  },
  {
    avatar:
      'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-3.png',
    name: 'Bill Horsefighter',
    job: 'Designer',
    email: 'bhorsefighter@gmail.com',
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
    <Table.Tr key={index} className="py-20 verticalSpacing=l mx-auto w-full lg:w-3/4 ">
      <Table.Td className="py-8 flex items-center"> 
      <Avatar size={30} src={item.avatar} radius="full" className="mr-2" style={{ width: '30px', height: '30px' }} /> 
                   <div>
          <Text fz="sm" fw={500}>
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
    </Table.Tr>
  ));

  return (
    <DoubleNavbar>
      <Table verticalSpacing="l" className='mr-6'>
        <Table.Thead>
          <Table.Tr>
            <Table.Th className="px-4 py-2">Employee</Table.Th>
            <Table.Th className="px-4 py-2">Job title</Table.Th>
            <Table.Th className="px-4 py-2">Email</Table.Th>
            <Table.Th className="px-4 py-2">Phone</Table.Th>
            <Table.Th className="px-4 py-2" />
          </Table.Tr>
        </Table.Thead>
        <Table.Tbody>
          {rows}
        </Table.Tbody>
      </Table>
    </DoubleNavbar>
  );
}