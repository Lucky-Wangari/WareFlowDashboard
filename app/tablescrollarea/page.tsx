'use client'
import React from 'react';
import { useRouter } from 'next/navigation';
import { MantineProvider, Table } from '@mantine/core';

const TableScrollAreaComponent = () => {
  const data = [
    {
      name: 'Athena Weissnat',
      company: 'Little - Rippin',
      email: 'Elouise.Prohaska@yahoo.com',
    },
    {
      name: 'Deangelo Runolfsson',
      company: 'Greenfelder - Krajcik',
      email: 'Kadin_Trantow87@yahoo.com',
    },
    {
      name: 'Danny Carter',
      company: 'Kohler and Sons',
      email: 'Marina3@hotmail.com',
    },
    {
      name: 'Lea Witting',
      company: 'Hodkiewicz Inc',
      email: 'Ford_Kovacek4@yahoo.com',
    },
    {
      name: 'Kelli Runolfsson',
      company: "Feest - O'Hara",
      email: 'Dimitri87@yahoo.com',
    },
    {
      name: 'Brook Gaylord',
      company: 'Conn, Huel and Nader',
      email: 'Immanuel77@gmail.com',
    },
  ];

  const router = useRouter();

  const handleRowClick = () => {
    router.push(`/invoice`)
  };

  const rows = data.map((row, index) => (
    <React.Fragment key={index}>
      <Table.Tr onClick={handleRowClick} className="cursor-pointer">
        <Table.Td>{row.name}</Table.Td>
        <Table.Td>{row.email}</Table.Td>
        <Table.Td>{row.company}</Table.Td>
      </Table.Tr>
      <Table.Tr className="border-b border-black "></Table.Tr>
    </React.Fragment>
  ));

  return (
    <MantineProvider>
      <Table miw={700} style={{ height: '500px'}} className="mantine-provider justify-center items-center h-screen w-3/4 ">
        <Table.Thead >
          <Table.Tr >
            <Table.Th className="py-4 pr-60 text-xl">Name</Table.Th>
            <Table.Th className="pr-60 text-xl">Email</Table.Th>
            <Table.Th className="pr-40 text-xl">Company</Table.Th>
          </Table.Tr>
        </Table.Thead >
        <Table.Tbody className="border-t border-black">{rows}</Table.Tbody>
      </Table>
    </MantineProvider>
  );
}

export default TableScrollAreaComponent

