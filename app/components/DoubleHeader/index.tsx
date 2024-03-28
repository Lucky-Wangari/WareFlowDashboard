import { useState } from 'react';
import { Container, Anchor, Group, Burger, Box } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';

export function DoubleHeader() {
  const [opened, { toggle }] = useDisclosure(false);
  const [active, setActive] = useState(0);


  const mainLinks = [
    { link: '#', label: 'Book a demo' },
    { link: '#', label: 'Documentation' },
    { link: '#', label: 'Community' },
    { link: '#', label: 'Academy' },
    { link: '#', label: 'Forums' },
  ];

  const mainItems = mainLinks.map((item, index) => (
    <Anchor<'a'>
      href={item.link}
      key={item.label}
      className={`text-xs uppercase ${
        index === active ? 'text-black' : 'text-gray-6'
      } px-2 py- font-semibold border-b border-transparent transition-colors duration-100 hover:text-black hover:border-blue-6`}
      onClick={(event) => {
        event.preventDefault();
        setActive(index);
      }}
    >
      {item.label}
    </Anchor>
  ));

  return (
    <header className="h-20 bg-body border-b border-black">
      <Container
        className="h-full flex items-center justify-between bg-white " 
        style={{ maxWidth: '100%' }}
      >
        {/* <MantineLogo size={34} /> */}
        <Box className="flex flex-col justify-between">
          <Group className="mr-[-0.25rem]">{mainItems}</Group>
        </Box>
        <Burger
          opened={opened}
          onClick={toggle}
          className="hidden sm:block"
          size="sm"
        />
      </Container>
    </header>
  );
}
