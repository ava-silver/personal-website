import Markdown from 'react-markdown';
import renderer from './renderer';
import { Card, Stack, Text } from '@chakra-ui/react';
import { Link, Outlet, Route } from 'react-router';
import { FaArrowLeft } from 'react-icons/fa';

/* eslint-disable import/no-webpack-loader-syntax */
import transition from '!!raw-loader!./posts/2025-06-22-transition.md';
import coming_out from '!!raw-loader!./posts/2025-07-08-coming-out.md';

interface PostData {
  title: string;
  id: string;
  description: string;
  content: string;
}

const posts: PostData[] = [
  {
    title: 'Coming Out',
    id: 'coming-out',
    description: 'A reflection on what it means to come out',
    content: coming_out,
  },
  {
    title: 'Transition: A Retrospective',
    id: 'transition',
    description: 'A retrospective of the last 5 years of my transition',
    content: transition,
  },
];

export function Blog() {
  return <Outlet />;
}

function BlogList() {
  return (
    <Stack
      alignItems="center"
      width="100%"
      m={[3, 8]}
      gap="1rem"
      justifyContent="flex-start"
    >
      <Stack direction="row" width="100%" justifyContent="flex-start">
        <Link to="/" aria-label="Home">
          <FaArrowLeft style={{ marginRight: '8px' }} />
          Home
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
    </Stack>
  );
}

function BlogPost({ content }: { content: string }) {
  return (
    <Stack alignItems="center" m={[3, 8]}>
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
    </Stack>
  );
}

export const blogRoutes = [
  <Route index element={<BlogList />} />,
  ...posts.map(({ id, content }) => (
    <Route path={id} element={<BlogPost content={content} />} />
  )),
];
