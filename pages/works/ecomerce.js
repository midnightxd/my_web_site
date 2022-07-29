import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react';
import { ExternalLinkIcon } from '@chakra-ui/icons';
import { Title, WorkImage, Meta } from '../../components/work';
import P from '../../components/paragraph';
import Layout from '../../components/layouts/article';

const Work = () => {
  return (
    <Layout title="Ecomerce Template">
      <Container>
        <Title>
          Ecomerce <Badge>1.0</Badge>
        </Title>
        <P>Ecomerce templete make with objective a simple and easy use. Tech stack: Next.js, Redux, Stripe, Sanity</P>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Source</Meta>
            <Link href="https://github.com/midnightxd/eComerce">
              Get your templete for free! <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Platform</Meta>
            <span>Cross-Platform</span>
          </ListItem>
          <ListItem>
            <Meta>Stack</Meta>
            <span>Next.js, Redux, Stripe, Sanity</span>
          </ListItem>
        </List>
        <WorkImage src="/images/works/ecomerce-1.png" />
        <WorkImage src="/images/works/ecomerce-2.png" />
        <WorkImage src="/images/works/ecomerce-3.png" />
        <WorkImage src="/images/works/ecomerce-4.png" />
      </Container>
    </Layout>
  );
};

export default Work;
