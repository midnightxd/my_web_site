import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react';
import { ExternalLinkIcon } from '@chakra-ui/icons';
import { Title, WorkImage, Meta } from '../../components/work';
import P from '../../components/paragraph';
import Layout from '../../components/layouts/article';

const Work = () => {
  return (
    <Layout title="Vim Config">
      <Container>
        <Title>
          Local Maps <Badge>1.0.2</Badge>
        </Title>
        <P>
          Local Maps is an application for registering local commerce, with the
          objective of simplifying the trip to the commerce and boosting the
          local economy.
        </P>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Source</Meta>
            <Link href="https://github.com/midnightxd/LocalMaps">
              get demo <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Platform</Meta>
            <span>Cross-Platform</span>
          </ListItem>
          <ListItem>
            <Meta>Stack</Meta>
            <span>Node.js, React.js, React Native, Expo, LeafLet</span>
          </ListItem>
        </List>
        <WorkImage src="/images/works/local-map.png" alt="Local maps" />
        <WorkImage src="/images/works/local-maps.png" alt="Local maps" />
      </Container>
    </Layout>
  );
};

export default Work;
