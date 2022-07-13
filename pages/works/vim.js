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
          Vim <Badge>9.0</Badge>
        </Title>
        <P>
          My desktop of developement 2021 - 2022, with Desktop Manager i3wm, and
          alacritty is a terminal gender using GPU.
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
            <span>Node.js, Vim, Shell, C</span>
          </ListItem>
          <ListItem>
            <Meta>Blogpost</Meta>
            <Link href="">
              It's recomended for user with 4GB of ram and Low cost of process
            </Link>
          </ListItem>
        </List>
        <WorkImage src="/images/works/vim.png" alt="Vim example" />
      </Container>
    </Layout>
  );
};

export default Work;
