'use client'
import React from 'react';
import { useRouter } from 'next/navigation';
import { MantineProvider, Table } from '@mantine/core';
import { DoubleNavbar } from '../components/DoubleNavbar';
import { DoubleHeader } from '../components/DoubleHeader';

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
    router.push(`/invoice`);
  };

  const rows = data.map((row, index) => (
    <React.Fragment key={index}>
      <Table.Tr onClick={handleRowClick} className="cursor-pointer hover:bg-green-100">
        <Table.Td>{row.name}</Table.Td>
        <Table.Td>{row.email}</Table.Td>
        <Table.Td>{row.company}</Table.Td>
      </Table.Tr>
      <Table.Tr className="border-t border-black "></Table.Tr>
    </React.Fragment>
  ));

  return (
    <DoubleNavbar>
      <DoubleHeader/>
      <div className="flex justify-center items-center  ">
        <div className="md:ml-60 ">
          <Table style={{ height: '600px' }} className="mantine-provider w-full md:w-3/4">
            <Table.Thead>
              <Table.Tr>
                <Table.Th className="py-4 pr-4 md:pr-60 text-xl ">Name</Table.Th>
                <Table.Th className="pr-4 md:pr-60 text-xl">Email</Table.Th>
                <Table.Th className="pr-4 md:pr-40 text-xl">Company</Table.Th>
              </Table.Tr>
            </Table.Thead>
            <Table.Tbody className=" border-t border-black">{rows}</Table.Tbody>
          </Table>
        </div>
      </div>
    </DoubleNavbar>
  );
};

export default TableScrollAreaComponent;
