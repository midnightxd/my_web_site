import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react';
import Section from '../components/section';
import { WorkGridItem } from '../components/grid-item';
import Layout from '../components/layouts/article';

import Work from './works/vim';

import netflix from '../public/images/works/netflix.png';
import voidLinux from '../public/images/works/1wm.png';
import vimSetup from '../public/images/works/vim.png';

const Works = () => {
  return (
    <Layout>
      <Container>
        <Heading as="h3" fontSize={20} mb={4}>
          Works
        </Heading>
        <SimpleGrid columns={[1, 1, 2]} gap={6}>
          <Section>
            <WorkGridItem
              id="netflix"
              title="Netflix-Clone"
              thumbnail={netflix}
            >
              Clone ui netflix with react
            </WorkGridItem>
          </Section>
          <Section delay={0.2}>
            <WorkGridItem
              id="desktop"
              title="Void Linux with i3wm"
              thumbnail={voidLinux}
            >
              My void linux setup
            </WorkGridItem>
          </Section>
          <Section delay={0.3}>
            <WorkGridItem
              id="vim"
              title="My setting for vim 9.0"
              thumbnail={vimSetup}
            >
              My settings for vim 9.0
            </WorkGridItem>
          </Section>
        </SimpleGrid>
      </Container>
    </Layout>
  );
};

export default Works;
