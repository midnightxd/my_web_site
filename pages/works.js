import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react';
import Section from '../components/section';
import { WorkGridItem } from '../components/grid-item';
import Layout from '../components/layouts/article';

import netflix from '../public/images/works/netflix.png';
import voidLinux from '../public/images/works/1wm.png';
import vimSetup from '../public/images/works/vim.png';
import mplayer from '../public/images/works/mplayer.jpg';
import opencv from '../public/images/works/face-detection.png';
import localmaps from '../public/images/works/local-maps.png';
import ecomerce from '../public/images/works/ecomerce-1.png';

const Works = () => {
  return (
    <Layout>
      <Container>
        <Heading as="h3" fontSize={20} mb={4}>
          Works
        </Heading>
        <SimpleGrid columns={[1, 1, 2]} gap={6}>
          <Section>
            <WorkGridItem id="netflix" title="Netflix Clone" thumbnail={netflix}>
              Clone ui netflix with react
            </WorkGridItem>
          </Section>
          <Section delay={0.2}>
            <WorkGridItem id="desktop" title="Void Linux with i3wm" thumbnail={voidLinux}>
              My void linux setup
            </WorkGridItem>
          </Section>
          <Section delay={0.3}>
            <WorkGridItem id="vim" title="My vim settings" thumbnail={vimSetup}>
              My vim with LSP, version 9.0 suport packages native, otimized for web development.
            </WorkGridItem>
          </Section>
          <Section delay={0.4}>
            <WorkGridItem id="mplayer" title="Music Player" thumbnail={mplayer}>
              App for music and recomended songs, make only react native.
            </WorkGridItem>
          </Section>
          <Section delay={0.5}>
            <WorkGridItem id="opencv" title="Face Detection" thumbnail={opencv}>
              Face detection, make with python, OpenCv and Yolo v3.
            </WorkGridItem>
          </Section>
          <Section delay={0.6}>
            <WorkGridItem id="localmaps" title="Local Maps" thumbnail={localmaps}>
              App with version Web and Mobile, for register locale comerce.
            </WorkGridItem>
          </Section>
          <Section delay={0.7}>
            <WorkGridItem id="ecomerce" title="Ecomerce" thumbnail={ecomerce}>
              Template for ecomerce make with Next.js, Stripe, Redux and Sanity.
            </WorkGridItem>
          </Section>
        </SimpleGrid>
      </Container>
    </Layout>
  );
};

export default Works;
