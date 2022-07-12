import NextLink from 'next/link';
import { Container, Box, Heading, Image, useColorModeValue, Button } from '@chakra-ui/react';
import Section from '../components/section';
import Paragraph from '../components/paragraph';
import { ChevronRightIcon } from '@chakra-ui/icons';
import { BioSection, BioYear } from '../components/bio';

const Page = () => {
  return (
    <Container>
      <Box borderRadius="lg" bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')} p={3} mt={30} mb={5} align="center">
        Hello, I&apos;m a full-stack developer!
      </Box>
      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            HXVRMXNV
          </Heading>
          <p>Digital creator ( Developer Web and Mobile )</p>
        </Box>
        <Box flexShrink={0} mt={{ base: 4, md: 0 }} ml={{ md: 6 }} align="center">
          <Image
            borderColor="whiteAlpha.800"
            borderWidth={2}
            borderStyle="solid"
            maxWidth="100px"
            display="inline-block"
            borderRadius="full"
            src="/images/casual.png"
            alt="Profile Img"
          />
        </Box>
      </Box>

      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          Work
        </Heading>
        <Paragraph>
          Hello My name is Leonardi, I am a full-stack developer and open-source enthusiast. I like to solve real-life problems
          using code.
        </Paragraph>
        <Box align="center" my={4}>
          <NextLink href="/works">
            <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
              My portifolio
            </Button>
          </NextLink>
        </Box>
      </Section>

      <Section delay={0.2}>
        <Heading as="h3" variant="section-title">
          Bio
        </Heading>
        <BioSection>
          <BioYear>2015 - 2016</BioYear>
          Basic IT
        </BioSection>
        <BioSection>
          <BioYear>2016 - 2017</BioYear>
          Advanced Computing
        </BioSection>
        <BioSection>
          <BioYear>2019 - 2021</BioYear>
          High School / Technician in Informatics
        </BioSection>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          I ❤
        </Heading>
        <Paragraph>Music, Robotic, Code, Gaming, Astro</Paragraph>
      </Section>
    </Container>
  );
};

export default Page;
