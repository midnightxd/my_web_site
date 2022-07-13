import { Container, Badge, Link, ListItem, List } from '@chakra-ui/react';
import { ExternalLinkIcon } from '@chakra-ui/icons';
import { Title, WorkGridItem, Meta } from '../../components/work';
import P from '../../components/paragraph';
import Layout from '../../components/layouts/article';
import { WorkImage } from '../../components/work';

const Work = () => {
  return (
    <Layout title="mplayer">
      <Container>
        <Title>
          Music Player App for Android <Badge>1.0.0</Badge>
        </Title>
        <P>
          Music player app, make simple object and clean interface using Expo,
          Expo AV, (Warning: <Badge>This app in state developement</Badge> )
        </P>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Source</Meta>
            <Link href="https://github.com/midnightxd/Mplayer">
              get demo <ExternalLinkIcon mv="2px" />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Platform</Meta>
            <span>MObile, only Android</span>
          </ListItem>
          <ListItem>
            <Meta>Stack</Meta>
            <span>
              Expo, Expo AV, React Native, Styled Components, Lottie, Node.js
              Async Storage, JavaScript, Recycle View
            </span>
          </ListItem>
        </List>
        <WorkImage src="/images/works/mplayer.jpg" w={250} h={400} />
        <WorkImage src="/images/works/_mplayer.jpg" w={250} h={400} />
      </Container>
    </Layout>
  );
};

export default Work;
