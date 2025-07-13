import Markdown from 'react-markdown';
import renderer from './renderer';
import { Card, Stack, Text } from '@chakra-ui/react';
import { Link, Route } from 'react-router';
import { FaArrowLeft } from 'react-icons/fa';
import posts from './posts';
import { Column } from '../components/ui/column';


function BlogList() {
  return (
    <Column>
      <Stack direction="row" width="100%" justifyContent="flex-start">
        <Link to="/" aria-label="Home">
          <FaArrowLeft style={{ marginRight: '8px' }} />
        </Link>
      </Stack>
      {posts.map(({ id, title, description }) => (
        <Link to={`/blog/${id}`}>
          <Card.Root
            bg="bg.2"
            color="textColor"
            width={['100%', '90%', '40rem']}
            height="auto"
            border="none"
            className="clickable"
          >
            <Card.Body height="auto" minHeight="5rem">
              <Text textStyle="sm">{title}</Text>
              <Text fontWeight="light">{description}</Text>
            </Card.Body>
          </Card.Root>
        </Link>
      ))}
    </Column>
  );
}

function BlogPost({ content }: { content: string }) {
  return (
    <Column>
      <Stack direction="row" width="100%" justifyContent="flex-start">
        <Link to="/blog" aria-label="Blog">
          <FaArrowLeft style={{ marginRight: '8px' }} />
        </Link>
      </Stack>
      <Card.Root
        bg="bg.2"
        color="textColor"
        maxWidth="800px"
        height="auto"
        border="none"
      >
        <Card.Body height="auto" minHeight="5rem">
          <Markdown components={renderer} children={content} skipHtml />
        </Card.Body>
      </Card.Root>
    </Column>
  );
}
export const blogRoutes = (
  <Route path="blog">
    <Route index element={<BlogList />} />
    {posts.map(({ id, content }) => (
      <Route path={id} element={<BlogPost content={content} />} />
    ))}
  </Route>
);
