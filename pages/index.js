import NextLink from 'next/link';
import { Container, Box, Heading, Image, SimpleGrid, useColorModeValue, Button, List, ListItem, Icon } from '@chakra-ui/react';

import { IoLogoInstagram, IoLogoGithub, IoLogoWhatsapp } from 'react-icons/io5';

import Layout from '../components/layouts/article';
import Section from '../components/section';
import Paragraph from '../components/paragraph';
import { ChevronRightIcon } from '@chakra-ui/icons';
import { BioSection, BioYear } from '../components/bio';
import { GridItem } from '../components/grid-item';
import Link from 'next/link';

const Page = () => {
  return (
    <Layout>
      <Container>
        <Box borderRadius="lg" bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')} p={3} mt={30} mb={5} align="center">
          Hello, I&apos;m a backend developer!
        </Box>
        <Box display={{ md: 'flex' }}>
          <Box flexGrow={1}>
            <Heading as="h2" variant="page-title">
              HXVRMXNV
            </Heading>
            <p>Digital creator / Open-Source Enthusiast</p>
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
            Hello My name is Leonardi, I am a backend developer and open-source enthusiast. I like to solve real-life problems
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
          <BioSection>
            <BioYear>2022</BioYear>
            Full-stack Web Developer
          </BioSection>
          <BioSection>
            <BioYear>2022</BioYear>
            Deep Learnig
          </BioSection>
        </Section>

        <Section delay={0.3}>
          <Heading as="h3" variant="section-title">
            I ❤
          </Heading>
          <Paragraph>Music, Robotic, Code, Gaming, Astro</Paragraph>
        </Section>
        <Section delay={0.4}>
          <Heading as="h3" variant="section-title">
            On the web
          </Heading>
          <List>
            <ListItem>
              <Link href="https://github.com/midnightxd" target="_blank">
                <Button variant="ghost" colorScheme="teal" leftIcon={<Icon as={IoLogoGithub} />}>
                  @midnightxd
                </Button>
              </Link>
            </ListItem>
            <ListItem>
              <Link href="https://instagram.com/japanw7brasil" target="_blank">
                <Button variant="ghost" colorScheme="teal" leftIcon={<Icon as={IoLogoInstagram} />}>
                  @midnightxd
                </Button>
              </Link>
            </ListItem>
            <ListItem>
              <Link href="https://api.whatsapp.com/send?phone=5586994068384&text=Contact-me!" target="_blank">
                <Button variant="ghost" colorScheme="teal" leftIcon={<Icon as={IoLogoWhatsapp} />}>
                  Leonardi Melo
                </Button>
              </Link>
            </ListItem>
          </List>
        </Section>
      </Container>
    </Layout>
  );
};

export default Page;
