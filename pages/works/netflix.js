import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react';
import { ExternalLinkIcon } from '@chakra-ui/icons';
import { Title, WorkImage, Meta } from '../../components/work';
import P from '../../components/paragraph';
import Layout from '../../components/layouts/article';

const Work = () => {
  return (
    <Layout title="netflix">
      <Container>
        <Title>Netflix Clone UI</Title>
        <P>
          Netflix clone ui, make with React.js and new modern interface style
          API data base from The Movie Database.
        </P>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Source</Meta>
            <Link href="https://github.com/midnightxd/netflix-clone">
              Netflix Clone <ExternalLinkIcon mx="2px" />
            </Link>
            <Meta>Platform</Meta>
            <span>Cross-Platform</span>
          </ListItem>
          <ListItem>
            <Meta>Stack</Meta>
            <span>
              Node.js <Badge>16.15.1</Badge>, React <Badge>18.1.0</Badge>
            </span>
          </ListItem>
        </List>
        <WorkImage src="/images/works/netflix-movie.png" />
        <WorkImage src="/images/works/netflix.png" />
      </Container>
    </Layout>
  );
};

export default Work;
