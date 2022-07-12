import NextLink from 'next/link';
import { Box, Container, Divider, Button, Text, Image } from '@chakra-ui/react';

const NotFound = () => {
  const error = '/images/404.png';

  return (
    <Container
      textAlign="center"
      mt={100}
      alignItems="center"
      display="flex"
      flexDirection="column"
    >
      <Image src={error} w={300} h={300} />
      <Text>The page you&apos;re looking for was not found</Text>
      <Divider my={6} />
      <Box my={6} align="center">
        <NextLink href="/">
          <Button colorScheme="teal">Return to home</Button>
        </NextLink>
      </Box>
    </Container>
  );
};

export default NotFound;
