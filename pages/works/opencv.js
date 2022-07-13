import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react';
import { ExternalLinkIcon } from '@chakra-ui/icons';
import { Title, WorkImage, Meta } from '../../components/work';
import P from '../../components/paragraph';
import Layout from '../../components/layouts/article';

const Work = () => {
  return (
    <Layout title="opencv">
      <Container>
        <Title>
          Face Detector <Badge>1.2.0</Badge>
        </Title>
        <P>
          Face detector make simple object of server API, and esay usege, modern
          stack, low cost of memory and process. Acuracy 96%.
        </P>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Source</Meta>
            <Link href="https://github.com/midnightxd/FaceDetection">
              get demo <ExternalLinkIcon mc="2px" />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Platform</Meta>
            <span>Only Linux</span>
          </ListItem>
          <ListItem>
            <Meta>Stack</Meta>
            <span>
              Google Mediapipe, OpenCV <Badge>v3</Badge>, Python{' '}
              <Badge>3.8</Badge>, Yolo <Badge>v3</Badge>
            </span>
          </ListItem>
        </List>
        <WorkImage src="/images/works/face-detection.png" />
      </Container>
    </Layout>
  );
};

export default Work;
