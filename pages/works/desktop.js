import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react';
import { ExternalLinkIcon } from '@chakra-ui/icons';
import { Title, WorkImage, Meta } from '../../components/work';
import P from '../../components/paragraph';
import Layout from '../../components/layouts/article';

const Work = () => {
  return (
    <Layout title="vim">
      <Container>
        <Title>
          Vim <Badge>9.0</Badge>
        </Title>
        <P>
          My themes and settings from my development environment, with Void
          Linux GLibc and i3 window manger made from scratch.
        </P>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Source</Meta>
            <Link href="https://github.com/midnightxd/dotfiles">
              My dotfiles <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Platform</Meta>
            <span>Only Linux</span>
          </ListItem>
          <ListItem>
            <Meta>Stack</Meta>
            <span>Vim, Shell, C</span>
          </ListItem>
        </List>
        <WorkImage src="/images/works/vim.png" alt="Vim example" />
        <WorkImage src="/images/works/theme2-1.png" alt="Vim example" />
        <WorkImage src="/images/works/theme2-3.png" alt="Vim example" />
        <WorkImage src="/images/works/my-i3-1.png" alt="Vim example" />
        <WorkImage src="/images/works/my-i3-2.png" alt="Vim example" />
        <WorkImage src="/images/works/my-i3-3.png" alt="Vim example" />
      </Container>
    </Layout>
  );
};

export default Work;
